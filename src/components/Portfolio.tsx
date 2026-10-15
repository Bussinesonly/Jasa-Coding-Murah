import { useRef, useState } from 'react'
import { portfolioProjects } from '../data/portfolioData'
import type { PortfolioProject } from '../types'
import { ProjectModal } from './ProjectModal'
import {
  ArrowUpRight,
  ShoppingBag,
  GraduationCap,
  LayoutDashboard,
  Building2,
} from 'lucide-react'

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)

  const openProject = (project: PortfolioProject, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Karya & Studi Kasus
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
              Portofolio Pilihan
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Beberapa hasil rancangan nyata untuk bisnis, institusi, dan UMKM. Dibangun dengan fokus pada kecepatan, kemudahan navigasi, dan fungsi nyata.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50">
            Arsitektur kustom untuk kebutuhan Anda
          </div>
        </div>

        {/* Agency-style Asymmetrical Projects Grid - NOT uniform 3x3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" data-aos="fade-up" data-aos-delay="80">
          {/* Project 1: Large Featured Card (Full 12 cols on mobile, 7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProjectCard
              project={portfolioProjects[0]}
              onSelect={(trigger) => openProject(portfolioProjects[0], trigger)}
              featured={true}
            />
          </div>

          {/* Project 2: High Card (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <ProjectCard
              project={portfolioProjects[1]}
              onSelect={(trigger) => openProject(portfolioProjects[1], trigger)}
            />
          </div>

          {/* Project 3: E-Commerce Platform (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <ProjectCard
              project={portfolioProjects[2]}
              onSelect={(trigger) => openProject(portfolioProjects[2], trigger)}
            />
          </div>

          {/* Project 4: Large Management Dashboard (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProjectCard
              project={portfolioProjects[3]}
              onSelect={(trigger) => openProject(portfolioProjects[3], trigger)}
              featured={true}
            />
          </div>
        </div>
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </section>
  )
}

interface ProjectCardProps {
  project: PortfolioProject
  onSelect: (trigger: HTMLButtonElement) => void
  featured?: boolean
}

const ProjectCard = ({ project, onSelect, featured = false }: ProjectCardProps) => {
  return (
    <article
      className={`group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
        featured ? 'ring-1 ring-blue-500/10' : ''
      }`}
    >
      {/* Project Mockup Graphic Representation */}
      <div className="relative p-6 sm:p-8 bg-slate-950 overflow-hidden border-b border-slate-800/80">
        {/* Subtle Browser Window Frame */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="truncate max-w-[180px] text-slate-500">
              jasacoding.com/{project.id}
            </div>
            <div className="flex items-center gap-2">
              {featured && (
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono">
                  Unggulan
                </span>
              )}
              <span className="text-emerald-400">{project.highlightMetric}</span>
            </div>
          </div>

          {/* Realistic Interface Preview Graphic */}
          <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 min-h-[170px] flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  {project.livePreviewType === 'business' && (
                    <Building2 className="w-4 h-4 text-blue-400" />
                  )}
                  {project.livePreviewType === 'school' && (
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  )}
                  {project.livePreviewType === 'ecommerce' && (
                    <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  )}
                  {project.livePreviewType === 'dashboard' && (
                    <LayoutDashboard className="w-4 h-4 text-purple-400" />
                  )}
                  <span className="text-xs font-mono text-slate-400">
                    Pratinjau Studi Kasus
                  </span>
                </div>
                <div className="text-white font-bold text-sm sm:text-base">
                  {project.title}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block">
                  {project.highlightLabel}
                </span>
                <span className="text-xs font-bold font-mono text-emerald-400">
                  {project.highlightMetric}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="truncate">{project.clientType}</span>
              <span className="text-blue-400 group-hover:underline flex items-center gap-1 shrink-0">
                <span>Klik untuk Detail</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content & Meta */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.clientType}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform duration-200">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Action Button */}
        <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={(event) => onSelect(event.currentTarget)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors"
            aria-label={`Lihat detail ${project.title}`}
          >
            <span>Lihat Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  )
}
