import { useEffect, useState } from "react";

import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";

import DividerSection from "../components/DividerSection";

const RELEASE_MANIFEST_URL =
	import.meta.env.VITE_RESUME_TAILOR_MANIFEST_URL ||
	"/downloads/releases/latest.json";

const PLATFORM_DETAILS = {
	macosAppleSilicon: {
		platform: "macOS",
		details: "Apple Silicon · macOS 11 or later · ZIP",
		note: "After extracting, drag Resume Tailor into Applications. The app is ad-hoc signed and may require Open Anyway in Privacy & Security.",
	},
	windowsX64: {
		platform: "Windows",
		details: "x64 · NSIS installer",
		note: "This x64 installer is unsigned. Windows may show a SmartScreen warning until it is code-signed.",
	},
};

export default function ResumeTailor() {
	const [release, setRelease] = useState(null);
	const [error, setError] = useState("");
	const [retryCount, setRetryCount] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: retryCount intentionally triggers a new manifest request.
	useEffect(() => {
		const controller = new AbortController();

		async function loadRelease() {
			setError("");

			try {
				const manifestUrl = new URL(RELEASE_MANIFEST_URL, window.location.href);
				const response = await fetch(manifestUrl, {
					cache: "no-cache",
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error(`Release manifest returned HTTP ${response.status}.`);
				}

				const manifest = await response.json();
				setRelease(parseReleaseManifest(manifest, response.url));
			} catch (loadError) {
				if (loadError instanceof Error && loadError.name === "AbortError") {
					return;
				}

				setError(
					loadError instanceof Error
						? loadError.message
						: "The latest release could not be loaded.",
				);
			}
		}

		loadRelease();

		return () => controller.abort();
	}, [retryCount]);

	return (
		<DividerSection title="Resume Tailor">
			<div className="md:mx-4">
				<p className="max-w-2xl text-slate-300">
					A local, text-first desktop app for tailoring grounded resumes and
					cover letters from a reusable profile and job posting.
				</p>

				{!release && !error && (
					<p className="mt-6 text-sm text-slate-400" aria-live="polite">
						Checking for the latest release…
					</p>
				)}

				{error && (
					<div
						className="mt-6 max-w-2xl rounded-xl bg-slate-800 p-6"
						role="alert"
					>
						<p className="font-bold">Downloads are temporarily unavailable.</p>
						<p className="mt-2 text-sm text-slate-400">{error}</p>
						<button
							type="button"
							className="badge mt-4 bg-indigo-500 px-5 py-4 font-heading font-bold text-slate-200 hover:brightness-110"
							onClick={() => setRetryCount((count) => count + 1)}
						>
							Try again
						</button>
					</div>
				)}

				{release && (
					<>
						<p className="mt-2 text-sm text-slate-400">
							Latest version {release.version}
						</p>

						<div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
							{Object.entries(PLATFORM_DETAILS).map(([key, content]) => (
								<ReleaseCard
									key={key}
									{...content}
									download={release.downloads[key]}
								/>
							))}
						</div>

						<a
							href={release.checksums.url}
							download={release.checksums.filename}
							className="mt-6 inline-flex items-center text-sm text-indigo-300 hover:md:text-indigo-100"
						>
							Download SHA-256 checksums <DownloadIcon className="ml-2" />
						</a>
					</>
				)}
			</div>
		</DividerSection>
	);
}

function ReleaseCard({ platform, details, download, note }) {
	return (
		<section className="rounded-xl bg-slate-800 p-6">
			<h2 className="font-heading text-xl font-bold">{platform}</h2>
			<p className="mt-2 text-sm text-slate-400">{details}</p>
			<a
				href={download.url}
				download={download.filename}
				className="badge mt-6 flex w-fit bg-indigo-500 px-6 py-5 text-slate-200 hover:brightness-110"
			>
				<DownloadIcon className="mr-2 h-4 w-4" />
				<span className="font-heading font-bold">Download for {platform}</span>
			</a>
			<p className="mt-6 text-sm text-slate-300">{note}</p>
			<p className="mt-4 break-all font-mono text-xs text-slate-400">
				SHA-256: {download.sha256}
			</p>
		</section>
	);
}

function parseReleaseManifest(manifest, manifestUrl) {
	if (!manifest || typeof manifest !== "object") {
		throw new Error("The release manifest is invalid.");
	}

	const version = requireString(manifest.version, "version");
	const downloads = manifest.downloads;

	if (!downloads || typeof downloads !== "object") {
		throw new Error("The release manifest does not contain downloads.");
	}

	return {
		version,
		downloads: {
			macosAppleSilicon: parseDownload(
				downloads.macosAppleSilicon,
				"macosAppleSilicon",
				manifestUrl,
			),
			windowsX64: parseDownload(
				downloads.windowsX64,
				"windowsX64",
				manifestUrl,
			),
		},
		checksums: parseFile(manifest.checksums, "checksums", manifestUrl),
	};
}

function parseDownload(download, field, manifestUrl) {
	const parsedDownload = parseFile(download, field, manifestUrl);
	const sha256 = requireString(download.sha256, `${field}.sha256`);

	if (!/^[a-f0-9]{64}$/i.test(sha256)) {
		throw new Error(`The release manifest field ${field}.sha256 is invalid.`);
	}

	return { ...parsedDownload, sha256 };
}

function parseFile(file, field, manifestUrl) {
	if (!file || typeof file !== "object") {
		throw new Error(`The release manifest field ${field} is invalid.`);
	}

	return {
		filename: requireString(file.filename, `${field}.filename`),
		url: new URL(requireString(file.url, `${field}.url`), manifestUrl).href,
	};
}

function requireString(value, field) {
	if (typeof value !== "string" || value.trim() === "") {
		throw new Error(`The release manifest field ${field} is invalid.`);
	}

	return value;
}
