import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Script from 'next/script'
import ErrorBoundary from './components/error-boundary'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <Script
          id="webcomponent-conflict-fix"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent web component conflicts
              (function() {
                const originalDefine = customElements.define;
                const definedElements = new Set();
                
                // Override customElements.define to prevent duplicate registrations
                customElements.define = function(name, constructor, options) {
                  if (definedElements.has(name)) {
                    console.warn('Custom element "' + name + '" already defined, skipping duplicate registration');
                    return;
                  }
                  
                  try {
                    originalDefine.call(this, name, constructor, options);
                    definedElements.add(name);
                    console.log('Custom element "' + name + '" registered successfully');
                  } catch (error) {
                    if (error.message.includes('already been defined')) {
                      console.warn('Custom element "' + name + '" already defined, skipping');
                      definedElements.add(name);
                    } else {
                      throw error;
                    }
                  }
                };
                
                // Handle specific problematic elements
                if (customElements.get('mce-autosize-textarea')) {
                  console.log('mce-autosize-textarea already exists, preventing conflicts');
                }
                
                console.log('Web component conflict prevention initialized');
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ErrorBoundary>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ErrorBoundary>
      </body>
    </html>
  )
}
