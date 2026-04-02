"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";
import Image from "next/image";

const education = [
  {
    type: "education",
    title: "Sistem dan Teknologi Informasi",
    institution: "Universitas Pendidikan Indonesia",
    period: "2021 - 2025",
    description:
      "Mendalami bidang sistem informasi, rekayasa perangkat lunak, jaringan komputer, dan teknologi informasi modern.",
    icon: HiAcademicCap,
    logo: "/logos/upi.png",
  },
  {
    type: "program",
    title: "Machine Learning Path",
    institution: "Bangkit Academy by Google, GoTo, Traveloka",
    period: "Feb - Sep 2024",
    description:
      "Program intensif Machine Learning yang mencakup TensorFlow, data analytics, dan deployment model ML ke production.",
    icon: HiAcademicCap,
    logo: "/logos/bangkit.png",
  },
];

const certifications = [
  {
    title: "Junior Network Administrator",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    icon: HiBadgeCheck,
  },
  {
    title: "Machine Learning Graduate",
    issuer: "Bangkit Academy 2024",
    icon: HiBadgeCheck,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Background
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-xl p-6 h-full group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                        unoptimized
                      />
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                  <div>
                    <span className="text-accent font-mono text-xs">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-accent-secondary text-sm font-medium mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Certifications
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={0.3 + i * 0.1}>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <cert.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-muted text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
