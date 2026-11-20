import { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';
import { chargerActualites } from '../services/api';
import type { Actualite } from '../types';

export default function Actualites() {
  const [actualites, setActualites] = useState<Actualite[]>([]);

  useEffect(() => {
    chargerActualites()
      .then(setActualites)
      .catch((erreur) => {
        console.warn("API indisponible : aucune actualité chargée.", erreur);
      });
  }, []);

  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Actualités" />

      <main className="page-content">
        <div className="container">
          <h1>Fil d'Actualités</h1>
          <p>Les dernières informations scientifiques, réglementaires et professionnelles.</p>

          <div className="news-feed">
            {actualites.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Aucune actualité disponible pour le moment.
              </p>
            ) : (
              actualites.map((actualite) => (
                <article className="news-item-card" key={actualite.id}>
                  <div className="news-content-area">
                    <h3>{actualite.titre}</h3>
                    {actualite.datePublication ? <p>{actualite.datePublication}</p> : null}
                    <p>{actualite.resume}</p>
                    {actualite.contenu ? <p>{actualite.contenu}</p> : null}
                    {actualite.lien ? (
                      <a href={actualite.lien} target="_blank" rel="noopener" className="btn primary btn-sm">
                        Lire la suite
                      </a>
                    ) : null}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}
