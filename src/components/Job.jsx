import nl2br from "react-nl2br";

import { ReactComponent as LocationIcon } from "../assets/icons/map-pin.svg";
import text from "../assets/text/resume.json";
import SkillsList from "../components/SkillsList";

export default function Job({ company }) {
	const companyKey = text.jobs[company];
	const { employer, jobTitle, time, longform, techSkills, jobLocation } =
		companyKey;
	return (
		<div className="mb-4 md:mb-8 bg-slate-800 px-4 py-6 rounded-xl">
			<p className="text-indigo-400 text-sm">{time}</p>
			<p className=" text-lg mb-1">
				<span className="font-bold">{jobTitle}</span>
				<span className="mx-2 hidden md:inline">|</span>
				<span className="block md:inline">{employer}</span>
			</p>
			{jobLocation && (
				<div className="text-white flex items-center mb-4">
					<LocationIcon className="mr-1" />
					<p className="text-sm">{jobLocation}</p>
				</div>
			)}
			<div className="mb-4">
				<p className="mb-2 text-sm text-slate-300">{nl2br(longform)}</p>
				<SkillsList skills={techSkills} />
			</div>
		</div>
	);
}
