export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "RTD RenovTonDressing",
    description:
      "Conception complète pour une plateforme type Vinted avec gestion des produits, utilisateurs et commandes. Messagerie et Chat. Développement pour le client en cours de réalisation",
    technologies: [
      "Nest.js",
      "Next.js",
      "SQL",
      "ORM Prisma",
      "API tracking",
      "Supabase",
      "Stripe",
      "Paypal",
      "Websocket",
    ],
    image: "/img/rtd.png",
  },
  {
    title: "Thomas DevWeb Solutions",
    description:
      "Développement d’un site vitrine professionnel mettant en avant mes compétences et réalisations, conçu pour offrir une présentation claire et impactante de mon expertise en développement web.",
    technologies: [
      "React",
      "Material Tailwinds",
      "TailwindCSS",
      "React Parallax",
      "Formspree",
      "bundler Vite",
    ],
    image: "/img/tdw.png",
  },
  {
    title: "Charles Cantin Photographie",
    description:
      "Création d’un site vitrine pour photographe avec une gestion dynamique des photos via le CMS Strapi pour une mise à jour simplifiée et autonome du portfolio.",
    technologies: ["React", "CMS Strapi", "formspree"],
    image: "/img/cc.png",
  },
  {
    title: "Photo agency",
    description:
      "Développement Front-End initial en React, le projet n’a pas été poursuivi en raison de contraintes budgétaires du client.",
    technologies: ["React"],
    image: "img/pp.png",
  },
];
