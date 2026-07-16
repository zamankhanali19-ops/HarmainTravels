import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=90&w=1200", schema, type = "website", publishedTime, modifiedTime, author, noindex = false }) => {
  const location = useLocation();
  const currentUrl = `https://harmaintravels.com${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="theme-color" content="#002147" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Self-referencing hreflang (single-language best practice) */}
      <link rel="alternate" hreflang="en" href={currentUrl} />
      <link rel="alternate" hreflang="x-default" href={currentUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Harmain Travels" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags (for blog posts) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter tags */}
      <meta name="twitter:creator" content="@HarmainTravels" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema Markup — supports single object or array of objects */}
      {schema && (
        Array.isArray(schema)
          ? schema.map((s, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(s)}
              </script>
            ))
          : (
            <script type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          )
      )}

      {/* Automatically generated Breadcrumb Schema */}
      {location.pathname !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://harmaintravels.com"
              },
              ...location.pathname
                .split('/')
                .filter(p => p)
                .map((pathSegment, index, array) => ({
                  "@type": "ListItem",
                  "position": index + 2,
                  "name": pathSegment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                  "item": `https://harmaintravels.com/${array.slice(0, index + 1).join('/')}`
                }))
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
