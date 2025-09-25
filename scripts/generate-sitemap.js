import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const baseUrl = 'https://snowball.com';
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Define your routes with their properties
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily'
  },
  {
    path: '/bloom/businesses',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/bloom/resellers',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/blog',
    priority: '0.8',
    changefreq: 'daily'
  },
  {
    path: '/privacy-policy',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/legal/bloom/refund-policy',
    priority: '0.4',
    changefreq: 'monthly'
  },
  {
    path: '/legal/bloom/businesses/terms-of-use',
    priority: '0.4',
    changefreq: 'monthly'
  },
  {
    path: '/legal/bloom/businesses/privacy-policy',
    priority: '0.4',
    changefreq: 'monthly'
  },
  {
    path: '/legal/bloom/resellers/terms-of-use',
    priority: '0.4',
    changefreq: 'monthly'
  },
  {
    path: '/legal/bloom/resellers/privacy-policy',
    priority: '0.4',
    changefreq: 'monthly'
  }
];

// Function to get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Function to generate sitemap XML
function generateSitemap() {
  const currentDate = getCurrentDate();

  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach(route => {
    xmlContent += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  xmlContent += `

</urlset>`;

  return xmlContent;
}

// Function to add blog posts dynamically (if you have a blog API)
async function addBlogPosts(xmlContent) {
  // This would fetch blog posts from your API
  // For now, we'll just return the existing content
  // You can extend this to fetch from your blog service

  try {
    // Example: const blogPosts = await fetch('/api/blog-posts').then(res => res.json());
    // blogPosts.forEach(post => {
    //   xmlContent += `
    //   <url>
    //     <loc>${baseUrl}/blog/${post.slug}</loc>
    //     <lastmod>${post.updatedAt}</lastmod>
    //     <changefreq>weekly</changefreq>
    //     <priority>0.7</priority>
    //   </url>`;
    // });
  } catch (error) {
    console.log('Could not fetch blog posts for sitemap:', error.message);
  }

  return xmlContent;
}

// Main function to generate and write sitemap
async function main() {
  try {
    console.log('Generating sitemap...');

    let xmlContent = generateSitemap();
    xmlContent = await addBlogPosts(xmlContent);

    // Write to file
    fs.writeFileSync(outputPath, xmlContent, 'utf8');

    console.log(`✅ Sitemap generated successfully at ${outputPath}`);
    console.log(`📊 Total URLs: ${routes.length}`);
    console.log(`🔗 Base URL: ${baseUrl}`);

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
main();

export { generateSitemap, routes, baseUrl };