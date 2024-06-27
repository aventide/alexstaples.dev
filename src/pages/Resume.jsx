import { PDFDownloadLink } from "@react-pdf/renderer";

// feather icons https://feathericons.com/
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import text from "../assets/text/resume.json";

import SkillsList from "../components/SkillsList";
import PDFResume from "./PDFResume";

export default function Resume() {
	return (
		<div className="">
			<div className="divider before:bg-white after:bg-white before:opacity-10 after:opacity-10 my-8">
				<h1 className="font-heading font-bold my-4 inline-block text-2xl ">
					EXPERIENCE
				</h1>
			</div>
			<div className="mt-4 mb-8 md:mx-4">
				<Job company="wasabi" open />
				<Job company="motifSoftware" />
				<Job company="genpact" />
				<Job company="ca" />
				<Job company="kemmcare" />
			</div>
			<ResumeSection title="skills">
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
			</ResumeSection>
			<ResumeSection title="education">
				<Education />
			</ResumeSection>
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

function ResumeSection({ children, title }) {
	return (
		<div className="mt-4 mb-8">
			{title && (
				<div className="divider before:bg-white after:bg-white before:opacity-10 after:opacity-10 my-16">
					<h2 className="font-heading font-bold my-4 inline-block text-2xl uppercase">
						{title}
					</h2>
				</div>
			)}
			{children}
		</div>
	);
}

function Job({ company }) {
	const companyKey = text.jobs[company];
	const { employer, jobTitle, time, longform, clients, techSkills } =
		companyKey;
	return (
		<div className="mb-4 md:mb-8 bg-slate-800 px-4 py-6 rounded-xl">
			<p className="text-indigo-400 text-sm">{time}</p>
			<p className="mb-4 text-lg">
				<span className="font-bold">{jobTitle}</span>
				<span className="mx-2 hidden md:inline">|</span>
				<span className="block md:inline">{employer}</span>
			</p>
			<div className="mb-4">
				<p className="mb-2 text-sm text-slate-400">{longform}</p>
				<SkillsList skills={techSkills} />
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
