import { ReactComponent as LocationIcon } from "../assets/icons/map-pin.svg";
import text from "../assets/text/resume.json";
import SkillsList from "../components/SkillsList";

// stacked on mobile; dates beside the title on sm+;
// on xl the dates move into their own left-hand column
export default function Job({ company }) {
	const {
		employer,
		jobTitle,
		timeWithMonth,
		jobLocation,
		summary,
		techSkills,
	} = text.jobs[company];

	return (
		<div className="grid content-start gap-x-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[9rem_1fr] xl:gap-x-8 rounded-xl bg-slate-800 p-5 md:p-6">
			<div className="sm:col-start-1 sm:row-start-1 xl:col-start-2">
				<p className="text-lg font-bold">{jobTitle}</p>
				<p className="text-indigo-300">{employer}</p>
			</div>
			<div className="mt-1 sm:mt-0 flex flex-wrap sm:flex-col sm:items-end xl:items-start gap-x-3 sm:col-start-2 sm:row-start-1 xl:col-start-1 xl:row-span-3 xl:pt-1 text-sm text-slate-400">
				<p>{timeWithMonth}</p>
				{jobLocation && (
					<p className="flex items-center">
						<LocationIcon className="mr-1 w-3.5 h-3.5" />
						{jobLocation}
					</p>
				)}
			</div>
			<p className="mt-3 sm:col-span-2 xl:col-span-1 xl:col-start-2 xl:max-w-3xl text-sm text-slate-300">
				{summary}
			</p>
			<div className="mt-4 sm:col-span-2 xl:col-span-1 xl:col-start-2">
				<SkillsList skills={techSkills} />
			</div>
		</div>
	);
}
