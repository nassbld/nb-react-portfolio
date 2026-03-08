import { experiences } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
    return (
        <section id="experiences" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label="Mon parcours" title="Expériences" />
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
                ))}
            </div>
        </section>
    );
}
