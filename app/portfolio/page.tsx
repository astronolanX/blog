import Link from 'next/link'
import Image from 'next/image'
import { getPortfolioProjects } from './utils'

export const metadata = {
  title: 'Portfolio',
  description: 'Selected projects and technical work',
}

export default function Portfolio() {
  const projects = getPortfolioProjects()
  const featuredProjects = projects.filter(project => project.metadata.featured)
  const otherProjects = projects.filter(project => !project.metadata.featured)

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-300">
        A selection of projects I've built, from full-stack applications to mobile apps and data visualizations.
      </p>

      {featuredProjects.length > 0 && (
        <>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">Featured Projects</h2>
          <div className="mb-12 grid gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </>
      )}

      {otherProjects.length > 0 && (
        <>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

interface ProjectCardProps {
  project: ReturnType<typeof getPortfolioProjects>[0]
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
        featured ? '' : 'h-full'
      }`}
    >
      <div className={`relative ${featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
        <Image
          src={project.metadata.image}
          alt={project.metadata.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 800px' : '(max-width: 768px) 100vw, 400px'}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className={`font-semibold mb-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {project.metadata.title}
        </h3>
        
        <p className={`text-neutral-600 dark:text-neutral-300 mb-4 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {project.metadata.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metadata.tech.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.metadata.tech.length > (featured ? 6 : 4) && (
            <span className="px-2 py-1 text-xs text-neutral-500">
              +{project.metadata.tech.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>
        
        <div className="flex gap-4 text-sm">
          {project.metadata.liveUrl && (
            <span className="text-blue-600 dark:text-blue-400">Live Demo</span>
          )}
          {project.metadata.githubUrl && (
            <span className="text-neutral-600 dark:text-neutral-400">Source Code</span>
          )}
        </div>
      </div>
    </Link>
  )
}