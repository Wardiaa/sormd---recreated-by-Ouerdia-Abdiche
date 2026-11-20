import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const cible = document.getElementById(hash.slice(1));
      if (cible) {
        const minutage = window.setTimeout(() => {
          cible.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 0);
        return () => window.clearTimeout(minutage);
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
