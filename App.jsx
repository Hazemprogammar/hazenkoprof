import React from "react";
import { FaGithub, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub as SiGithubIcon, SiGit, SiRedux, SiAdobephotoshop, SiAdobeillustrator, SiFigma } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "tailwindcss/tailwind.css";

const skills = [
  { icon: <SiHtml5 className="text-orange-600" />, label: "HTML5" },
  { icon: <SiCss3 className="text-blue-600" />, label: "CSS3" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <SiReact className="text-cyan-400" />, label: "React.js" },
  { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
  { icon: <SiGithubIcon className="text-gray-800" />, label: "GitHub" },
  { icon: <SiGit className="text-red-600" />, label: "Git" },
  { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
  { icon: <SiAdobephotoshop className="text-blue-900" />, label: "Photoshop" },
  { icon: <SiAdobeillustrator className="text-orange-400" />, label: "Illustrator" },
  { icon: <SiFigma className="text-pink-500" />, label: "Figma" },
  { icon: <MdOutlineDesignServices className="text-green-600" />, label: "UI/UX Designer" },
];

function AnimatedMeteor() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <div className="animate-meteor absolute w-1 h-32 bg-gradient-to-b from-white via-cyan-200 to-transparent opacity-70 left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full animate-gradient bg-gradient-to-br from-indigo-600/60 via-purple-500/30 to-pink-400/70" />
      <AnimatedMeteor />
    </div>
  );
}

const ProjectCard = () => (
  <a
    href="https://github.com/hazemprogam/E-Commerce"
    className="group relative bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://user-images.githubusercontent.com/3369400/26529898-6fbc0eaa-43fd-11e7-8d74-45e51fa9ad06.png"
      alt="E-Commerce"
      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
      <p className="text-gray-600 mb-4">A modern e-commerce website built using React, Redux, and Tailwind CSS.</p>
      <FaGithub className="inline-block mr-2 text-xl text-gray-800 group-hover:text-black transition-colors" />
      <span className="text-blue-600 font-semibold">View on GitHub</span>
    </div>
  </a>
);

const PortfolioCard = () => (
  <a
    href="https://github.com/hazemprogam/Portfolio"
    className="group relative bg-white/90 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
      alt="Portfolio"
      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Professional & Modern Portfolio</h3>
      <p className="text-gray-600 mb-4">A renewed and professional portfolio site with beautiful smooth animations.</p>
      <FaGithub className="inline-block mr-2 text-xl text-gray-800 group-hover:text-black transition-colors" />
      <span className="text-blue-600 font-semibold">View on GitHub</span>
    </div>
  </a>
);

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans text-white">
      <AnimatedBackground />
      {/* Header/Profile Section */}
      <header className="relative z-10 flex flex-col items-center text-center py-12 md:py-20">
        <img
          src="https://avatars.githubusercontent.com/u/3369400?v=4"
          alt="Hazem Babiker Muhammad Al-Jaili"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-white mb-6 animate-fade-in-up"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 animate-slide-in-left">
          Hazem Babiker Muhammad Al-Jaili
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-4 font-medium animate-slide-in-right">
          Passionate programmer turned{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent font-bold">
            Frontier Developer
          </span>
        </p>
        <div className="flex items-center justify-center gap-5 mt-3 animate-fade-in-up">
          <a
            href="https://github.com/hazemprogam"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-125 hover:text-black"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://web.facebook.com/hazEMPR"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-125 hover:text-blue-700"
            aria-label="Facebook"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="tel:+249925385818"
            className="transition-all hover:scale-125 hover:text-green-400"
            aria-label="Call"
          >
            <FaPhoneAlt className="text-3xl" />
          </a>
        </div>
        <a
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 text-indigo-700 font-bold shadow-lg hover:bg-white transition-all animate-bounce"
        >
          <FiDownload className="animate-pulse" />
          Scroll Down
        </a>
      </header>
      {/* Skills Section */}
      <section className="relative z-10 mt-10 mb-12 w-full max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center animate-fade-in-up">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent font-extrabold">Skills & Tools</span>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center animate-fade-in-up">
          {skills.map((skill, i) => (
            <div
              key={skill.label}
              className="flex flex-col items-center gap-2 animate-smooth-pop"
              style={{ animationDelay: `${i * 0.05 + 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl mb-1 drop-shadow-md transition-transform hover:scale-125">
                {skill.icon}
              </div>
              <span className="text-xs md:text-base font-semibold text-white/80">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative z-10 w-full max-w-4xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in-up">
          <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent font-extrabold">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <ProjectCard />
          <PortfolioCard />
        </div>
      </section>
    </div>
  );
}

export default App;