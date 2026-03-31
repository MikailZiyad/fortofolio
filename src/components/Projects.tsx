"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Netra AI",
    description:
      "CCTV Analytics platform powered by Machine Learning. Menganalisis rekaman CCTV secara real-time untuk deteksi objek, aktivitas mencurigakan, dan pengenalan wajah dengan akurasi tinggi.",
    tags: ["Python", "TensorFlow", "OpenCV", "React", "FastAPI", "Docker"],
    logo: "/projects/netra-icon.png",
    github: "https://github.com/repos",
    live: "https://netra.luarsekolah.com/",
    featured: true,
  },
  {
    title: "Diotomasi AI",
    description:
      "Platform otomasi cerdas berbasis AI yang membantu bisnis mengautomasi workflow dan proses operasional secara efisien dengan kemampuan machine learning.",
    tags: ["Next.js", "TypeScript", "Python", "OpenAI", "Node.js", "PostgreSQL"],
    logo: "/projects/diotomasi-icon.png",
    github: "https://github.com/repos",
    live: "https://diotomasi.ai/",
    featured: true,
  },
  {
    title: "Presidana",
    description:
      "Platform blockchain untuk transparansi dan keamanan data. Memanfaatkan teknologi decentralized ledger untuk memastikan integritas dan immutability setiap transaksi.",
    tags: ["Solidity", "Ethereum", "React", "Web3.js", "Node.js", "IPFS"],
    logo: null,
    github: "https://github.com/repos",
    live: "#",
    featured: true,
  },
  {
    title: "AsetBook",
    description:
      "Sistem manajemen aset kantor yang komprehensif. Mengelola inventaris, pelacakan aset, peminjaman peralatan, dan laporan kondisi aset secara digital dan terpusat.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    logo: null,
    github: "https://github.com/repos",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              Some of the projects I&apos;ve built that showcase my skills and passion
            </p>
          </div>
        </AnimatedSection>

        {/* Featured projects - large cards */}
        <div className="space-y-24 mb-24">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <AnimatedSection key={project.title} delay={0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Project visual */}
                  <div
                    className={`${i % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className="relative group">
                      <div className="gradient-border">
                        <div className="bg-card-bg rounded-2xl p-1 overflow-hidden">
                          <div className="bg-gradient-to-br from-accent/10 to-accent-secondary/10 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder visual */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5" />
                            <div className="relative text-center p-8">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center overflow-hidden">
                                {project.logo ? (
                                  <Image
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                  />
                                ) : (
                                  <span className="text-3xl">
                                    {["📹", "🤖", "⛓️", "📋"][i]}
                                  </span>
                                )}
                              </div>
                              <p className="text-foreground font-semibold text-base">
                                {project.title}
                              </p>
                            </div>
                            {/* Hover overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent transition-colors"
                              >
                                <FaGithub size={20} />
                              </a>
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent transition-colors"
                              >
                                <FaExternalLinkAlt size={18} />
                              </a>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                    <span className="text-accent font-mono text-sm">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                      {project.title}
                    </h3>
                    <div className="glass rounded-xl p-6 mb-4">
                      <p className="text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`flex gap-4 mt-6 ${
                        i % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        <FaGithub size={22} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
        </div>

        {/* Other projects grid */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Noteworthy Projects
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg mx-auto md:max-w-none">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-xl p-6 h-full flex flex-col group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-xl">
                      📁
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}
