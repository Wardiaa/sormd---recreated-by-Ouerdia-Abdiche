import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function Services() {
  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Services aux Adhérents" />
      <main className="page-content">
        <section className="hero-banner">
          <img src="img/serviceimg.png" alt="Illustration de services professionnels" className="hero-image" />
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Services Exclusifs aux Adhérents</h1>
              <p>Accédez à des avantages et des outils pour faciliter votre quotidien professionnel et personnel.</p>
            </div>
          </div>
        </section>
        <section id="demande-visa" className="about-us bg-light-gray">
          <div className="container about-content">
            <div className="text-block">
              <h2><i className="fas fa-passport" /> Demande de Visa</h2>
              <p className="lead">
                Pour toute demande de visa, les pièces et justificatifs suivants doivent être fournis à l'administration compétente (consulat ou centre de collecte des demandes).
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" style={{color: 'var(--color-secondary)'}} />{' '}
                  Un passeport biométrique algérien, délivré depuis moins de 10 ans,
                  valable au minimum 6 mois après la date prévue de retour,
                  et comportant au moins 2 pages vierges.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{color: 'var(--color-secondary)'}} />{' '}
                  Le formulaire officiel de demande de visa du pays concerné (à remplir en ligne ou sur papier),
                  dûment complété, daté et signé, accompagné du récépissé de dépôt.
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{color: 'var(--color-secondary)'}} />{' '}
                  Trois (03) photos d'identité récentes, conformes aux normes internationales (35×45 mm, fond clair, visage dégagé).
                </li>
                <li>
                  <i className="fas fa-check-circle" style={{color: 'var(--color-secondary)'}} />{' '}
                  Un dossier complet comprenant tous les justificatifs exigés par le consulat du pays de destination
                  (ressources, hébergement, assurance, motifs du séjour, billets, etc.).
                </li>
              </ul>
              <Lien href="docs/demande-visa.pdf" target="_blank" className="btn primary mt-40">
                <i className="fas fa-download" /> Télécharger le document récapitulatif
              </Lien>
            </div>
            <div className="image-block">
              <img src="img/demandeVisa.png" alt="Illustration d'un passeport et d'un globe" className="about-image" />
            </div>
          </div>
        </section>
        <section id="assurances" className="about-us">
          <div className="container about-content">
            <div className="image-block">
              <img src="img/caatt.png" alt="Illustration d'assurances pour véhicule et cabinet" className="about-image" />
            </div>
            <div className="text-block">
              <h2><i className="fas fa-shield-alt" /> Assurances</h2>
              <p className="lead">
                Pour exercer et vivre en toute sérénité, notre assurance Tous Risques vous offre une protection complète pour vos véhicules, votre cabinet, vos équipements professionnels et vos biens personnels. Vous bénéficierez ainsi des garanties suivantes :
              </p>
              <ul>
                <li><i className="fas fa-car" style={{color: 'var(--color-accent-green)'}} /> Protection de vos véhicules : collision, choc, vandalisme, vol et incendie ;</li>
                <li><i className="fas fa-home" style={{color: 'var(--color-accent-green)'}} /> Assurance habitation et locaux professionnels contre dégâts des eaux, incendies et responsabilité civile ;</li>
                <li><i className="fas fa-briefcase-medical" style={{color: 'var(--color-accent-green)'}} /> Protection du cabinet, matériel et équipements professionnels contre tout sinistre ;</li>
                <li><i className="fas fa-cloud-showers-heavy" style={{color: 'var(--color-accent-green)'}} /> Dommages causés par événements climatiques et naturels :
                  <ul style={{marginTop: 8, paddingLeft: 20}}>
                    <li>Hautes eaux ;</li>
                    <li>Inondations ;</li>
                    <li>Éboulements et glissements de terrain ;</li>
                    <li>Chutes de pierres ;</li>
                    <li>Grêle et tempêtes.</li>
                  </ul>
                </li>
                <li><i className="fas fa-user-shield" style={{color: 'var(--color-accent-green)'}} /> Assistance 24h/24 et accompagnement personnalisé en cas de sinistre.</li>
              </ul>
              <Lien href="docs/convention-assurance-vehicule.pdf" target="_blank" className="btn primary mt-40">
                <i className="fas fa-file-contract" /> Télécharger le contrat d'assurance
              </Lien>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
