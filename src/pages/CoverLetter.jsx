import { PDFDownloadLink } from "@react-pdf/renderer";

import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";

import text from "../assets/text/cover-letter.json";

import DividerSection from "../components/DividerSection";
import PDFCoverLetter from "./PDFCoverLetter";

export default function CoverLetter() {
	return (
		<DividerSection title="cover letter">
			<div>
				<div className="mt-16 border-2 border-white border-dashed">
					<div className="mt-12 mb-8 mx-16">
						<CoverLetterSection textContent={text.greeting} />
						<CoverLetterSection textContent={text.introduction} />
						<CoverLetterSection textContent={text.body1} />
						<CoverLetterSection textContent={text.body2} />
						<CoverLetterSection textContent={text.conclusion} />
						<CoverLetterSection textContent={text.signOff} />
					</div>
				</div>
				<div className="mt-8 flex justify-center">
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
									className={
										"badge px-8 py-6 bg-indigo-500 text-slate-200 border-transparent hover:brightness-110"
									}
								>
									<DownloadIcon className="w-4 h-4 mr-2" />
									<span className="font-bold font-heading">
										{text.downloadPDF}
									</span>
								</button>
							)
						}
					</PDFDownloadLink>
				</div>
			</div>
		</DividerSection>
	);
}

function CoverLetterSection({ textContent }) {
	return <div className="mt-8">{textContent}</div>;
}
