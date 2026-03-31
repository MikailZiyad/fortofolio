"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Indonesia",
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/repos", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-mikail-ziyad-9b6449240/", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-32 relative">
        {/* Background gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

        <div className="max-w-4xl mx-auto px-6 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-sm tracking-wider uppercase">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Let&apos;s Work{" "}
                <span className="gradient-text">Together</span>
              </h2>
              <p className="text-muted mt-4 max-w-xl mx-auto text-lg">
                Have a project in mind or want to collaborate? Feel free to reach
                out. I&apos;m always open to discussing new opportunities.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left - Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                    <p className="text-muted leading-relaxed">
                      I&apos;m currently available for freelance work and full-time
                      positions. Let&apos;s build something amazing together.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <motion.div
                        key={info.label}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                          <info.icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-muted">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium hover:text-accent transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-accent transition-colors"
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Right - Form */}
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm text-muted mb-1.5 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors text-foreground placeholder:text-muted/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors text-foreground placeholder:text-muted/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors text-foreground placeholder:text-muted/50 resize-none"
                    />
                  </div>
                  <MagneticButton className="w-full justify-center">
                    Send Message
                  </MagneticButton>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted text-sm"
            >
              &copy; {new Date().getFullYear()} Muhammad Mikail Ziyad. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
    </>
  );
}
