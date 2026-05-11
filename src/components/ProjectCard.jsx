import SkillBadge from "./SkillBadge";
import {useLang} from "../context/LangContext.jsx";

export default function ProjectCard({ project }) {
    const { name, stack, image, github, demo, confidential, inProgress } = project;
    const { t } = useLang();

    return (
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#fe5200]/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="relative h-48 bg-[#111] overflow-hidden">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        {confidential
                            ? <span className="text-4xl">🔒</span>
                            : <span className="text-4xl opacity-20">{"</>"}</span>
                        }
                    </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                    {inProgress && <span className="bg-[#fdbe26] text-black text-xs font-bold px-2 py-1 rounded-full">{t.project.inProgress}</span>}
                    {confidential && <span className="bg-[#2a2a2a] text-gray-400 text-xs font-bold px-2 py-1 rounded-full">{t.project.confidential}</span>}
                </div>
            </div>

            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t.project.descriptions[project.translationKey]}</p>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => <SkillBadge key={tech} label={tech} />)}
                </div>
                {!confidential && (
                    <div className="flex gap-3 mt-2">
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-[#fe5200] hover:text-[#fdbe26] transition-colors font-medium">GitHub →</a>}
                        {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm text-[#fe5200] hover:text-[#fdbe26] transition-colors font-medium">Demo →</a>}
                        {!github && !demo && <span className="text-sm text-gray-600 italic">{t.project.soon}</span>}
                    </div>
                )}
            </div>
        </div>
    );
}
