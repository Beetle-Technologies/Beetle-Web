import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook for tracking page views and SEO events
export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Utility function to generate structured data
  const generateStructuredData = {
    organization: () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Snowball",
      "url": "https://snowball.org",
      "logo": "https://snowball.org/logo.svg",
      "description": "Making Commerce Better For Everyone",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-SNOWBALL",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://twitter.com/snowball",
        "https://linkedin.com/company/snowball",
        "https://facebook.com/snowball"
      ]
    }),

    website: () => ({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Snowball",
      "url": "https://snowball.org",
      "description": "Making Commerce Better For Everyone",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://snowball.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }),

    breadcrumb: (items: Array<{name: string, url: string}>) => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    }),

    article: (article: {
      headline: string;
      description: string;
      author: string;
      publishedDate: string;
      modifiedDate?: string;
      image: string;
      url: string;
    }) => ({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Snowball",
        "logo": {
          "@type": "ImageObject",
          "url": "https://snowball.com/logo.svg"
        }
      },
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate || article.publishedDate,
      "image": article.image,
      "url": article.url,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      }
    }),

    faq: (faqs: Array<{question: string, answer: string}>) => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }),

    service: (service: {
      name: string;
      description: string;
      provider: string;
      areaServed?: string;
      serviceType?: string;
    }) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": service.provider
      },
      "areaServed": service.areaServed || "Worldwide",
      "serviceType": service.serviceType || "Business Service"
    }),

    product: (product: {
      name: string;
      description: string;
      brand: string;
      category?: string;
      offers?: {
        price: string;
        priceCurrency: string;
        availability: string;
        validFrom?: string;
      };
      aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
      };
    }) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": product.brand
      },
      "category": product.category || "Software",
      ...(product.offers && {
        "offers": {
          "@type": "Offer",
          "price": product.offers.price,
          "priceCurrency": product.offers.priceCurrency,
          "availability": `https://schema.org/${product.offers.availability}`,
          ...(product.offers.validFrom && { "validFrom": product.offers.validFrom })
        }
      }),
      ...(product.aggregateRating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.aggregateRating.ratingValue,
          "reviewCount": product.aggregateRating.reviewCount
        }
      })
    }),

    softwareApplication: (app: {
      name: string;
      description: string;
      operatingSystem: string;
      applicationCategory: string;
      offers?: {
        price: string;
        priceCurrency: string;
      };
      aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
      };
    }) => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": app.name,
      "description": app.description,
      "operatingSystem": app.operatingSystem,
      "applicationCategory": app.applicationCategory,
      "provider": {
        "@type": "Organization",
        "name": "Snowball"
      },
      ...(app.offers && {
        "offers": {
          "@type": "Offer",
          "price": app.offers.price,
          "priceCurrency": app.offers.priceCurrency
        }
      }),
      ...(app.aggregateRating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": app.aggregateRating.ratingValue,
          "reviewCount": app.aggregateRating.reviewCount
        }
      })
    }),

    howTo: (guide: {
      name: string;
      description: string;
      image?: string;
      totalTime?: string;
      estimatedCost?: string;
      steps: Array<{
        name: string;
        text: string;
        url?: string;
      }>;
    }) => ({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": guide.name,
      "description": guide.description,
      ...(guide.image && { "image": guide.image }),
      ...(guide.totalTime && { "totalTime": guide.totalTime }),
      ...(guide.estimatedCost && { "estimatedCost": guide.estimatedCost }),
      "step": guide.steps.map(step => ({
        "@type": "HowToStep",
        "name": step.name,
        "text": step.text,
        ...(step.url && { "url": step.url })
      }))
    })
  };

  // Advanced SEO tracking utilities
  const trackPageView = (pathname: string, title: string) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: pathname,
        page_title: title,
        custom_map: {
          custom_dimension_1: 'page_category'
        }
      });
    }

    // Meta Pixel tracking
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).fbq) {
      ((window as unknown as Record<string, unknown>).fbq as (action: string, event: string) => void)('track', 'PageView');
    }

    // LinkedIn Insight Tag
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).lintrk) {
      ((window as unknown as Record<string, unknown>).lintrk as (action: string, params: Record<string, string>) => void)('track', { conversion_id: 'PAGE_VIEW' });
    }
  };

  const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }
  };

  const generateSitemapData = () => {
    const baseUrl = 'https://snowball.com';
    const pages = [
      { url: '', priority: 1.0, changefreq: 'daily' },
      { url: '/bloom/businesses', priority: 0.9, changefreq: 'weekly' },
      { url: '/bloom/resellers', priority: 0.9, changefreq: 'weekly' },
      { url: '/blog', priority: 0.8, changefreq: 'daily' },
      { url: '/privacy-policy', priority: 0.5, changefreq: 'monthly' },
      { url: '/legal/bloom/refund-policy', priority: 0.5, changefreq: 'monthly' },
    ];

    return pages.map(page => ({
      loc: `${baseUrl}${page.url}`,
      priority: page.priority,
      changefreq: page.changefreq,
      lastmod: new Date().toISOString()
    }));
  };

  const generateRobotsTxt = () => {
    return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*

# Specific crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Sitemap
Sitemap: https://snowball.com/sitemap.xml

# Crawl delay
Crawl-delay: 1`;
  };

  return {
    generateStructuredData,
    trackPageView,
    trackEvent,
    generateSitemapData,
    generateRobotsTxt,
  };
};

// Utility function to generate page-specific SEO data
export const getPageSEO = (pathname: string) => {
  const seoData: Record<string, Record<string, unknown>> = {
    '/': {
      title: 'Snowball | Making Commerce Better For Everyone',
      description: 'Snowball is revolutionizing commerce with innovative solutions for businesses and resellers. Join our platform to grow your business and reach new markets.',
      keywords: 'snowball, commerce, business, resellers, ecommerce, platform, online business, marketplace'
    },
    '/bloom/businesses': {
      title: 'Snowball for Businesses | Scale Your Commerce Operations',
      description: 'Discover how Snowball empowers businesses with advanced commerce tools, analytics, and integrations to scale operations and increase revenue.',
      keywords: 'snowball business, commerce platform, business tools, ecommerce solutions, business growth'
    },
    '/bloom/resellers': {
      title: 'Snowball for Resellers | Grow Your Reselling Business',
      description: 'Join thousands of successful resellers using Snowball to source products, manage inventory, and scale their reselling operations.',
      keywords: 'snowball resellers, reselling platform, product sourcing, inventory management, reseller tools'
    },
    '/blog': {
      title: 'Snowball Blog | Commerce Insights and Tips',
      description: 'Stay updated with the latest commerce trends, business insights, and platform updates from the Snowball team.',
      keywords: 'snowball blog, commerce insights, business tips, ecommerce trends, industry news'
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Snowball',
      description: 'Learn how Snowball protects your privacy and handles your personal data in compliance with global privacy regulations.',
      keywords: 'privacy policy, data protection, GDPR compliance, privacy rights',
      noIndex: false
    },
    '/legal/bloom/refund-policy': {
      title: 'Refund Policy | Snowball',
      description: 'Understand Snowball\'s refund policy for our commerce platform services and subscription plans.',
      keywords: 'refund policy, money back guarantee, subscription refunds',
      noIndex: false
    }
  };

  return (seoData[pathname] as Record<string, unknown>) || {
    title: 'Snowball | Making Commerce Better For Everyone',
    description: 'Discover Snowball\'s innovative commerce solutions for businesses and resellers.',
    keywords: 'snowball, commerce, business, platform'
  };
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}