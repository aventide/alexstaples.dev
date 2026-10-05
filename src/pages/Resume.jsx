import text from "../assets/text/resume.json";

import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import SkillsList from "../components/SkillsList";

export default function Resume() {
	return (
		<div>
			<DividerSection title="experience">
				<div className="mt-4 mb-8 md:mx-4 divide-y divide-white/10">
					{Object.keys(text.jobs).map((company) => (
						<Job key={company} company={company} />
					))}
				</div>
			</DividerSection>
			<DividerSection title="skills" doubleSpaced>
				<div className="mb-4 md:mb-8 px-5 md:px-6 py-6 md:py-8 md:mx-4">
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
		// same layout as a job entry: year beside the title on sm+, in its own left-hand column on xl
		<div className="mb-4 md:mb-8 md:mx-4 grid content-start gap-x-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[9rem_1fr] xl:gap-x-8 px-5 md:px-6 py-6 md:py-8">
			<div className="sm:col-start-1 sm:row-start-1 xl:col-start-2">
				<p className="text-lg font-bold">
					{degree} in {major}
				</p>
				<p className="text-indigo-300">{name}</p>
			</div>
			<p className="mt-1 sm:mt-0 sm:col-start-2 sm:row-start-1 sm:text-right xl:col-start-1 xl:text-left xl:pt-1 text-sm text-slate-400">
				{time}
			</p>
		</div>
	);
}
