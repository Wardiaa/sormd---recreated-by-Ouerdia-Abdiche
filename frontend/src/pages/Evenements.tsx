import { useEffect, useState } from 'react';
import EvenementModal from '../components/EvenementModal';
import ImageViewer, { type ImageViewerData } from '../components/ImageViewer';
import Lien from '../components/Lien';
import PageMeta from '../components/PageMeta';
import { evenements as evenementsLocaux } from '../data/evenements';
import { chargerEvenements } from '../services/api';
import type { Evenement } from '../types';

function formaterDateCourte(valeur: string | null): string {
  if (!valeur) return '';
  const date = new Date(valeur);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export default function Evenements() {
  const [liste, setListe] = useState<Evenement[]>(evenementsLocaux);
  const [evenement, setEvenement] = useState<Evenement | null>(null);
  const [visionneuse, setVisionneuse] = useState<ImageViewerData | null>(null);

  useEffect(() => {
    chargerEvenements()
      .then((donnees) => {
        if (donnees.length > 0) setListe(donnees);
      })
      .catch((erreur) => {
        console.warn("API indisponible : utilisation des événements locaux.", erreur);
      });
  }, []);

  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Événements" />

      <main className="page-content">
        <div className="container">
          <h1>Calendrier des Événements</h1>
          <p>
            Retrouvez ici tous les congrès, séminaires et webinaires organisés par l'Association
            DMD.
          </p>

          <section className="events-list">
            {liste.map((element) => {
              const dateDebut = formaterDateCourte(element.dateDebut);
              const dateFin = formaterDateCourte(element.dateFin);
              const dateAffichee = dateDebut && dateFin ? `${dateDebut} - ${dateFin}` : dateDebut;

              return (
                <article className="event-item" key={element.id}>
                  <img
                    src={element.image}
                    alt={element.libelle}
                    className="event-image"
                    data-image-viewer
                    data-titre={element.libelle}
                    data-date={dateDebut}
                    onClick={() =>
                      setVisionneuse({
                        src: element.image || '',
                        titre: element.libelle,
                        date: dateDebut
                      })
                    }
                  />

                  <h2>{element.libelle}</h2>

                  <p>
                    <strong>Type :</strong> {element.type}
                  </p>

                  {dateAffichee ? (
                    <p>
                      <strong>Date :</strong> {dateAffichee}
                    </p>
                  ) : null}

                  <p>
                    <strong>Lieu :</strong> {element.adresse}
                  </p>

                  <p>
                    <strong>Tarif :</strong>{' '}
                    {element.montant === 0
                      ? 'Gratuit'
                      : `${element.montant.toLocaleString('fr-DZ')} DZD`}
                  </p>

                  <Lien
                    href="#"
                    className="btn primary"
                    data-event-id={String(element.id)}
                    onClick={(evenementClick) => {
                      evenementClick.preventDefault();
                      setEvenement(element);
                    }}
                  >
                    Détails &amp; Inscription
                  </Lien>
                </article>
              );
            })}
          </section>

          <section>
            <h2>Archives</h2>
            <p>Consultez les rapports et vidéos des événements passés.</p>
          </section>
        </div>
      </main>

      <EvenementModal evenement={evenement} onClose={() => setEvenement(null)} />
      <ImageViewer image={visionneuse} onClose={() => setVisionneuse(null)} />
    </>
  );
}
