import {education} from "../data/cvData";
import {useLang} from "../context/LangContext";
import SectionTitle from "./SectionTitle";

const degreeKeys = ["degree1", "degree2", "degree3"];

export default function EducationSection() {
    const {t} = useLang();

    return (
        <section id="education" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label={t.sections.education.label} title={t.sections.education.title}/>

            <div className="flex flex-col gap-4">
                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-[#fdbe26]/40 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-4">
                            {edu.logo ? (
                                <div className="w-35 shrink-0 flex items-center justify-center">
                                    <img
                                        src={edu.logo}
                                        alt={edu.school}
                                        className="h-18 object-contain rounded-md p-1"
                                    />
                                </div>
                            ) : (
                                <span className="text-2xl">🎓</span>
                            )}
                            <div>
                                <h3 className="text-white font-bold">{t.education[degreeKeys[index]]}</h3>
                                <p className="text-[#fe5200] text-sm font-medium">{edu.school}</p>
                            </div>
                        </div>
                        <span className="text-[#fdbe26] font-mono text-sm shrink-0">{edu.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
