import DividerSection from "../components/DividerSection";
import Project from "../components/Project";
import projects from "../data/projects";

export default function Projects() {
	return (
		<DividerSection title="projects">
			<ul className="grid grid-cols-1 gap-4 md:gap-8 md:mx-4">
				{projects.map((project) => (
					<Project key={project.name} {...project} />
				))}
			</ul>
		</DividerSection>
	);
}
