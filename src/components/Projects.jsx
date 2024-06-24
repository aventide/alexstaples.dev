import SkillsList from "./SkillsList";
import UnderConstruction from "./UnderConstruction";

import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";

export default function Projects() {
	return (
		<div className="">
			<div className="mt-8 mb-4 flex items-center flex-col text-center">
				<h1 className="font-heading font-bold my-4 inline-block text-2xl underline underline-offset-2">
					PROJECTS
				</h1>
			</div>
			<div className="divider brightness-200 mt-0 mb-4 md:mb-8" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mx-4">
				<Project
					name="Personal Website"
					description="My personal development website, which displays my past experience and projects."
					skills={["React", "Tailwind", "Docker"]}
				/>
				<Project
					name="Get Schooled"
					description="Digital board game inspired by Aqualin, built on web tech!"
					skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
					image={GetSchooledScreenshot}
				/>
				<Project
					name="Get Schooled"
					description="Digital board game inspired by Aqualin, built on web tech!"
					skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
					image={GetSchooledScreenshot}
				/>
				<Project
					name="Get Schooled"
					description="Digital board game inspired by Aqualin, built on web tech!"
					skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
					image={GetSchooledScreenshot}
				/>
				<Project
					name="KEMM Care Website"
					description="Informational and intake website for travel and per diem medical professionals."
					skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
				/>
				{/* <UnderConstruction /> */}
			</div>
		</div>
	);
}

function Project({ name, description, skills, image }) {
	return (
		<div className="flex mb-4 md:mb-16">
			{image && (
				<img src={image} alt={name} className="h-36 aspect-square mr-6" />
			)}
			<div className="md:mr-6">
				<p className="text-lg font-bold mb-4">{name}</p>
				<p className="mb-4 text-sm text-slate-400">{description}</p>
				<SkillsList skills={skills} />
			</div>
		</div>
	);
}
