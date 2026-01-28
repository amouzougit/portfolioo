const myPortfolio = () => {
    return {
        // Vos liens de profil
        profil: {
            github: "https://github.com/amouzougit",
            linkedin: "https://www.linkedin.com/in/kevo-amouzou", 
            email: "ton-email@utbm.fr"
        },

        // VOTRE LISTE DE PROJETS
        projects: [
            {
                title: "SC Resilience Twin",
                desc: "Jumeau numérique de Supply Chain. Simulation de scénarios de rupture et analyse de résilience avec Python & SimPy.",
                tags: ["Python", "SimPy", "Logistique"],
                // Image "Industrie / Labo" (qui marche déjà bien)
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                linkRepo: "https://github.com/amouzougit/SC_Resilience_Twin",
                linkDemo: null
            },
            {
                title: "Urban Mobility Analytics",
                desc: "Pipeline ETL (Airflow/dbt) analysant les flux urbains pour prédire les zones de congestion (Collaboration style EIT/Bosch).",
                tags: ["Data Engineering", "Python", "Smart City"],
                
                // ✅ NOUVELLE IMAGE "DATA GLOBE" (Très stable et futuriste) :
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                
                linkRepo: "https://github.com/amouzougit/urban-mobility-analytics",
                linkDemo: null
            },
            {
                title: "AMEKOM Import/Export",
                desc: "Gestion opérationnelle de flux imports Chine/USA vers le Togo. Optimisation des stocks et distribution électronique.",
                tags: ["Supply Chain", "Commerce", "Management"],
                // Image "Dashboard / Analytics" (qui marche déjà bien)
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                linkRepo: null, 
                linkDemo: null
            }
        ]
    }
}