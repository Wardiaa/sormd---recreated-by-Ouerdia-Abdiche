import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function Demarches() {
  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Démarches Professionnelles" />
      <main className="page-content">
        <section className="hero-banner">
          <img src="img/demarcheimg.png" alt="Photo démarches" className="hero-image" />
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Vos Démarches Administratives</h1>
              <p>Accompagnement, réglementation et outils essentiels pour l'exercice de la médecine dentaire.</p>
            </div>
          </div>
        </section>
        <section className="welcome-block" style={{marginTop: 0, padding: '40px 0 60px'}}>
          <div className="container service-cards">
            <div className="card patient-action-card rounded-corners" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
              <div className="card-image-mission" style={{backgroundColor: '#e0f7fa'}}>
                <i className="fas fa-user-plus fa-3x text-primary" style={{padding: 20}} />
              </div>
              <h3>S'inscrire à l'Ordre</h3>
              <p>La première étape indispensable pour pouvoir exercer la profession en toute légalité.</p>
              <button type="button" className="btn btn-login btn-sm mt-30">
                Consulter le Dossier
              </button>
            </div>
            <div className="card patient-action-card rounded-corners" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
              <div className="card-image-mission" style={{backgroundColor: '#e8eaf6'}}>
                <i className="fas fa-file-invoice-dollar fa-3x text-secondary" style={{padding: 20}} />
              </div>
              <h3>Régulariser la Cotisation</h3>
              <p>Mettez à jour votre situation pour assurer la validité de votre inscription au tableau de l'Ordre.</p>
              <Lien href="#cotisation-debut" className="btn btn-signup btn-sm mt-30">Accéder aux Infos</Lien>
            </div>
            <div className="card patient-action-card rounded-corners" style={{boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
              <div className="card-image-mission" style={{backgroundColor: '#fce4ec'}}>
                <i className="fas fa-clinic-medical fa-3x text-warning" style={{padding: 20}} />
              </div>
              <h3>Demander la Conformité</h3>
              <p>Assurez-vous que votre cabinet dentaire respecte les critères d'accueil et de fonctionnalité requis.</p>
              <Lien href="#conformite" className="btn secondary btn-sm mt-30">Voir les Critères</Lien>
            </div>
          </div>
        </section>
        <section id="accompagnement" className="about-us bg-light-gray" style={{paddingTop: 80}}>
          <div className="container about-content">
            <div className="text-block">
              <h2>Accompagnement de l'Ordre</h2>
              <p className="lead">L'Ordre Régional est votre partenaire privilégié. Nous sommes là pour vous conseiller et vous accompagner dans toutes vos démarches professionnelles et administratives.</p>
              <h3 className="mt-30">Nos domaines d'assistance</h3>
              <ul>
                <li>Ouverture de cabinet dentaire individuel</li>
                <li>Ouverture d'un cabinet dentaire de groupe</li>
                <li>Demande de remplacement</li>
              </ul>
              <div className="alert alert-info mt-40 rounded-corners" style={{border: '1px solid var(--color-primary)', padding: 15, backgroundColor: '#e3f2fd'}}>
                <p style={{margin: 0}}><strong>Conseil :</strong> Veuillez contacter le délégué de votre wilaya pour une assistance personnalisée concernant votre inscription et la conformité de votre local d'exercice.</p>
              </div>
            </div>
            <div className="image-block">
              <img src="img/ordre-accompagnement.jpg" alt="Image conseil professionnel" className="about-image" />
            </div>
          </div>
        </section>
        <section id="inscription" className="about-us" style={{padding: '25px 0', marginBottom: 0}}>
          <div className="container search-form about-content">
            <div className="text-block">
              <h2>Inscription au Tableau de l'Ordre</h2>
              <p className="lead">C'est la condition première à remplir pour tout médecin dentiste diplômé d'une université algérienne pour pouvoir exercer la médecine dentaire en Algérie, comme l'exigent les articles 204 et 205 du code de déontologie médicale.</p>
              <p>L'inscription se fait sur la base de la présentation d'un dossier administratif complet. Une fois inscrit, vous recevrez votre numéro ordinal.</p>
              <h2 id="cotisation-debut" className="mb-40">La Cotisation Annuelle</h2>
              <p>La cotisation annuelle est une obligation que doit remplir chaque médecin dentiste inscrit à l'ordre conformément à l'article 180 du code de déontologie médicale.</p>
              <p><em>L'actualisation du tableau d'ordre est tributaire de la mise à jour de votre cotisation annuelle, sans quoi l'exercice de la profession demeure illégal.</em></p>
              <div className="mt-30">
                <Lien href="docs/dossier-inscription.pdf" target="_blank" className="btn primary">
                  <i className="fas fa-download" /> Dossier d'inscription
                </Lien>{' '}
                <button type="button" className="btn secondary">
                  <i className="fas fa-id-card-alt" /> Je m'inscris à l'ordre
                </button>
              </div>
            </div>
            <div className="image-block">
              <img src="img/ordre-inscription.jpg" alt="Inscription au tableau de l'Ordre" className="about-image" />
            </div>
          </div>
        </section>
        <section id="conformite" className="about-us" style={{padding: '25px 0', marginBottom: 0}}>
          <div className="container about-content">
            <div className="text-block">
              <h2>Demande d'Attestation de Conformité du Cabinet</h2>
              <p className="lead">Pour qu'un cabinet dentaire soit conforme, il doit répondre à des critères adéquats d'accueil et de fonctionnalité afin de garantir la sécurité et la qualité des soins prodigués.</p>
              <h3 className="mt-30">Critères Essentiels du Local</h3>
              <ul>
                <li><i className="fas fa-tag" style={{color: 'var(--color-secondary)', marginRight: 8}} /> Salles d'attente appropriées.</li>
                <li><i className="fas fa-tag" style={{color: 'var(--color-secondary)', marginRight: 8}} /> Un bureau pour le médecin.</li>
                <li><i className="fas fa-tag" style={{color: 'var(--color-secondary)', marginRight: 8}} /> Une salle de stérilisation dédiée.</li>
                <li><i className="fas fa-tag" style={{color: 'var(--color-secondary)', marginRight: 8}} /> Sanitaires conformes.</li>
                <li><i className="fas fa-tag" style={{color: 'var(--color-secondary)', marginRight: 8}} /> Un laboratoire de prothèse (le cas échéant).</li>
              </ul>
              <p style={{marginTop: 15}}>L'attestation est établie suite à l'inspection d'une commission de la section ordinale. La date d'inspection sera arrêtée d'un commun accord.</p>
              <Lien href="docs/dossier-conformite.pdf" target="_blank" className="btn primary mt-30">
                <i className="fas fa-file-download" /> Télécharger le dossier de conformité
              </Lien>
            </div>
            <div className="image-block">
              <img src="img/dentiste-cabinet-002.jpg" alt="Illustration d'un cabinet dentaire moderne" className="about-image" />
            </div>
          </div>
        </section>
        <section id="remplacement" className="about-us bg-light-gray" style={{padding: '25px 0', marginBottom: 0}}>
          <div className="container search-form about-content">
            <div className="text-block">
              <h2>Démarche de Remplacement d'un Confrère</h2>
              <p className="lead">Le remplacement d'un confrère obéit à des critères stricts définis dans l'article 74 du code de déontologie médicale, garantissant la continuité et la qualité des soins.</p>
              <h3 className="mt-30">Critères de Qualification</h3>
              <p>Le remplaçant doit avoir une qualification équivalente :</p>
              <ul>
                <li>Un généraliste ne peut être remplacé que par un généraliste.</li>
                <li>Un spécialiste ne peut être remplacé que par un spécialiste de la même discipline ou par un résident en dernière année.</li>
              </ul>
              <h3 className="mt-30">Types de Congés Concernés</h3>
              <div style={{marginTop: 10}}>
                <span className="badge-tag">Congé de Détente (-3 mois)</span>{' '}
                <span className="badge-tag">Congé de Maternité</span>{' '}
                <span className="badge-tag">Congé Médical</span>{' '}
                <span className="badge-tag">Congé Formation Continue</span>
              </div>
              <Lien href="docs/dossier-remplacement.pdf" target="_blank" className="btn primary mt-30">
                <i className="fas fa-file-download" /> Télécharger le document de remplacement
              </Lien>
            </div>
            <div className="image-block">
              <img src="img/images.jpeg" alt="Illustration de deux professionnels se relayant" className="about-image" />
            </div>
          </div>
        </section>
        <section id="formation" className="about-us" style={{padding: '25px 0', marginBottom: '-30px'}}>
          <div className="container about-content">
            <div className="text-block">
              <h2>Formation et Développement Professionnel Continu (DPC)</h2>
              <p className="lead">Tout médecin-dentiste est soumis à une double obligation de formation continue tout au long de sa vie professionnelle afin d'assurer le perfectionnement des connaissances nécessaires à l'exercice.</p>
              <h3 className="mt-30">L'Obligation Déontologique</h3>
              <p>Le praticien a le droit et le devoir d'entretenir et de perfectionner ses connaissances pour garantir une pratique éclairée.</p>
              <h3 className="mt-30">L'Obligation Légale</h3>
              <p>En rapport direct avec le droit des malades à des soins de qualité, la loi impose une mise à jour régulière des compétences.</p>
              <p>La formation continue est un maillon fort de l'exercice, nécessaire pour la maîtrise des systèmes et des compétences cliniques et techniques de plus en plus avancées.</p>
              <Lien href="/evenements" className="btn primary mt-30">
                <i className="fas fa-calendar-check" /> Voir les événements et ateliers
              </Lien>
            </div>
            <div className="image-block">
              <img src="img/dentiste-cabinet-002.jpg" alt="Image formation" className="about-image" />
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
