import fs from 'fs'
import path from 'path'

export interface PortfolioProject {
  metadata: {
    title: string
    publishedAt: string
    summary: string
    image: string
    tech: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
  }
  slug: string
  content: string
}

function parsePortfolioContent(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: any = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    
    // Handle arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(item => item.trim().replace(/^['"](.*)['"]$/, '$1'))
    }
    
    // Handle booleans
    if (value === 'true') value = true
    if (value === 'false') value = false

    metadata[key.trim()] = value
  })

  return { metadata, content }
}

function getPortfolioProjects(): PortfolioProject[] {
  const projectsDirectory = path.join(process.cwd(), 'app', 'portfolio', 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const fullPath = path.join(projectsDirectory, name)
      const fileContent = fs.readFileSync(fullPath, 'utf8')
      const { metadata, content } = parsePortfolioContent(fileContent)
      const slug = name.replace(/\.mdx$/, '')

      return {
        metadata,
        slug,
        content,
      } as PortfolioProject
    })

  return projects.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })
}

export { getPortfolioProjects }