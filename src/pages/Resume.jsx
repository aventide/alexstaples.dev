import { PDFDownloadLink } from "@react-pdf/renderer";

// feather icons https://feathericons.com/
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import text from "../assets/text/resume.json";

import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import SkillsList from "../components/SkillsList";
import PDFResume from "./PDFResume";

export default function Resume() {
	return (
		<div>
			<DividerSection title="experience">
				<div className="mt-4 mb-8 md:mx-4">
					<Job company="wasabi" open />
					<Job company="motifSoftware" />
					<Job company="genpact" />
					<Job company="ca" />
				</div>
			</DividerSection>
			<DividerSection title="skills" doubleSpaced>
				<div className="mb-4 md:mb-8 bg-slate-800 px-4 py-6 rounded-xl md:mx-4">
					<div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
						{Object.keys(text.skills).map((skillSection) => (
							<SkillsList
								title={skillSection}
								skills={text.skills[skillSection]}
								key={skillSection}
							/>
						))}
					</div>
				</div>
			</DividerSection>
			<DividerSection title="education" doubleSpaced>
				<Education />
			</DividerSection>
			<div className="my-16 py-24 flex justify-center border-white border-opacity-10 border-2">
				<PDFDownloadLink document={<PDFResume />} fileName="resume.pdf">
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
	);
}

function Education() {
	const { time, name, degree, major } = text.education;

	return (
		<div className="mb-4 md:mb-8 bg-slate-800 px-4 py-6 rounded-xl md:mx-4">
			<p className="text-indigo-400 text-sm">{time}</p>
			<p className="mb-4 text-lg">
				<span className="font-bold">{degree}</span>
				<span className="font-bold"> in </span>
				<span className="font-bold block md:inline">{major}</span>
				<span className="mx-2 hidden md:inline">|</span>
				<span className="block md:inline">{name}</span>
			</p>
		</div>
	);
}
