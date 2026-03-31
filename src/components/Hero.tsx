"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/repos", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-mikail-ziyad-9b6449240/", label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[128px] animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted">Available for work</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">Mikail Ziyad</span>
        </motion.h1>

        {/* Typing effect title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-3xl text-muted font-light">
            I build{" "}
            <span className="text-foreground font-semibold relative">
              fullstack web applications
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Crafting modern, performant, and beautiful digital experiences.
            From pixel-perfect frontends to robust backends.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <MagneticButton href="#projects">
            View My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="!bg-transparent border-2 border-accent text-accent hover:bg-accent/10"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted hover:text-accent transition-colors"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
