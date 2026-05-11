export const personal = {
    name: "Nassim Bellaoud",
    title: "Développeur Full-Stack",
    about:
        "Développeur Full-Stack spécialisé en Java (Spring Boot) & Angular, avec une solide expertise en microservices, CI/CD et gestion de projet agile. Curieux et passionné, j'aime explorer de nouvelles technologies et repousser mes limites pour concevoir des solutions performantes et élégantes.\n\n \"Je passe mon temps à faire ce que je ne sais pas faire, pour apprendre à le faire.\" - Pablo Picasso",
    contact: {
        phone: "+33 7 71 81 14 25",
        email: "nassim.dev.freelance@gmail.com",
        linkedin: "https://www.linkedin.com/in/nassim-bellaoud",
        github: "https://github.com/nassbld",
    },
};

export const skills = {
    languages: ["Java (Spring Boot)", "JavaScript", "TypeScript", "NodeJS"],
    infrastructure: ["Kubernetes", "Docker", "IBM Cloud", "AWS"],
    tooling: ["GitLab / GitHub (CI/CD)", "Postman", "Jira"],
    methods: ["Microservices", "RabbitMQ", "Kafka", "Distributed Systems", "TDD", "Domain-Driven Design (DDD)", "Agile (SCRUM)"],
    operations: ["CI/CD Automation", "System Resilience", "Scalability", "API Gateway"],
    frontend: ["Angular", "React", "HTML/CSS", "React Native", "Expo"],
    ai: ["Claude Code", "ChatGPT (Codex)", "Gemini", "Cursor", "Obsidian"],
};

export const experiences = [
    {
        id: 1,
        role: "Développeur Full-Stack",
        company: "BNP Paribas",
        type: "Alternance puis CDI",
        date: "Sept. 2022 – Avr. 2026",
        tasks: [
            "Développement full-stack Java Spring Boot / Angular",
            "Conception et maintenance de microservices avec API Gateway",
            "Déploiement cloud-native : Docker, Kubernetes, IBM Cloud",
            "Mise en place et suivi de pipelines CI/CD (GitLab)",
            "Développement de templates de code (archétypes) adoptés à l'échelle du groupe",
            "Gestion des rôles et accès (RBAC), pagination backend",
            "Agrégation de données multi-services (microservice Reporting)",
            "Import de données Excel, recherche dynamique (Criteria API)",
            "Revues de code systématiques et conformité aux standards BNP (STA)",
            "Tests unitaires et d'intégration (TDD, JUnit, SonarQube)",
            "Livraison en sprints Agile Scrum avec internationalisation FR/EN",
        ],
        stack: ["Java", "Spring Boot", "Angular", "Docker", "Kubernetes", "Microservices"],
    },
    {
        id: 2,
        role: "Formateur Développement Web",
        company: "Nexa Digital School & GEMA Groupe",
        type: "Freelance",
        date: "Juin 2025 - Mars 2026",
        tasks: [
            "Conception de supports et programmes pédagogiques",
            "Animation de sessions en présentiel et distanciel",
            "Enseignement du scripting Bash et de l'administration système Linux",
            "Configuration de serveurs web et sécurité réseau",
            "Initiation au développement web (HTML, CSS, JavaScript, Angular, TypeScript)",
            "Formation à la méthode Agile/Scrum",
            "Encadrement de mini-projets en autonomie",
            "Revues de code et évaluation individuelle et collective",
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
