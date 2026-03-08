import { personal } from "../data/cvData.js";

export default function Footer() {
    return (
        <footer className="border-t border-[#2a2a2a] px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
                <span className="gradient-text font-bold text-lg">NB.</span>
                <p>Développé par <span className="text-[#fe5200]">{personal.name}</span> — React + Vite + Tailwind</p>
                <div className="flex gap-4">
                    <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
