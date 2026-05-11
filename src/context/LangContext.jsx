import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

const LangContext = createContext();

export function LangProvider({ children }) {
    const [lang, setLang] = useState("fr");
    const t = translations[lang];
    const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

    return (
        <LangContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LangContext.Provider>
    );
}

export const useLang = () => useContext(LangContext);
