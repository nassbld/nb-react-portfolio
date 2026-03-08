import SkillBadge from "./SkillBadge";

const typeColors = {
    CDI: "bg-[#fe5200]/10 text-[#fe5200] border-[#fe5200]/30",
    Alternance: "bg-[#fdbe26]/10 text-[#fdbe26] border-[#fdbe26]/30",
    Freelance: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    Stage: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

export default function ExperienceCard({ experience, isLast }) {
    const { role, company, type, date, tasks, stack } = experience;

    return (
        <div className="flex gap-6 group">
            <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#fe5200] mt-1.5 shrink-0 group-hover:shadow-[0_0_10px_rgba(254,82,0,0.8)] transition-shadow duration-300" />
                {!isLast && <div className="w-px flex-1 bg-[#2a2a2a] mt-2" />}
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 flex-1 mb-6 hover:border-[#fe5200]/40 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white">{role}</h3>
                        <p className="text-[#fe5200] font-medium">{company}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
            <span className={`text-xs font-semibold border px-2 py-1 rounded-full ${typeColors[type] || "bg-gray-500/10 text-gray-400 border-gray-500/30"}`}>
              {type}
            </span>
                        <span className="text-xs text-gray-500 font-mono">{date}</span>
                    </div>
                </div>

                <ul className="flex flex-col gap-2 mb-4">
                    {tasks.map((task, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                            <span className="text-[#fdbe26] mt-0.5 shrink-0">▸</span>
                            {task}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => <SkillBadge key={tech} label={tech} />)}
                </div>
            </div>
        </div>
    );
}
