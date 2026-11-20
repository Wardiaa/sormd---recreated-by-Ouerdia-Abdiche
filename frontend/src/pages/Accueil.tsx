import { useState } from 'react';
import EvenementModal from '../components/EvenementModal';
import HeroBanner from '../components/HeroBanner';
import Lien from '../components/Lien';
import PageMeta from '../components/PageMeta';
import PresidentModal from '../components/PresidentModal';
import { evenementsAccueil } from '../data/evenements';
import type { Evenement } from '../types';

export default function Accueil() {
  const [evenement, setEvenement] = useState<Evenement | null>(null);
  const [presidentOuvert, setPresidentOuvert] = useState(false);

  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Accueil" />

      <main>
        <HeroBanner
          image="img/accueil-banniere.jpg"
          alt="Photo de professionnels dentaires souriants et collaboratifs"
          titre="Excellence et Éthique au Service de la Santé Dentaire"
          sousTitre="Regroupement des professionnels pour l'avancement de la médecine dentaire en Algérie."
        >
          <div className="cta-group">
            <Lien href="/annuaire" className="btn primary">
              Trouver un Dentiste
            </Lien>
            <button
              type="button"
              className="btn primary"
              style={{ backgroundColor: '#c595cb', borderColor: '#c595cb' }}
            >
              Adhésion &amp; Accès
            </button>
          </div>
        </HeroBanner>

        <section className="welcome-block">
          <div className="container welcome-content">
            <div className="presentation-text">
              <h3>L'Ordre des Médecins Dentistes : Rigueur, Éthique et Défense</h3>
              <p>
                L'Ordre des Médecins Dentistes (OMD), créé par décret exécutif 92/276 du 06 juillet
                1992, est l'organisme professionnel de référence pour la régulation de la médecine
                dentaire. Notre rôle principal est de veiller au strict respect du code de
                déontologie pour garantir l'intégrité de la profession et la sécurité des
                patients...
              </p>

              <h4>Organisation Représentative Nationale</h4>
              <ul>
                <li>
                  L'Assemblée Générale (AG) regroupe les membres des 12 sections ordinales
                  régionales.
                </li>
                <li>
                  La Section Ordinale Nationale siège à Alger et est composée de 36 médecins
                  dentistes élus.
                </li>
                <li>
                  Les 12 Sections Ordinales Régionales assurent une représentation de proximité.
                </li>
              </ul>
              <p>
                Nous sommes votre partenaire pour l'excellence et la voix consultative auprès des
                pouvoirs publics.
              </p>

              <Lien href="/association" className="btn primary" style={{ marginTop: '25px' }}>
                Nos missions →
              </Lien>
            </div>

            <div className="president-message">
              <img
                src="img/president.png"
                alt="Photographie du Président de l'Association"
                className="president-photo"
              />
              <div>
                <h3 className="president-message">Mot du président</h3>
                <p className="quote">
                  Une nouvelle mandature 2023-2025 s'ouvre avec un nouveau bureau de la section
                  ordinale régionale des médecins dentistes de Tizi-Ouzou. Une nouvelle équipe qui
                  a accepté d'investir bénévolement son temps et son dévouement au service de la
                  profession. <br />
                  <br />
                  Notre démarche s'articule autour de 3 axes : Assurer une communication fluide
                  entre l'ensemble d...
                </p>
                <Lien
                  href="#"
                  className="btn more-news"
                  style={{ backgroundColor: '#c595cb' }}
                  onClick={(evenementClick) => {
                    evenementClick.preventDefault();
                    setPresidentOuvert(true);
                  }}
                >
                  Lire le message
                </Lien>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h2>Nos Missions Essentielles</h2>
            <div className="service-cards">
              <div className="card">
                <div className="card-image-mission">
                  <img
                    src="img/icone-formation.jpg"
                    alt="Image de formation continue"
                    className="mission-image"
                    style={{ width: '270px' }}
                  />
                </div>
                <h3>Formations</h3>
                <p>Découvrez les formations accréditées et événements annuels.</p>
                <Lien href="/evenements">Voir la liste →</Lien>
              </div>

              <div className="card">
                <div className="card-image-mission">
                  <img
                    src="img/icone-ethique.jpg"
                    alt="Image d'éthique et de déontologie"
                    className="mission-image"
                    style={{ width: '270px' }}
                  />
                </div>
                <h3>Éthique</h3>
                <p>Consultez les textes de référence et recommandations.</p>
                <Lien href="/documents">Voir les documents →</Lien>
              </div>

              <div className="card">
                <div className="card-image-mission">
                  <img
                    src="img/icone-annuaire.jpg"
                    alt="Image de recherche dans un annuaire"
                    className="mission-image"
                  />
                </div>
                <h3>Annuaire Officiel</h3>
                <p>Recherchez les praticiens qualifiés et certifiés.</p>
                <Lien href="/annuaire">Trouver un dentiste →</Lien>
              </div>
            </div>
          </div>
        </section>

        <section
          className="cta-blue"
          style={{
            background: 'linear-gradient(135deg, #004d99 0%, #0066cc 100%)',
            padding: '40px 0',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <div className="container">
            <h2
              style={{
                color: 'white',
                fontSize: '1.8em',
                marginBottom: '15px',
                fontWeight: 700
              }}
            >
              Emportez votre Ordre avec vous !
            </h2>
            <p
              style={{
                color: 'white',
                fontSize: '1.1em',
                marginBottom: '25px',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Téléchargez l'application <strong>SORMD</strong> pour gérer vos démarches depuis
              votre smartphone.
            </p>
            <Lien
              href="/telecharger-app"
              style={{
                background: 'linear-gradient(135deg, #8B4789 0%, #6d2077 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 35px',
                fontSize: '1.1em',
                fontWeight: 600,
                borderRadius: '50px',
                boxShadow: '0 6px 15px rgba(139, 71, 137, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              <i className="fas fa-mobile-alt"></i> Télécharger l'Application mobile
            </Lien>
          </div>
        </section>

        <section className="news">
          <div className="container">
            <h2>Événements &amp; Formations</h2>

            <div className="news-grid-2x2">
              <article className="news-item-card">
                <div className="news-image-area">
                  <img
                    src="img/evenement-31.png"
                    alt="Élection des membres de la Section Ordinale Régionale"
                    className="news-image"
                  />
                </div>
                <div className="news-content-area">
                  <h4>FORMATION</h4>
                  <h3>Élection des membres de la Section Ordinale Régionale</h3>
                  <p>
                    <span className="news-source"></span>
                  </p>
                  <p>
                    <strong>Du :</strong> 27/11/2025 au 27/11/2025
                  </p>
                  <p style={{ paddingBottom: '25px' }}>
                    <strong>Tarif :</strong> Gratuit
                  </p>
                  <Lien
                    href="#"
                    className="btn primary btn-sm"
                    onClick={(evenementClick) => {
                      evenementClick.preventDefault();
                      setEvenement(evenementsAccueil[0]);
                    }}
                  >
                    Voir détail →
                  </Lien>
                </div>
              </article>

              <article className="news-item-card">
                <div className="news-image-area">
                  <img
                    src="img/evenement-30.jpg"
                    alt="Implantologie : All On Four et Implants zygomatiques"
                    className="news-image"
                  />
                </div>
                <div className="news-content-area">
                  <h4>FORMATION</h4>
                  <h3>Implantologie : All On Four et Implants zygomatiques</h3>
                  <p>
                    <span className="news-source">
                      Hôtel Relais Vert, Oued Aissi, Tizi-Ouzou.
                    </span>
                  </p>
                  <p style={{ paddingBottom: '25px' }}>
                    <strong>Tarif :</strong> Gratuit
                  </p>
                  <Lien
                    href="#"
                    className="btn primary btn-sm"
                    onClick={(evenementClick) => {
                      evenementClick.preventDefault();
                      setEvenement(evenementsAccueil[1]);
                    }}
                  >
                    Voir détail →
                  </Lien>
                </div>
              </article>
            </div>

            <Lien href="/evenements" className="btn secondary more-news">
              Tous les Événements
            </Lien>
          </div>
        </section>

        <section className="actualites">
          <div className="container">
            <h2>Actualités &amp; Infos Pro</h2>

            <div className="news-grid-2x3">
              <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Aucune actualité disponible pour le moment.
              </p>
            </div>

            <Lien href="/actualites" className="btn secondary more-news">
              Toutes les Actualités
            </Lien>
          </div>
        </section>

        <section className="about-us">
          <div className="container">
            <div className="about-content">
              <div className="text-block">
                <h2>Notre Engagement : Qualité et Confiance</h2>
                <p>
                  Notre association représente la voix des médecins-dentistes et garantit
                  l'application des plus hauts standards de soins. Nous travaillons pour la
                  formation continue de nos membres et pour informer le public sur la santé
                  bucco-dentaire.
                </p>
                <p>
                  Rejoindre la SORMD, c'est s'engager pour l'excellence et bénéficier d'un réseau
                  de soutien unique.
                </p>
                <Lien href="/association" className="btn primary">
                  En Savoir Plus
                </Lien>
              </div>
              <div className="image-block">
                <img
                  src="img/collaboration-dentistes.jpg"
                  alt="Image de dentistes collaborant dans un bureau"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="grand-public" className="public-health">
          <div className="container">
            <h2>Espaces Patients</h2>
            <p>Accédez à nos fiches d'information rédigées par des experts.</p>
            <div className="public-cards">
              <Lien href="/patients-info#questions" className="card-public-link">
                <div className="card-public">
                  <img
                    src="img/icon.png"
                    alt="Icône de croix rouge pour urgence"
                    className="card-icon-public"
                  />
                  <h4>Nos conseils</h4>
                  <p>Conseils et réponses à vos questions.</p>
                  <span className="card-arrow">→</span>
                </div>
              </Lien>

              <Lien href="/doleance" className="card-public-link">
                <div className="card-public">
                  <img
                    src="img/icon2.png"
                    alt="Icône de gencive et maladie dentaire"
                    className="card-icon-public"
                  />
                  <h4>Déposer une doléance</h4>
                  <p>Réclamation ? Déposez votre doléance en ligne.</p>
                  <span className="card-arrow">→</span>
                </div>
              </Lien>

              <Lien href="/contact" className="card-public-link">
                <div className="card-public">
                  <img
                    src="img/icon3.png"
                    alt="Icône de brosse à dents et dent"
                    className="card-icon-public"
                  />
                  <h4>Contacter l'Ordre</h4>
                  <p>Toutes les infos pour nous joindre facilement.</p>
                  <span className="card-arrow">→</span>
                </div>
              </Lien>
            </div>
          </div>
        </section>
      </main>

      <EvenementModal evenement={evenement} onClose={() => setEvenement(null)} />
      <PresidentModal ouvert={presidentOuvert} onClose={() => setPresidentOuvert(false)} />
    </>
  );
}
