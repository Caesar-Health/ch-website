/**
 * SEO utility functions for managing meta tags
 * Note: This provides basic client-side meta tag management
 * For optimal SEO, consider Server-Side Rendering (SSR) with Next.js or similar
 */

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
  type?: 'website' | 'article'
}

export function updateMetaTags(config: SEOConfig) {
  // Update document title
  document.title = config.title

  // Update or create meta tags
  const updateMeta = (name: string, content: string, property = false) => {
    const attr = property ? 'property' : 'name'
    let element = document.querySelector(`meta[${attr}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }

  // Basic meta tags
  updateMeta('description', config.description)
  updateMeta('title', config.title)
  
  if (config.keywords?.length) {
    updateMeta('keywords', config.keywords.join(', '))
  }

  // Open Graph tags
  updateMeta('og:title', config.title, true)
  updateMeta('og:description', config.description, true)
  updateMeta('og:type', config.type || 'website', true)
  
  if (config.ogImage) {
    updateMeta('og:image', config.ogImage, true)
  }
  
  const currentUrl = window.location.href
  updateMeta('og:url', config.canonical || currentUrl, true)

  // Twitter tags
  updateMeta('twitter:title', config.title, true)
  updateMeta('twitter:description', config.description, true)
  
  if (config.ogImage) {
    updateMeta('twitter:image', config.ogImage, true)
  }

  // Canonical URL
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', config.canonical)
  }
}

// Restore default meta tags when leaving a page
export function resetMetaTags() {
  updateMetaTags({
    title: 'Caesar Health - AI-Powered Healthcare Administration Platform',
    description: 'AI-first healthcare platform streamlining medical workflows with automated clinical documentation, care coordination, and EMR integration. HIPAA-compliant solutions for medical practices, hospitals, and healthcare organizations.',
    canonical: 'https://caesarhealth.com/',
    ogImage: 'https://caesarhealth.com/images/caesar-health-simplified.svg',
  })
}

