import { useEffect } from 'react';
import { analyzeAndUpdateSEO } from '../utils/seoAnalyzer';

/**
 * Custom React Hook to automatically update high-intent SEO metadata.
 * Pulls the latest keywords and applies them to the current document.
 */
export const useSEOAnalyzer = (routeKey, customData = {}) => {
  const { title, description, keywords } = customData;

  useEffect(() => {
    analyzeAndUpdateSEO(routeKey, { title, description, keywords });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey, title, description]);
};
