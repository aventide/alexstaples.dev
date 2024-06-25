import SkillsList from "./SkillsList";

import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";
import KEMMCareScreenshot from "../assets/images/project-screenshots/kemmcare-screenshot.png";

export default function Projects() {
	return (
		<div className="">
			<div className="divider before:bg-white after:bg-white before:opacity-10 after:opacity-10 my-8">
				<h1 className="font-heading font-bold my-4 inline-block text-2xl ">
					PROJECTS
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mx-4">
				<Project
					name="Personal Website"
					description="My personal development website, which displays my past experience and projects."
					skills={["React", "Tailwind", "Docker", "Digital Ocean"]}
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
					image={KEMMCareScreenshot}
				/>
				{/* <UnderConstruction /> */}
			</div>
		</div>
	);
}

// try bg-slate-800 for background
function Project({ name, description, skills, image }) {
	return (
		<div className="flex bg-slate-800 px-4 py-6 rounded-xl">
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
