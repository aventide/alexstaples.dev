import text from "../assets/text/resume.json";

import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import SkillsList from "../components/SkillsList";

export default function Resume() {
	return (
		<div>
			<DividerSection title="experience">
				<div className="mt-4 mb-8 md:mx-4 grid grid-cols-1 gap-4 md:gap-8">
					{Object.keys(text.jobs).map((company) => (
						<Job key={company} company={company} />
					))}
				</div>
			</DividerSection>
			<DividerSection title="skills" doubleSpaced>
				<div className="mb-4 md:mb-8 bg-slate-800 p-5 md:p-6 rounded-xl md:mx-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
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
			<div className="mt-8 mb-8 flex justify-center">
				<ResumeDownloadButton
					label={text.downloadPDF}
					className="px-5 py-4 bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
				/>
			</div>
		</div>
	);
}

function Education() {
	const { time, name, degree, major } = text.education;

	return (
		<div className="mb-4 md:mb-8 bg-slate-800 p-5 md:p-6 rounded-xl md:mx-4 flex flex-col sm:flex-row sm:justify-between gap-x-6">
			<div>
				<p className="text-lg font-bold">
					{degree} in {major}
				</p>
				<p className="text-indigo-300">{name}</p>
			</div>
			<p className="mt-1 sm:mt-0 shrink-0 text-sm text-slate-400">{time}</p>
		</div>
	);
}
