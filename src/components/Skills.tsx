"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiPrisma,
  SiGraphql,
  SiFigma,
  SiPython,
  SiVuedotjs,
  SiN8N,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiKeras,
} from "react-icons/si";
import { FaAws, FaBrain, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: string;
}

const allSkills: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express", icon: SiExpress, color: "#ffffff", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Flask", icon: SiFlask, color: "#ffffff", category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", category: "Backend" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Backend" },
  // AI & ML
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI & ML" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", category: "AI & ML" },
  { name: "Keras", icon: SiKeras, color: "#D00000", category: "AI & ML" },
  { name: "Deep Learning", icon: FaBrain, color: "#A78BFA", category: "AI & ML" },
  { name: "NLP", icon: FaBrain, color: "#6366F1", category: "AI & ML" },
  // DevOps & Tools
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps & Tools" },
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "DevOps & Tools" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71", category: "DevOps & Tools" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "DevOps & Tools" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "DevOps & Tools" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "DevOps & Tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "DevOps & Tools" },
];

const categories = ["All", "Frontend", "Backend", "AI & ML", "DevOps & Tools"];
const ITEMS_PER_PAGE = 8;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const filtered =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentSkills = filtered.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  // Reset page when category changes
  useEffect(() => {
    setPage(0);
    setDirection(0);
  }, [activeCategory]);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setPage((prev) => {
        const next = prev + dir;
        if (next < 0) return totalPages - 1;
        if (next >= totalPages) return 0;
        return next;
      });
    },
    [totalPages]
  );

  // Auto-play carousel
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [totalPages, paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Tech Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        {/* Category filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Navigation arrows */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={() => paginate(-1)}
                  className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                >
                  <FaChevronRight size={14} />
                </button>
              </>
            )}

            {/* Skills grid with animation */}
            <div className="overflow-hidden min-h-[280px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeCategory}-${page}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full"
                >
                  {currentSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        scale: 1.08,
                        y: -8,
                        boxShadow: `0 12px 40px ${skill.color}25`,
                      }}
                      className="glass rounded-xl p-6 flex flex-col items-center gap-3 cursor-default group"
                    >
                      <skill.icon
                        size={36}
                        className="transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted/50 px-2 py-0.5 rounded-full bg-white/5">
                        {skill.category}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > page ? 1 : -1);
                      setPage(i);
                    }}
                    className="relative p-1"
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === page
                          ? "bg-accent w-6"
                          : "bg-muted/30 hover:bg-muted/50"
                      }`}
                      style={{ borderRadius: "999px" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
