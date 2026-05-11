export const personal = {
    name: "Nassim Bellaoud",
    title: "Développeur Full-Stack",
    about:
        "Développeur Full-Stack spécialisé en Java (Spring Boot) & React, avec une solide expertise en microservices, CI/CD et gestion de projet agile. Curieux et passionné, j'aime explorer de nouvelles technologies et repousser mes limites pour concevoir des solutions performantes et élégantes.\n\n \"Je passe mon temps à faire ce que je ne sais pas faire, pour apprendre à le faire.\" - Pablo Picasso",
    contact: {
        phone: "+33 7 71 81 14 25",
        email: "nassim.dev.freelance@gmail.com",
        linkedin: "https://www.linkedin.com/in/nassim-bellaoud",
        github: "https://github.com/nassbld",
    },
};

export const skills = {
    languages: ["Java", "JavaScript", "TypeScript", "NodeJS"],
    frameworks: ["Spring Boot", "ReactJS", "React-Native", "Angular", "NextJS", "Expo", "Tailwind", "Hibernate"],
    architecture: ["Microservices", "API REST", "Domain-Driven Development (DDD)", "Agile (SCRUM)", "Test-Driven Development (TDD)", "API Gateway", "Backend for Frontend (BFF)"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
    tools: ["Docker", "Kubernetes", "Gitlab", "Github", "Postman", "Figma", "Vercel", "Google Cloud", "Oracle"],
};

export const experiences = [
    {
        id: 1,
        role: "Développeur Full-Stack",
        company: "BNP Paribas",
        type: "Alternance puis CDI",
        date: "Sept. 2022 – Avr. 2026",
        tasks: [
            "Développement d'une application interne utilisée par 300+ collaborateurs (Java, Angular)",
            "Conception et développement d'applications microservices (Spring Boot, Kubernetes)",
            "Mise en œuvre du Domain-Driven Design (DDD)",
            "Automatisation CI/CD (Docker, Kubernetes, Cloud IBM)",
            "Conception d'archétypes de code (back & front) servant de base à tout le groupe BNP Paribas",
            "Conception pilotée par des tests unitaires et d'intégration (TDD)",
            "Clean code",
        ],
        stack: ["Java", "Spring Boot", "Angular", "Docker", "Kubernetes", "Microservices"],
    },
    {
        id: 2,
        role: "Formateur Développement Web",
        company: "GEMA, EFREI",
        type: "Freelance",
        date: "",
        tasks: [
            "Formations (bootcamps) développement web en HTML/CSS, JavaScript & Angular",
            "Formations Bash & système",
            "Accompagnement de projets étudiants",
            "Méthodologie de travail en équipe et gestion de projet agile",
        ],
        stack: ["HTML/CSS", "JavaScript", "Angular", "Bash", "PowerShell", "Agile"],
    },
    {
        id: 3,
        role: "Technicien Informatique Helpdesk",
        company: "Paris Habitat OPH",
        type: "CDD",
        date: "Fév. 2021 – Août 2021",
        tasks: [
            "Prise en main de l'Active Directory",
            "Gestion de profils VPN et d'applications à distance via VMWare",
        ],
        stack: ["Active Directory", "VMWare", "VPN"],
    },
];

export const projects = [
    {
        id: 1,
        name: "Homework",
        translationKey: "homework",
        description:
            "Plateforme qui connecte voisins et passionnés pour des moments d'apprentissage conviviaux.",
        stack: ["React", "Java", "Spring Boot"],
        image: "/images/homework-screenshot.png", // remplace par: "/images/homework.png"
        github: null, // remplace par: "https://github.com/..."
        demo: "https://homework-frontend-mu.vercel.app/",   // remplace par: "https://..."
        confidential: false,
    },

    {
        id: 2,
        name: "Pokta",
        translationKey: "pokta",
        description:
            "Application mobile qui connecte des amateurs de football pour organiser des matchs et créer des communautés.",
        stack: ["Java", "React-Native", "Expo"],
        image: "/images/pokta-screenshot.png",
        github: null,
        demo: null,
        confidential: false,
        inProgress: true,
    },

    {
        id: 3,
        name: "Code Archetypes",
        translationKey: "bnp-archetypes",
        stack: ["Java", "Spring Boot", "Angular"],
        image: "/images/bnp-screenshot.png",
        github: null,
        demo: null,
        confidential: true,
    },
    {
        id: 4,
        name: "Support Request",
        translationKey: "bnp-support",
        stack: ["Java", "Spring Boot", "Angular"],
        image: "/images/bnp-screenshot.png",
        github: null,
        demo: null,
        confidential: true,
    },
    {
        id: 5,
        name: "SQC — Software Quality Control",
        translationKey: "bnp-sqc",
        stack: ["Java", "Spring Boot", "Angular", "Microservices", "Kubernetes"],
        image: "/images/bnp-screenshot.png",
        github: null,
        demo: null,
        confidential: true,
    },
];

export const education = [
    {id: 1, degree: "Mastère Developer Manager Full-Stack (Bac+5)", school: "EFREI", year: "2024", logo: "/images/schools/EFREI-logo.png" },
    {id: 2, degree: "Licence Informatique (Bac+3)", school: "Sorbonne Université (UPMC), Paris VI", year: "2022", logo: "/images/schools/SU-logo.png" },
    {id: 3, degree: "Baccalauréat Scientifique", school: "Lycée Jules Ferry", year: "2018", logo: "/images/schools/JF-logo.png"},
];
