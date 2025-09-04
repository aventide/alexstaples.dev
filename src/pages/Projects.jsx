import DevSiteScreenshot from "../assets/images/project-screenshots/dev-site-screenshot-app.svg";
import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";
import KEMMCareScreenshot from "../assets/images/project-screenshots/kemmcare-screenshot.png";
import DividerSection from "../components/DividerSection";
import Project from "../components/Project";

export default function Projects() {
  return (
    <DividerSection title="projects">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 md:mx-4">
        <Project
          name="Personal Website"
          description="My personal website, which displays my recent projects and past experiences as a developer."
          skills={[
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Docker",
            "Digital Ocean",
          ]}
          image={DevSiteScreenshot}
          demoLink={"https://alexstaples.dev"}
        />
        <Project
          name="Get Schooled"
          description="Digital board game inspired by Aqualin, with multiple game modes. Built on web technologies!"
          skills={["JavaScript", "React", "Tailwind CSS", "DaisyUI", "Surge"]}
          image={GetSchooledScreenshot}
          demoLink={"https://get-schooled.surge.sh"}
        />
        <Project
          name="KEMM Care Website"
          description="Informational and intake website for travel and per diem medical professionals."
          skills={["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"]}
          image={KEMMCareScreenshot}
        />
      </ul>
    </DividerSection>
  );
}
