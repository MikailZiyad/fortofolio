"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    title: "Frontend Dev",
    desc: "React, Next.js, Vue, TypeScript",
  },
  {
    icon: FaServer,
    title: "Backend Dev",
    desc: "Node.js, Express, NestJS, Go",
  },
  {
    icon: FaDatabase,
    title: "Database",
    desc: "PostgreSQL, MongoDB, Redis",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Dev",
    desc: "React Native, Flutter",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Turning ideas into{" "}
              <span className="gradient-text">reality</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="gradient-border">
                <div className="relative bg-card-bg rounded-2xl p-8 overflow-hidden">
                  {/* Code-like visual */}
                  <div className="font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      {[
                        { text: "const developer = {", color: "text-accent" },
                        {
                          text: '  name: "Muhammad Mikail Ziyad",',
                          color: "text-green-400",
                        },
                        {
                          text: '  role: "Fullstack Developer",',
                          color: "text-green-400",
                        },
                        {
                          text: "  experience: 3+ years,",
                          color: "text-yellow-400",
                        },
                        {
                          text: '  passion: "Building cool stuff",',
                          color: "text-green-400",
                        },
                        {
                          text: "  coffee: true,",
                          color: "text-accent-secondary",
                        },
                        { text: "};", color: "text-accent" },
                      ].map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={line.color}
                        >
                          {line.text}
                        </motion.p>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 glass px-3 py-1.5 rounded-full text-xs font-mono text-accent"
              >
                3+ Years Exp
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-4 -left-4 glass px-3 py-1.5 rounded-full text-xs font-mono text-accent-secondary"
              >
                50+ Projects
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Text */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m a passionate fullstack developer who loves creating
                seamless digital experiences. With expertise spanning from
                frontend UI/UX to backend architecture, I bring ideas to life
                with clean, efficient code.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                I thrive on solving complex problems and continuously learning
                new technologies. My goal is to build products that make a
                real impact and deliver exceptional user experiences.
              </p>

              {/* Highlight cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-4 group cursor-default"
                  >
                    <item.icon className="text-accent mb-2 text-xl group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
