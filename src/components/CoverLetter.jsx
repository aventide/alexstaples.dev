import { PDFDownloadLink } from "@react-pdf/renderer";

import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";

import text from "../assets/text/cover-letter.json";

import PDFCoverLetter from "./PDFCoverLetter";

// feather icons https://feathericons.com/
// graduation cap fromhttps://iconoir.com/

export default function CoverLetter() {
	return (
		<div className="">
			<div className="mt-8 mb-4 flex items-center flex-col text-center">
				<h1 className="font-heading font-bold mt-4 inline-block">
					{text.coverLetter}
				</h1>
			</div>
			<div className="mb-16 sm:mb-8 md:mb-4 flex justify-center">
				<PDFDownloadLink
					document={<PDFCoverLetter />}
					fileName="cover_letter.pdf"
				>
					{({ blob, url, loading, error }) =>
						loading ? (
							"Loading document..."
						) : (
							<button
								type="button"
								className={`badge ${highlightBadgeClasses} ${highlightClasses} px-4 py-4 bg-transparent`}
							>
								<DownloadIcon className="w-4 h-4 mr-2" />
								<span className="font-bold">{text.downloadPDF}</span>
							</button>
						)
					}
				</PDFDownloadLink>
			</div>
			<div className="mt-16 border-2 border-black dark:border-white border-dashed">
				<div className="mt-12 mb-8 mx-16">
					<CoverLetterSection textContent={text.greeting} />
					<CoverLetterSection textContent={text.introduction} />
					<CoverLetterSection textContent={text.body1} />
					<CoverLetterSection textContent={text.body2} />
					<CoverLetterSection textContent={text.conclusion} />
					<CoverLetterSection textContent={text.signOff} />
				</div>
			</div>
		</div>
	);
}

function CoverLetterSection({ textContent }) {
	return <div className="mt-8">{textContent}</div>;
}

const highlightClasses =
	"text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300";
const highlightBadgeClasses =
	"border-indigo-600 hover:border-indigo-400 dark:border-indigo-400 dark:hover:border-indigo-300";
