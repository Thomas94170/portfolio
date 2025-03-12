export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Développement Back-End",
    items: [
      "Conception et développement d'API",
      "Utilisation de Node.js et Nest.js",
      "Gestion des bases de données SQL et NoSQL",
      "Optimisation des requêtes et performances",
    ],
  },
  {
    category: "Gestion de CMS & Solutions Back-End & Front-End",
    items: [
      "Gestion de CMS headless pour une solution facile du back-end",
      "Conception de sites vitrines pour présenter vos entreprises et services",
      "Conception simplifiée de sites e-commerce avec Shopify",
    ],
  },
  {
    category: "Sécurité",
    items: [
      "Application des bonnes pratiques de sécurité",
      "Gestion des permissions et des sessions",
      "Sécurisation des API",
    ],
  },
  {
    category: "Intégrations & Services",
    items: [
      "Intégration d'API tierces",
      "Implémentation de systèmes de paiement",
      "Gestion des emails et notifications",
    ],
  },
  {
    category: "Déploiement & DevOps",
    items: [
      "Conteneurisation et orchestration",
      "Déploiement sur différents environnements",
      "Monitoring et gestion des logs",
    ],
  },
  {
    category: "Méthodologie & Collaboration",
    items: [
      "Travail en méthode agile",
      "Gestion du versioning et des branches",
      "Utilisation d'outils de tests et de documentation",
    ],
  },
];
