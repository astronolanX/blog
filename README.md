# Nolan's Portfolio

A personal portfolio and blog built with Next.js 14, TypeScript, and Tailwind CSS, featuring comprehensive privacy protection and optimized performance.

## Features

### Core Functionality

- **Blog System** - MDX/Markdown support with syntax highlighting
- **Visual Archive** - Masonry grid for creative work and experiments
- **Responsive Design** - Mobile-first with dark mode support
- **Performance Optimized** - Fast loading with Next.js Image optimization

### Security & Privacy

- **PII Protection** - Comprehensive robots.txt blocking AI crawlers
- **Security Headers** - Prevents metadata collection and content caching
- **Content Protection** - Blocks social media preview generation
- **Directory Protection** - Secure document and media file access

### Technical Features

- **SEO Optimized** - Sitemap, robots.txt, JSON-LD schema
- **RSS Feed** - Automatic feed generation
- **Dynamic OG Images** - Custom social media previews
- **Shared Styles** - Centralized design system
- **Error Handling** - Custom 404 pages and error boundaries

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/astronolanX/blog.git
cd blog

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```text
app/
├── blog/
│   ├── posts/          # Blog posts in MDX format
│   ├── [slug]/         # Dynamic blog post pages
│   └── utils.ts        # Blog utilities
├── archive/
│   ├── data.ts         # Archive media data
│   └── page.tsx        # Archive grid page
├── components/
│   ├── media-grid.tsx  # Masonry grid component
│   ├── nav.tsx         # Navigation component
│   ├── footer.tsx      # Footer with social links
│   └── mdx.tsx         # MDX components
├── lib/
│   └── styles.ts       # Shared style constants
└── global.css          # Global styles

public/
├── documents/          # Protected documents (CV, etc.)
└── archive/
    └── media/          # Personal media files
```

## Content Management

### Adding Blog Posts

Create `.mdx` files in `app/blog/posts/` with frontmatter:

```mdx
---
title: 'Post Title'
publishedAt: '2024-01-01'
summary: 'Brief description'
---

Your content here...
```

### Adding Archive Items

Update `app/archive/data.ts` with new media items:

```typescript
{
  id: 'unique-id',
  type: 'image' | 'video' | 'gif',
  src: '/archive/media/filename.jpg',
  alt: 'Description',
  title: 'Item Title',
  description: 'Optional description',
  width: 800,
  height: 600,
}
```

## Privacy & Security

This site implements comprehensive protection against:

- AI training data collection (ChatGPT, Claude, etc.)
- Social media content caching
- Search engine image indexing
- Metadata extraction
- Personal document access

### Blocked Crawlers

- CCBot (Common Crawl)
- GPTBot (OpenAI)
- Google-Extended (AI training)
- Social media crawlers (Facebook, Twitter, etc.)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Standard Next.js deployment works on:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Styling

Modify shared styles in `app/lib/styles.ts` for consistent theming across all pages.

### Security

Update `app/robots.ts` and `next.config.js` headers to adjust privacy settings.

### Navigation

Edit `app/components/nav.tsx` to add/remove navigation items.

## License

MIT License - see [LICENSE](LICENSE) for details.
