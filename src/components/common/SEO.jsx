import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, image = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=90&w=1200", schema }) => {
  const location = useLocation();
  const currentUrl = `https://harmaintravels.com${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="theme-color" content="#002147" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Harmain Travels" />

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
    </Helmet>
  );
};

export default SEO;
