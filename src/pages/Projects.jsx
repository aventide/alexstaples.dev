import DevSiteScreenshot from "../assets/images/project-screenshots/dev-site-screenshot-app.svg";
import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";
import KEMMCareScreenshot from "../assets/images/project-screenshots/kemmcare-screenshot.png";
import DividerSection from "../components/DividerSection";
import Project from "../components/Project";

export default function Projects() {
	return (
		<div>
			<DividerSection>
				<h1 className="font-heading font-bold my-4 inline-block text-2xl ">
					PROJECTS
				</h1>
			</DividerSection>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:mx-4">
				<Project
					name="Personal Website"
					description="My personal development website, which displays my past experience and projects."
					skills={[
						"JavaScript",
						"React",
						"Tailwind CSS",
						"Docker",
						"Digital Ocean",
					]}
					image={DevSiteScreenshot}
				/>
				<Project
					name="Get Schooled"
					description="Digital board game inspired by Aqualin, built on web tech!"
					skills={["JavaScript", "React", "Tailwind CSS"]}
					image={GetSchooledScreenshot}
				/>
				<Project
					name="KEMM Care Website"
					description="Informational and intake website for travel and per diem medical professionals."
					skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
					image={KEMMCareScreenshot}
				/>
			</div>
		</div>
	);
}
