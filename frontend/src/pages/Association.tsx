import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function Association() {
  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Organisation Régionale" />
      <main>
        <section className="hero-banner hero-bright" id="qui-sommes-nous">
          <img src="img/equipe4.png" alt="Vue collaborative des dentistes de la région" className="hero-image" />
          <div className="hero-overlay">
            <div className="container">
              <h1>Notre Organisation Régionale</h1>
            </div>
          </div>
        </section>
        <section className="welcome-block" style={{paddingBottom: 40}}>
          <div className="container welcome-content">
            <div className="presentation-text">
              <h2>Présentation et Attributions</h2>
              <p>La section ordinale régionale de Tizi-Ouzou englobe quatre wilayas : <strong>Béjaïa, Bouira, Tizi-Ouzou, Boumerdès</strong>. Son siège est situé à Tizi-Ouzou.</p>
              <p>Elle exerce dans les limites de sa région les attributions définies à l'article 171 du code de déontologie médicale. Elle veille à l'application des décisions du conseil régional, de la section ordinale nationale et du conseil national de déontologie médicale et enregistre l'inscription au tableau.</p>
              <p>La Section a un rôle essentiel de conciliation à l'occasion de litiges :</p>
              <ul>
                <li>Entre le malade et le médecin dentiste.</li>
                <li>Entre les médecins dentistes eux-mêmes.</li>
                <li>Et entre l'administration et le médecin dentiste.</li>
              </ul>
              <Lien href="/contact" className="btn primary mt-30">Soumettre une Demande de Conciliation →</Lien>
            </div>
            <div className="president-message">
              <h3>Documents Clés</h3>
              <p className="quote">Téléchargez les références officielles régissant notre profession.</p>
              <ul className="document-links" id="documents">
                <li><Lien href="docs/code-de-deontologie.pdf" target="_blank">Code de Déontologie Régional</Lien></li>
                <li><Lien href="docs/dossier-inscription.pdf" target="_blank">Règlement Intérieur de la Section</Lien></li>
                <li><Lien href="/doleance">Procédure de Litige &amp; Conciliation</Lien></li>
                <li><Lien href="docs/reglement-electoral.pdf" target="_blank">Procès-Verbal de la dernière A.G.</Lien></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="governance-section" id="governance" style={{paddingTop: 100, paddingBottom: 50, backgroundColor: 'var(--color-background-pale)'}}>
          <div className="container welcome-content" style={{display: 'block'}}>
            <h2 style={{textAlign: 'center'}}>Le Bureau Régional Exécutif</h2>
            <div className="governance-description text-center mb-5">
              <p>Le bureau de l'ordre régional est composé d'un président, d'un vice-président, d'un secrétaire général, d'un trésorier et de deux assesseurs. Le bureau du mandat actuel est composé comme suit :</p>
            </div>
            <div className="team-grid-container mt-30">
              <div className="team-grid">
                <div className="team-member">
                  <img src="img/president-default.png" alt="Président de la section" className="member-photo" />
                  <h4>Président</h4>
                  <p className="role">Bureau régional</p>
                </div>
                <div className="team-member">
                  <img src="img/president-default.png" alt="Vice-président de la section" className="member-photo" />
                  <h4>Vice-président</h4>
                  <p className="role">Bureau régional</p>
                </div>
                <div className="team-member">
                  <img src="img/president-default.png" alt="Secrétaire général" className="member-photo" />
                  <h4>Secrétaire général</h4>
                  <p className="role">Bureau régional</p>
                </div>
                <div className="team-member">
                  <img src="img/president-default.png" alt="Trésorier" className="member-photo" />
                  <h4>Trésorier</h4>
                  <p className="role">Bureau régional</p>
                </div>
                <div className="team-member">
                  <img src="img/president-default.png" alt="Assesseur" className="member-photo" />
                  <h4>Assesseur</h4>
                  <p className="role">Bureau régional</p>
                </div>
                <div className="team-member">
                  <img src="img/president-default.png" alt="Assesseur" className="member-photo" />
                  <h4>Assesseur</h4>
                  <p className="role">Bureau régional</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="commissions-section" style={{paddingTop: 50, paddingBottom: 50, backgroundColor: 'var(--color-background-pale)'}}>
          <div className="container welcome-content" style={{display: 'block'}}>
            <h2 className="text-center">Les Commissions Spécialisées</h2>
            <p className="governance-description text-center mb-5">
              La section ordinale régionale est composée de plusieurs commissions qui travaillent sur des axes stratégiques.
            </p>
            <div className="commission-list-grid mt-30">
              <div className="commission-card">
                <h4>Commission de déontologie</h4>
                <p>Veille au respect du code de déontologie et accompagne les praticiens dans leurs obligations professionnelles.</p>
              </div>
              <div className="commission-card">
                <h4>Commission de formation</h4>
                <p>Organise les formations continues, les ateliers et les rencontres scientifiques de la section régionale.</p>
              </div>
              <div className="commission-card">
                <h4>Commission des relations avec les patients</h4>
                <p>Traite les doléances et participe aux procédures de conciliation entre patients et praticiens.</p>
              </div>
              <div className="commission-card">
                <h4>Commission du numerus clausus</h4>
                <p>Étudie les questions liées à l'installation des cabinets et à la démographie des professionnels.</p>
              </div>
              <div className="commission-card">
                <h4>Commission de communication</h4>
                <p>Assure l'information des adhérents et la présence numérique de la section ordinale.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section" style={{backgroundColor: 'var(--color-background)'}}>
          <div className="container">
            <h2>La Section en Chiffres</h2>
            <p>Quelques indicateurs clés de notre activité et de la communauté dentaire dans les wilayas de notre région.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Wilayas Couvertes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Membres Élus de la Section</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Commissions thématiques</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1 200+</span>
                <span className="stat-label">Praticiens Inscrits au Tableau</span>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-blue" style={{background: 'linear-gradient(135deg, #004d99 0%, #0066cc 100%)', padding: '40px 0', textAlign: 'center', color: 'white'}}>
          <div className="container">
            <h2 style={{color: 'white', fontSize: '1.8em', marginBottom: 15, fontWeight: 700}}>Vous êtes Médecin-Dentiste dans la Région ?</h2>
            <p style={{color: 'white', fontSize: '1.1em', marginBottom: 25, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto'}}>Faites partie de notre communauté professionnelle et bénéficiez de tous nos services.</p>
            <Lien href="https://www.assoclic.com/sormdto/FR/page-inscription.php" style={{background: 'linear-gradient(135deg, #8B4789 0%, #6d2077 100%)', color: 'white', border: 'none', padding: '15px 35px', fontSize: '1.1em', fontWeight: 600, borderRadius: 50, boxShadow: '0 6px 15px rgba(139, 71, 137, 0.4)', transition: 'all 0.3s ease', display: 'inline-block', textDecoration: 'none'}}>
              <i className="fas fa-user-plus" /> Adhérer à l'Ordre
            </Lien>
          </div>
        </section>
      </main>
      
    </>
  );
}
