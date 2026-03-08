import { useState, useEffect } from "react";

const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Projets", href: "#projects" },
    { label: "Expériences", href: "#experiences" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#2a2a2a]" : "bg-transparent"
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#hero" className="gradient-text font-bold text-xl tracking-tight">NB.</a>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="mailto:nassim.dev.freelance@gmail.com"
                   className="hidden md:inline-block bg-[#fe5200] hover:bg-[#e04900] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200">
                    Me contacter
                </a>

                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white my-1.5 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#0d0d0d] border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <a key={link.label} href={link.href}
                           className="text-gray-300 hover:text-white text-sm"
                           onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
