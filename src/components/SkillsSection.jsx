import { skills } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";
import SkillBadge from "./SkillBadge";
import {useLang} from "../context/LangContext.jsx";

export default function SkillsSection() {
    const { t } = useLang();

    const categories = [
        { label: t.skills.category.languages, data: skills.languages },
        { label: t.skills.category.frameworks, data: skills.frameworks },
        { label: t.skills.category.architecture, data: skills.architecture },
        { label: t.skills.category.databases, data: skills.databases },
        { label: t.skills.category.tools, data: skills.tools },
    ];

    return (
        <section id="skills" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label={t.sections.skills.label} title={t.sections.skills.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <div key={cat.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#fdbe26]/40 transition-colors duration-300">
                        <h3 className="text-[#fdbe26] text-sm font-semibold mb-4 font-mono uppercase tracking-widest">{cat.label}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.data.map((item) => <SkillBadge key={item} label={item} />)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
