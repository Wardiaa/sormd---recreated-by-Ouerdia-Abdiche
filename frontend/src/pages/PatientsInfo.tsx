import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function PatientsInfo() {
  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Espace Patients" />
      <main className="page-content">
        <section className="hero-banner">
          <img src="img/patients-banniere.jpg" alt="Photo de professionnels dentaires souriants et collaboratifs" className="hero-image" />
          <div className="hero-overlay">
            <div className="container">
              <h1>Espace Patients : Vos droits et démarches</h1>
              <p>Informations, conseils, et services pour vous accompagner dans votre parcours de soins dentaires.</p>
            </div>
          </div>
        </section>
        <section className="welcome-block">
          <div className="container service-cards">
            <div className="card patient-action-card rounded-corners">
              <div className="card-image-mission">
                <img src="img/doleances.jpg" alt="Icône Doléance" className="mission-image" />
              </div>
              <h3>Déposer une Doléance</h3>
              <p>Vous rencontrez un différend avec un dentiste ? Découvrez la procédure pour signaler votre situation à l'Ordre.</p>
              <Lien href="/doleance" className="btn btn-login btn-sm mt-30">Accéder au Formulaire</Lien>
            </div>
            <div className="card patient-action-card rounded-corners">
              <div className="card-image-mission">
                <img src="img/annuaire-dentaire.jpg" alt="Icône Annuaire" className="mission-image" />
              </div>
              <h3>Trouver un Professionnel</h3>
              <p>Recherchez un chirurgien-dentiste ou un spécialiste inscrit au tableau de l'Ordre et vérifiez ses qualifications.</p>
              <Lien href="/annuaire" className="btn btn-signup btn-sm mt-30">Consulter l'Annuaire</Lien>
            </div>
            <div className="card patient-action-card rounded-corners">
              <div className="card-image-mission">
                <img src="img/patient-droit.jpg" alt="Icône Droits" className="mission-image" />
              </div>
              <h3>Vos Droits et Devoirs</h3>
              <p>Renseignez-vous sur la charte du patient, le secret professionnel, et vos obligations légales envers votre praticien.</p>
              <Lien href="/documents" className="btn secondary btn-sm mt-30">Lire le Guide</Lien>
            </div>
          </div>
        </section>
        <section id="droits" className="about-us bg-light-gray">
          <div className="container about-content">
            <div className="text-block">
              <h2>Comprendre vos Droits et Démarches</h2>
              <p className="lead">L'Ordre est garant de la qualité des soins. Il est essentiel que vous soyez pleinement informé de vos droits en tant que patient, ainsi que des procédures éthiques et administratives qui encadrent la profession.</p>
              <h3 className="mt-30">Le Consentement éclairé</h3>
              <p>Vous avez le droit de recevoir une information claire et compréhensible sur votre état de santé, les actes proposés, les risques associés et les alternatives. Votre consentement est obligatoire avant toute intervention, sauf urgence vitale.</p>
              <h3 className="mt-30">L'Accès à votre dossier médical</h3>
              <p>Vous pouvez demander l'accès direct à votre dossier médical, incluant les radiographies, les notes et les résultats d'examens. Cette demande doit être adressée au praticien concerné.</p>
              <Lien href="/documents" className="btn primary mt-30">Télécharger la Charte du Patient</Lien>
            </div>
            <div className="image-block">
              <img src="img/ordre-droits.jpg" alt="Dialogue entre patient et dentiste" className="about-image" />
            </div>
          </div>
        </section>
        <section id="doleance-processus" className="news">
          <div className="container">
            <h2 className="text-center">Le rôle de l'Ordre en cas de litige</h2>
            <div className="about-content" style={{gap: 40, marginTop: 40}}>
              <div className="text-block">
                <p className="lead">L'Ordre des chirurgiens-dentistes n'est pas une juridiction civile, mais il a un rôle essentiel de conciliation et de médiation entre les patients et les praticiens.</p>
                <h3 className="mt-30">1. La Conciliation</h3>
                <p>Avant d'envisager une action formelle, l'Ordre propose une procédure de conciliation amiable. Un conciliateur vous écoutera, ainsi que le praticien, afin de trouver une solution mutuellement acceptable.</p>
                <h3 className="mt-30">2. L'Action Disciplinaire</h3>
                <p>Si la conciliation échoue et que la doléance porte sur un manquement au Code de Déontologie, le dossier peut être transmis à la chambre de discipline pour examiner la conduite du professionnel.</p>
                <div className="alert alert-info mt-40 rounded-corners" style={{border: '1px solid var(--color-secondary)', padding: 15, backgroundColor: 'var(--color-background-violet)'}}>
                  <p style={{margin: 0}}><strong>Attention :</strong> L'Ordre ne gère pas les litiges d'ordre financier (remboursements, coûts des soins). Ces questions relèvent des assurances ou des tribunaux civils.</p>
                </div>
              </div>
              <div className="image-block">
                <img src="img/dentiste-mediation.jpg" alt="Illustration de médiation" className="about-image" />
              </div>
            </div>
          </div>
        </section>
        <section id="questions" className="about-us">
          <div className="container">
            <h2 className="text-center mb-40">Conseils et Questions Fréquentes</h2>
            <div className="news-grid-2x2">
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Quels sont mes droits en tant que patient concernant mon dossier médical ?</h4>
                  <p>Vous avez le droit d'accéder à l'ensemble des informations de votre dossier médical dentaire (radiographies, comptes-rendus, notes) sur simple demande auprès de votre praticien. Le dentiste est tenu de vous les communiquer dans les délais légaux.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Comment puis-je signaler un problème déontologique avec mon dentiste ?</h4>
                  <p>Si vous rencontrez un différend d'ordre éthique ou déontologique, vous pouvez saisir le Conseil Départemental de l'Ordre des chirurgiens-dentistes. Une procédure de conciliation amiable est souvent proposée en première intention.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Quelles sont les limites de l'acte du chirurgien-dentiste ?</h4>
                  <p>Le chirurgien-dentiste est habilité à prévenir, diagnostiquer et traiter les maladies et anomalies de la bouche, des dents, des mâchoires et des tissus attenants. Il est le seul professionnel de santé habilité à exercer ces actes. Cependant, pour des actes très spécialisés, il peut orienter le patient vers un confrère plus expérimenté.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Quels sont les devoirs déontologiques de mon dentiste envers moi ?</h4>
                  <p>Votre dentiste est soumis au Code de Déontologie. Il a notamment l'obligation de vous soigner avec conscience et diligence, de respecter le secret professionnel, de vous informer clairement sur les traitements proposés et de n'utiliser que des procédés reconnus.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Comment préparer ma première consultation ?</h4>
                  <p>Préparez vos antécédents médicaux, une liste de vos médicaments et toutes les questions que vous souhaitez poser. Cela facilite la prise en charge.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Que faire si mon dentiste est absent ou en congé ?</h4>
                  <p>Le praticien est tenu d'assurer la continuité des soins. Renseignez-vous auprès de son secrétariat pour connaître le confrère désigné pour assurer son remplacement.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Quelles sont les règles de facturation et de devis ?</h4>
                  <p>Le dentiste doit vous fournir un devis écrit pour tout acte non remboursé ou dont le coût dépasse un certain seuil. Les honoraires doivent être fixés avec tact et mesure.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Où trouver les informations sur les spécialités dentaires ?</h4>
                  <p>Consultez l'annuaire de l'Ordre ou la section « Démarches » pour comprendre la différence entre les généralistes, les orthodontistes, les chirurgiens maxillo-faciaux, etc.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>Que faire en cas d'urgence dentaire (douleur, dent cassée) ?</h4>
                  <p>Contactez immédiatement votre dentiste. S'il n'est pas disponible, un service de garde est généralement organisé les week-ends et jours fériés. L'Ordre met à disposition un annuaire pour trouver un praticien de garde près de chez vous.</p>
                </div>
              </div>
              <div className="news-item-card rounded-corners">
                <div className="news-content-area">
                  <h4>À quelle fréquence dois-je consulter mon dentiste pour un contrôle ?</h4>
                  <p>Une visite de contrôle et un détartrage sont généralement recommandés une à deux fois par an. La fréquence exacte dépend de votre hygiène bucco-dentaire et de vos facteurs de risque individuels ; votre dentiste vous conseillera.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-40">
              <Lien href="/contact" className="btn primary">Besoin d'une réponse spécifique ? Contactez-nous.</Lien>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
