import { personal } from "../data/cvData.js";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
            <div className="flex flex-col gap-6 max-w-3xl">
        <span className="text-[#fdbe26] text-sm font-mono tracking-widest uppercase">
          Bonjour, je suis
        </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="gradient-text">{personal.name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                    {personal.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl whitespace-pre-line">
                    {personal.about}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                    <a href="#projects"
                       className="bg-[#fe5200] hover:bg-[#e04900] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 glow-orange">
                        Voir mes projets
                    </a>
                    <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer"
                       className="border border-[#2a2a2a] hover:border-[#fe5200] text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                        LinkedIn
                    </a>
                </div>
                <div className="mt-16 flex items-center gap-2 text-gray-600 text-sm animate-bounce">
                    <span>↓</span><span>Scroll</span>
                </div>
            </div>
        </section>
    );
}
