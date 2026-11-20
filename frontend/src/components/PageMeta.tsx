import { useEffect } from 'react';

interface PageMetaProps {
  titre: string;
}

export default function PageMeta({ titre }: PageMetaProps) {
  useEffect(() => {
    document.title = titre;
  }, [titre]);

  return null;
}
