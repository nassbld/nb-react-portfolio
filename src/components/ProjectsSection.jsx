import { projects } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import {useLang} from "../context/LangContext.jsx";

export default function ProjectsSection() {
    const { t } = useLang();

    return (
        <section id="projects" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label={t.sections.projects.label} title={t.sections.projects.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
        </section>
    );
}
