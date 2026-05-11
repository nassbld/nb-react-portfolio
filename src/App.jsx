import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white">
            <Navbar />
            <main>
                <Hero />
                <ProjectsSection />
                <ExperiencesSection />
                <EducationSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
