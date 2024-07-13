import text from "../assets/text/resume.json";
import SkillsList from "../components/SkillsList";

export default function Job({ company }) {
	const companyKey = text.jobs[company];
	const { employer, jobTitle, time, longform, techSkills } = companyKey;
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
