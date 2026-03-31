"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "IT LuarSekolah",
    period: "2023 - Present",
    description:
      "Mengembangkan dan memelihara platform edukasi serta produk AI seperti Netra AI dan Diotomasi AI. Bertanggung jawab atas arsitektur fullstack dari frontend hingga backend dan deployment.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Python", "Docker"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/50 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.role} delay={i * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-[7px] md:-translate-x-[8px] mt-6 animate-pulse-glow z-10"
                />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass rounded-xl p-6"
                  >
                    <span className="text-accent font-mono text-sm">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    <p className="text-accent-secondary font-medium text-sm mt-1">
                      @ {exp.company}
                    </p>
                    <p className="text-muted mt-3 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-accent/10 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
