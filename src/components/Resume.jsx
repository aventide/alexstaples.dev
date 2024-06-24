import { PDFDownloadLink } from "@react-pdf/renderer";

// feather icons https://feathericons.com/
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import text from "../assets/text/resume.json";

import PDFResume from "./PDFResume";

export default function Resume() {
	return (
		<div className="">
			<div className="mt-8 mb-2 flex items-center flex-col text-center">
				<div>
					<h1 className="font-heading font-bold my-4 inline-block text-2xl underline underline-offset-2">
						WORK EXPERIENCE
					</h1>
				</div>
			</div>
			<div className="mb-8 sm:mb-8 md:mb-16 flex justify-center">
				<PDFDownloadLink document={<PDFResume />} fileName="resume.pdf">
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
			<ResumeSection title="">
				<Job company="wasabi" open />
				<Job company="motifSoftware" />
				<Job company="genpact" />
				<Job company="ca" />
				<Job company="kemmcare" />
			</ResumeSection>
			<ResumeSection title="skills">
				<div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4">
					{Object.keys(text.skills).map((skillSection) => (
						<SkillsList
							title={skillSection}
							skills={text.skills[skillSection]}
							key={skillSection}
						/>
					))}
				</div>
			</ResumeSection>
			<ResumeSection title="portfolio">
				<div className="mb-2">
					<span className="font-bold inline">Github</span>
					<span className="mx-2">|</span>
					<StyledLink
						href={text.portfolio.github.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{text.portfolio.github.title}
					</StyledLink>
				</div>
				<div className="mb-2">
					<span className="font-bold inline">Site</span>
					<span className="mx-2">|</span>
					<StyledLink
						href={text.portfolio.site.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{text.portfolio.site.title}
					</StyledLink>
				</div>
			</ResumeSection>
			<ResumeSection title="education">
				<Education />
			</ResumeSection>
		</div>
	);
}

function ResumeSection({ children, title }) {
	return (
		<div className="mt-4 mb-8 mx-4">
			<h2 className="uppercase font-heading font-bold text-lg">{title}</h2>
			<div className="divider brightness-200 mt-0 mb-4" />
			<div className="ml-0 sm:ml-4">{children}</div>
		</div>
	);
}

function SkillsList({ title, skills }) {
	return (
		<div className="mb-4">
			<span className="font-bold">{title}</span>
			<ul className="mt-4">
				{skills?.map((skill) => (
					<li
						className="badge mr-2 my-1 px-3 py-2.5 border-transparent bg-indigo-500 text-slate-200"
						key={skill}
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}

function Job({ company }) {
	const companyKey = text.jobs[company];
	const { employer, jobTitle, time, longform, clients, techSkills } =
		companyKey;
	return (
		<div className="mb-12">
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
		<div className="mb-12">
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

const highlightClasses = "text-indigo-400 hover:text-indigo-300";
const highlightBadgeClasses = "border-indigo-400 hover:border-indigo-300";

function StyledLink({ children, ...rest }) {
	return (
		<a className={`cursor-pointer ${highlightClasses}`} {...rest}>
			{children}
		</a>
	);
}
