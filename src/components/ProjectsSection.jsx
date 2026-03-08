import { projects } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label="Ce que j'ai construit" title="Projets" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
        </section>
    );
}
