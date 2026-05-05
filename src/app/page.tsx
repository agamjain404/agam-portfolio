"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import {
  experiences,
  highlights,
  metrics,
  projects,
  skills,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <section className="pb-16 sm:pb-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Software Engineer</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Agam Jain
            </h1>
            <p className="mt-4 text-xl text-zinc-300 sm:text-2xl">
              Software Engineer | Backend, Frontend & Platform Engineer
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 max-w-3xl text-zinc-400 sm:text-lg"
            >
              Building scalable systems, developer platforms, and high-performance applications.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
                View Work
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5">
                Contact Me
              </a>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{metric.label}</p>
                  <p className="mt-2 text-lg font-medium text-zinc-100">{metric.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Section
          id="about"
          title="About"
          description="4+ years building backend systems, frontend experiences, and platform-grade architecture with an ownership-first engineering mindset."
        >
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-zinc-300 sm:p-8">
              I focus on backend systems, frontend engineering, and platform architecture. My core strengths include Node.js, React,
              distributed systems, and performance optimization. I enjoy owning problems end-to-end and designing platform-level
              solutions and product experiences that teams can reliably build on.
            </div>
          </FadeIn>
        </Section>

        <Section id="experience" title="Experience" description="Impact-driven roles with focus on scale, performance, and platform thinking.">
          <div className="relative space-y-8 border-l border-white/15 pl-6 sm:pl-8">
            {experiences.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.08}>
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="absolute -left-[33px] top-7 h-3 w-3 rounded-full bg-indigo-400" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">{item.company}</h3>
                    <p className="text-sm text-zinc-400">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-zinc-300">{item.role}</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300 sm:text-base">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" description="Focused builds with strong engineering outcomes and reusable learnings.">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-zinc-300">{project.description}</p>
                  <p className="mt-4 text-sm text-zinc-400">Tech: {project.stack.join(" • ")}</p>
                  <p className="mt-4 text-sm text-zinc-300">Key learning: {project.learnings}</p>
                  <div className="mt-5 flex gap-4 text-sm">
                    <a href={project.liveLink} className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200">
                      Live <ArrowUpRight size={14} />
                    </a>
                    <a href={project.githubLink} className="inline-flex items-center gap-1 text-zinc-300 hover:text-white">
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" description="Tools and technologies I use to build resilient, scalable systems.">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], index) => (
              <FadeIn key={group} delay={index * 0.07}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="text-sm uppercase tracking-wide text-zinc-500">{group}</h3>
                  <p className="mt-3 text-zinc-200">{items.join(" • ")}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="highlights" title="What I've Built" description="Platform-level outcomes that improved scale, maintainability, and delivery.">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-6">
                  <p className="text-zinc-100">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section id="philosophy" title="System Thinking" description="My engineering philosophy for shipping systems that last.">
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-zinc-300 sm:p-8">
              I design systems by optimizing for reliability, observability, and developer velocity together. I prefer clear service
              boundaries, measurable performance goals, and platform abstractions that reduce cognitive load for product teams. Great
              engineering is not just writing code quickly, it is building foundations that make future changes safer and faster.
            </div>
          </FadeIn>
        </Section>

        <Section id="contact" title="Contact" description="Open to impactful backend, frontend, and platform engineering opportunities.">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-sm text-zinc-400">Reach me directly</p>
                <div className="mt-4 space-y-3 text-sm">
                  <a href="mailto:agamjain.career@gmail.com" className="flex items-center gap-2 text-zinc-200 hover:text-white"><Mail size={14} /> agamjain.career@gmail.com</a>
                  <a href="https://www.linkedin.com/in/agamjain404/" className="flex items-center gap-2 text-zinc-200 hover:text-white"><ArrowUpRight size={14} /> linkedin.com/in/agamjain404/</a>
                  <a href="https://github.com/agamjain404" className="flex items-center gap-2 text-zinc-200 hover:text-white"><ArrowUpRight size={14} /> github.com/agamjain404</a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <form className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <input placeholder="Your Name" className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm outline-none ring-indigo-400 transition focus:ring-2" />
                <input placeholder="Your Email" type="email" className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm outline-none ring-indigo-400 transition focus:ring-2" />
                <textarea placeholder="Tell me about your project" rows={4} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm outline-none ring-indigo-400 transition focus:ring-2" />
                <button type="submit" className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">Send Message</button>
              </form>
            </FadeIn>
          </div>
        </Section>
      </main>
    </div>
  );
}

