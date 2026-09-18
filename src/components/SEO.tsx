import { useEffect } from 'react';
import { useLocation } from 'wouter';
import type { Lang } from '@/data/translations';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product';
  canonicalPath?: string;
  lang?: Lang;
  schema?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  image,
  imageAlt,
  type = 'website',
  canonicalPath,
  lang,
  schema,
  noIndex = false,
}: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Language Attribute
    if (lang) {
      document.documentElement.lang = lang;
    }

    // Helper to create or update meta tag
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let node = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute(attrName, attrValue);
        document.head.appendChild(node);
      }
      node.setAttribute('content', content);
    };

    // Helper to create or update link tag
    const setLink = (rel: string, href: string) => {
      let node = document.querySelector(`link[rel="${rel}"]`);
      if (!node) {
        node = document.createElement('link');
        node.setAttribute('rel', rel);
        document.head.appendChild(node);
      }
      node.setAttribute('href', href);
    };

    // 3. Primary Meta Tags
    setMeta('name', 'description', description);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Canonical URL
    const origin = 'https://allwindows.uz';
    const path = canonicalPath !== undefined ? canonicalPath : location;
    const fullCanonical = `${origin}${path === '/' ? '/' : path.replace(/\/+$/, '')}`;
    setLink('canonical', fullCanonical);

    // 5. OpenGraph Tags
    const ogImage = image
      ? (image.startsWith('http') ? image : `${origin}${image}`)
      : `${origin}/og.webp`;

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', ogImage);
    if (imageAlt) {
      setMeta('property', 'og:image:alt', imageAlt);
    }
    setMeta('property', 'og:site_name', 'ALL WINDOWS');
    setMeta('property', 'og:locale', lang === 'uz' ? 'uz_UZ' : 'ru_RU');

    // 6. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    if (imageAlt) {
      setMeta('name', 'twitter:image:alt', imageAlt);
    }

    // 7. Dynamic JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      const schemaData = Array.isArray(schema)
        ? { '@context': 'https://schema.org', '@graph': schema }
        : { '@context': 'https://schema.org', ...schema };
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Optional cleanup
    };
  }, [title, description, keywords, image, imageAlt, type, canonicalPath, lang, schema, noIndex, location]);

  return null;
}

export default SEO;
