import { personal } from "../data/cvData.js";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
    return (
        <section id="contact" className="px-6 max-w-6xl mx-auto py-24">
            <SectionTitle label="Travaillons ensemble" title="Contact" />
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3">
                    <p className="text-gray-400 text-lg max-w-md">
                        A l'écoute pour des missions freelance, des opportunités en CDI ou simplement pour échanger !
                    </p>
                    <div className="flex flex-col gap-2 text-gray-400 text-sm mt-2">
                        <a href={`mailto:${personal.contact.email}`} className="hover:text-[#fe5200] transition-colors">✉ {personal.contact.email}</a>
                        <a href={`tel:${personal.contact.phone}`} className="hover:text-[#fe5200] transition-colors">✆ {personal.contact.phone}</a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`mailto:${personal.contact.email}`}
                       className="bg-[#fe5200] hover:bg-[#e04900] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center glow-orange">
                        M'envoyer un mail
                    </a>
                    <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer"
                       className="border border-[#2a2a2a] hover:border-[#fe5200] text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
