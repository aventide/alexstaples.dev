import { useState } from "react";

import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import text from "../assets/text/resume.json";

// "Alex-Staples-Resume.pdf" -> "Alex-Staples-Resume-10272026.pdf", dated today as MMDDYYYY
function datedFilename(filename) {
	const now = new Date();
	const pad = (n) => String(n).padStart(2, "0");
	const month = pad(now.getMonth() + 1);
	const day = pad(now.getDate());
	return filename.replace(/\.pdf$/, `-${month}${day}${now.getFullYear()}.pdf`);
}

// loads the PDF library and builds the PDF only on click, keeping it out of the main bundle
async function downloadResume() {
	const [{ pdf }, { default: PDFResume }] = await Promise.all([
		import("@react-pdf/renderer"),
		import("../pages/PDFResume"),
	]);
	const blob = await pdf(<PDFResume />).toBlob();
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = datedFilename(text.pdfFilename);
	link.click();
	setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function ResumeDownloadButton({ label, className = "" }) {
	const [preparing, setPreparing] = useState(false);

	async function handleClick() {
		setPreparing(true);
		try {
			await downloadResume();
		} finally {
			setPreparing(false);
		}
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			disabled={preparing}
			className={`badge whitespace-nowrap disabled:opacity-70 ${className}`}
		>
			<DownloadIcon className="w-4 h-4 mr-2" />
			<span className="font-bold font-heading">
				{preparing ? "Preparing…" : label}
			</span>
		</button>
	);
}
