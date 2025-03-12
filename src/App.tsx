import React from "react";
import { Parallax } from "react-parallax";
import { Typography } from "@material-tailwind/react";
import { Navbar } from "./components/Navbar";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { skills } from "./data/skills";
import { projects } from "./data/projects";
import { Code2, Terminal } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
        strength={200}
        className="h-screen"
      >
        <div className="flex h-full items-center justify-center bg-black/50">
          <div className="text-center text-white">
            <Typography variant="h1" className="mb-4">
              Développeur Back-End
            </Typography>
            <Typography variant="lead">
              Spécialisé en Node.js et Nest.js
            </Typography>
          </div>
        </div>
      </Parallax>

      {/* Présentation Section */}
      <section id="présentation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 px-4">
              <img
                src="/img/photo.png"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
              <Typography variant="h2" className="mb-4">
                À propos de moi
              </Typography>
              <Typography className="text-gray-700">
                Développeur back-end passionné par la conception d’architectures
                robustes et évolutives, maîtrisant les design patterns et les
                principes d’architecture logicielle (monolithique,
                microservices). Spécialisé dans le développement d’APIs
                performantes avec Node.js et Nest.js. J’offre également des
                solutions adaptées pour vos sites vitrines et landing pages,
                ainsi que des solutions e-commerce optimisées via Shopify.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
        strength={200}
      >
        <section id="compétences" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <Typography variant="h2" className="mb-12 text-center text-white">
              Compétences
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </section>
      </Parallax>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <Typography variant="h2" className="mb-12 text-center">
            Mes Projets
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
        strength={200}
      >
        <section id="contact" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <Typography variant="h2" className="mb-12 text-center text-white">
              Contact
            </Typography>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </Parallax>
    </div>
  );
}

export default App;
