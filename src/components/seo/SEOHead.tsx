import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  siteName?: string;
  locale?: string;
  alternateLocales?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
  structuredData?: object | object[];
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  enableTracking?: boolean;
  customMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

const defaultSEO: Required<Omit<SEOProps, 'structuredData' | 'publishedTime' | 'modifiedTime' | 'author' | 'alternateLocales' | 'priority' | 'changefreq' | 'enableTracking' | 'customMeta'>> = {
  title: 'Snowball | Making Commerce Better For Everyone',
  description: 'Snowball is revolutionizing commerce with innovative solutions for businesses and resellers. Join our platform to grow your business and reach new markets.',
  keywords: 'snowball, commerce, business, resellers, ecommerce, platform, online business, marketplace',
  image: '/snowball-og-image.jpg',
  url: 'https://snowball.com',
  type: 'website',
  siteName: 'Snowball',
  locale: 'en_US',
  noIndex: false,
  noFollow: false,
  canonical: '',
};

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  siteName = 'Snowball',
  locale = 'en_US',
  alternateLocales,
  noIndex = false,
  noFollow = false,
  canonical,
  structuredData,
  // priority = 0.8,
  // changefreq = 'weekly',
  enableTracking = true,
  customMeta = [],
}) => {
  const location = useLocation();

  // Build full URL
  const baseUrl = 'https://snowball.com';
  const currentUrl = url || `${baseUrl}${location.pathname}${location.search}`;
  const canonicalUrl = canonical || currentUrl;

  // Build meta title
  const metaTitle = title
    ? title.includes('Snowball')
      ? title
      : `${title} | Snowball`
    : defaultSEO.title;

  // Use defaults if not provided
  const metaDescription = description || defaultSEO.description;
  const metaKeywords = keywords || defaultSEO.keywords;
  const metaImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}${defaultSEO.image}`;

  // Robots directive
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Article specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Alternate locales */}
      {alternateLocales?.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content="@snowball" />
      <meta name="twitter:creator" content="@snowball" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="Snowball" />

      {/* Enterprise SEO Meta Tags */}
      <meta name="robots" content={`${robotsContent}, max-snippet:160, max-image-preview:large, max-video-preview:-1`} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* Performance and caching hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Business information */}
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Nigeria" />
      <meta name="geo.position" content="7.377758;3.947549" />
      <meta name="ICBM" content="7.377758, 3.947549" />

      {/* Content categorization */}
      <meta name="category" content="technology,business,ecommerce" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Page metadata for analytics */}
      <meta name="page-topic" content={type} />
      <meta name="page-type" content={type} />
      <meta name="revisit-after" content="7 days" />

      {/* Custom meta tags */}
      {customMeta.map((meta, index) => {
        const props: Record<string, string | number> = { key: index, content: meta.content };
        if (meta.name) props.name = meta.name;
        if (meta.property) props.property = meta.property;
        return <meta {...props} />;
      })}

      {/* Analytics and tracking - only if enabled */}
      {enableTracking && (
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID', {
                page_path: '${location.pathname}${location.search}',
                custom_map: {
                  custom_dimension_1: 'page_type',
                  custom_dimension_2: 'user_type'
                }
              });
            `}
          </script>

          {/* Meta Pixel */}
          <script>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `}
          </script>
          <noscript>
            <img height="1" width="1" style={{display: 'none'}}
                 src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
          </noscript>

          {/* LinkedIn Insight Tag */}
          <script type="text/javascript">
            {`
              _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </script>
          <script type="text/javascript">
            {`
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </script>
          <noscript>
            <img height="1" width="1" style={{display: 'none'}} alt=""
                 src="https://px.ads.linkedin.com/collect/?pid=YOUR_LINKEDIN_PARTNER_ID&fmt=gif" />
          </noscript>
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
};