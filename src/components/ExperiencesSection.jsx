import { experiences } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import {useLang} from "../context/LangContext.jsx";

export default function ExperiencesSection() {
    const { t } = useLang();

    return (
        <section id="experiences" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label={t.sections.experiences.label} title={t.sections.experiences.title} />
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
                ))}
            </div>
        </section>
    );
}
