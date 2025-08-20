import { baseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog', '/archive'],
        disallow: [
          '/documents/', // Protect CV and personal documents
          '/archive/media/', // Protect personal media files
          '/api/', // Block API endpoints if any
          '/*?*', // Block URLs with query parameters
          '/admin*', // Block any admin routes
          '/*.pdf$', // Block direct PDF access
          '/*.json$', // Block JSON files
        ],
      },
      // Block known PII/data collection bots
      {
        userAgent: [
          'CCBot', // Common Crawl (used by AI training)
          'ChatGPT-User', // OpenAI's crawler
          'GPTBot', // OpenAI's GPT crawler
          'Google-Extended', // Google's AI training crawler
          'anthropic-ai', // Anthropic's crawler
          'Claude-Web', // Claude's web crawler
        ],
        disallow: '/',
      },
      // Block social media crawlers that cache content
      {
        userAgent: [
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
          'SkypeUriPreview',
        ],
        disallow: ['/documents/', '/archive/media/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
