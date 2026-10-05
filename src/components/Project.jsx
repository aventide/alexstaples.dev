import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import { ReactComponent as LinkIcon } from "../assets/icons/link.svg";

import SkillsList from "../components/SkillsList";

// sit above the full-card link, but let clicks fall through to it
const layer = "relative z-10 pointer-events-none";

function linkProps(action) {
	const sameTab = action.download || action.newTab === false;
	return {
		href: action.href,
		target: sameTab ? undefined : "_blank",
		rel: sameTab ? undefined : "noreferrer noopener",
		download: action.download || undefined,
	};
}

export default function Project({
	name,
	description,
	skills,
	image,
	actions = [],
}) {
	const primaryAction = actions[0];
	// on sm+ the image fills the left column; on mobile it sits above the text
	const textColumn = image ? "sm:col-start-2" : "";

	return (
		<li
			className={`relative grid content-start gap-x-4 sm:gap-x-6 p-5 md:p-6 rounded-xl transition-colors ${
				image
					? "grid-cols-1 sm:grid-cols-[14rem_1fr] sm:grid-rows-[auto_auto_auto_1fr] md:grid-cols-[20rem_1fr]"
					: "grid-cols-1"
			} xl:gap-x-8 ${primaryAction ? "hover:bg-slate-800/70" : ""}`}
		>
			{primaryAction && (
				<a
					{...linkProps(primaryAction)}
					aria-label={`${primaryAction.label}: ${name}`}
					className="absolute inset-0 z-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300"
				>
					<span className="sr-only">
						{primaryAction.label}: {name}
					</span>
				</a>
			)}
			{image && (
				<img
					src={image}
					alt=""
					className={`${layer} w-full aspect-[16/10] rounded-lg object-cover mb-4 sm:mb-0 sm:row-span-4`}
				/>
			)}
			<p className={`${layer} ${textColumn} text-lg font-bold`}>{name}</p>
			<p
				className={`${layer} ${textColumn} mt-2 xl:max-w-3xl text-sm text-slate-300`}
			>
				{description}
			</p>
			<div className={`${layer} ${textColumn} mt-4`}>
				<SkillsList skills={skills} />
			</div>
			{actions.length > 0 && (
				<div
					className={`${layer} ${textColumn} pt-4 flex flex-wrap gap-x-4 gap-y-2`}
				>
					{actions.map((action) => {
						const ActionIcon = action.download ? DownloadIcon : LinkIcon;

						return (
							<a
								key={action.href}
								{...linkProps(action)}
								className="text-indigo-300 hover:md:text-indigo-100 text-sm pointer-events-auto"
							>
								<span className="flex items-center">
									{action.label} <ActionIcon className="ml-2" />
								</span>
							</a>
						);
					})}
				</div>
			)}
		</li>
	);
}
