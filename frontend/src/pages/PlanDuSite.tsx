import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function PlanDuSite() {
  return (
    <>
      <PageMeta titre="Plan du Site - Ordre National des Chirurgiens-Dentistes" />
      <main className="page-content">
        <section className="hero-banner" style={{height: 250}}>
          <img src="img/mentions-legales-banniere.jpg" alt="Plan du site" className="hero-image" />
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Plan du Site</h1>
            </div>
          </div>
        </section>
        <section className="legal-notice" style={{padding: '60px 0'}}>
          <div className="container sitemap-content">
            <p className="lead text-center" style={{paddingBottom: 20}}>
              Ce plan vous permet de naviguer rapidement vers toutes les sections publiques
              et professionnelles du site de l'Ordre Régional des Médecins-Dentistes de Tizi-Ouzou.
            </p>
            <div className="sitemap-list mt-50">
              <div className="sitemap-category">
                <h3><i className="fas fa-user-tie mr-2" /> Espace Dentistes</h3>
                <ul>
                  <li><Lien href="/">Accueil</Lien></li>
                  <li><Lien href="/association">À propos de l'Ordre</Lien></li>
                  <li><Lien href="/demarches">Démarches</Lien></li>
                  <li><Lien href="/services">Services</Lien></li>
                  <li><Lien href="/documents">Documents</Lien></li>
                  <li><Lien href="/actualites">Actualités</Lien></li>
                  <li><Lien href="/evenements">Événements</Lien></li>
                  <li><Lien href="https://www.assoclic.com/sormdto/FR/page-inscription.php">Inscription à l'Ordre</Lien></li>
                  <li><Lien href="https://www.assoclic.com/sormdto/FR/page-connexion.php">Accès à mon espace</Lien></li>
                  <li><Lien href="/contact">Nous contacter</Lien></li>
                </ul>
              </div>
              <div className="sitemap-category">
                <h3><i className="fas fa-user-injured mr-2" /> Espace Patients</h3>
                <ul>
                  <li><Lien href="/actualites">Actualités</Lien></li>
                  <li><Lien href="/annuaire">Annuaire des dentistes</Lien></li>
                  <li><Lien href="/doleance">Déposer une doléance</Lien></li>
                  <li><Lien href="/patients-info">Informations et questions fréquentes</Lien></li>
                  <li><Lien href="/contact">Nous contacter</Lien></li>
                </ul>
              </div>
              <div className="sitemap-category">
                <h3><i className="fas fa-gavel mr-2" /> Autres Informations</h3>
                <ul>
                  <li><Lien href="/mentions-legales">Mentions légales</Lien></li>
                  <li><Lien href="/politique-confidentialite">Politique de confidentialité</Lien></li>
                  <li><Lien href="/plan-du-site">Plan du Site</Lien></li>
                  <li><Lien href="/telecharger-app">Application mobile</Lien></li>
                  <li><Lien href="https://www.assoclic.com/sormdto/FR/page-admin.php">Administration</Lien></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
