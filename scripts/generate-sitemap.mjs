import fs from 'fs';

const baseUrl = 'https://allwindows.uz';
const today = new Date().toISOString().split('T')[0];

const prodCode = fs.readFileSync('src/data/products.ts', 'utf8');
const prods = [...prodCode.matchAll(/slug:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'/g)].map(m => ({ slug: m[1], cat: m[2] }));

const projCode = fs.readFileSync('src/data/projects.ts', 'utf8');
const projs = [...projCode.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const categories = [...new Set(prods.map(p => p.cat))];

const urls = [];

// Core pages
urls.push({ loc: '/', priority: '1.0', changefreq: 'weekly' });
urls.push({ loc: '/products', priority: '0.9', changefreq: 'weekly' });
urls.push({ loc: '/projects', priority: '0.8', changefreq: 'weekly' });
urls.push({ loc: '/services', priority: '0.8', changefreq: 'monthly' });
urls.push({ loc: '/about', priority: '0.7', changefreq: 'monthly' });
urls.push({ loc: '/contacts', priority: '0.7', changefreq: 'monthly' });

// Categories
for (const cat of categories) {
  urls.push({ loc: `/products/${cat}`, priority: '0.8', changefreq: 'weekly' });
}

// Products
for (const p of prods) {
  urls.push({ loc: `/products/${p.cat}/${p.slug}`, priority: '0.7', changefreq: 'monthly' });
}

// Projects
for (const p of projs) {
  urls.push({ loc: `/projects/${p}`, priority: '0.7', changefreq: 'monthly' });
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${u.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}${u.loc}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="uz" href="${baseUrl}${u.loc}?lang=uz" />\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
