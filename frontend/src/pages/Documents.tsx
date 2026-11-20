import HeroBanner from '../components/HeroBanner';
import Lien from '../components/Lien';
import PageMeta from '../components/PageMeta';

const documents = [
  {
    titre: "Dossier d'inscription",
    description: "Dossier d'inscription à l'Ordre",
    fichier: 'docs/dossier-inscription.pdf'
  },
  {
    titre: 'Dossier demande de conformité',
    description: 'Dossier de demande de conformité du cabinet',
    fichier: 'docs/dossier-conformite.pdf'
  },
  {
    titre: 'Dossier demande de remplacement',
    description: "Dossier de demande de remplacement d'un confrère",
    fichier: 'docs/dossier-remplacement.pdf'
  },
  {
    titre: 'Dossier de cabinet de groupe',
    description: "Dossier de constitution d'un cabinet de groupe",
    fichier: 'docs/dossier-cabinet-groupe.pdf'
  },
  {
    titre: "Contrat type A d'un cabinet de groupe",
    description: 'Modèle de contrat type A',
    fichier: 'docs/contrat-cabinet-groupe-a.pdf'
  },
  {
    titre: "Contrat type B d'un cabinet de groupe",
    description: 'Modèle de contrat type B',
    fichier: 'docs/contrat-cabinet-groupe-b.pdf'
  },
  {
    titre: 'Dossier de carte professionnelle',
    description: 'Dossier de demande de carte professionnelle',
    fichier: 'docs/dossier-carte-professionnelle.pdf'
  },
  {
    titre: "Convention d'assurance véhicule CAAT-SORMD TO",
    description: "Convention d'assurance véhicule",
    fichier: 'docs/convention-assurance-vehicule.pdf'
  },
  {
    titre: 'Code de déontologie',
    description: 'Texte officiel du code de déontologie',
    fichier: 'docs/code-de-deontologie.pdf'
  },
  {
    titre: 'Le règlement électoral',
    description: 'Règlement des élections ordinales',
    fichier: 'docs/reglement-electoral.pdf'
  }
];

export default function Documents() {
  return (
    <>
      <PageMeta titre="Documents - Association des Médecins-Dentistes" />

      <main>
        <HeroBanner
          image="img/documentimg.png"
          alt="Documents à télécharger"
          titre="Documents à télécharger"
          containerStyle={{ marginTop: '25px' }}
        />

        <section className="news-home">
          <div className="container">
            <div className="news-grid-2x3">
              {documents.map((document) => (
                <article className="news-item-card" key={document.fichier}>
                  <div className="doc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z" />
                    </svg>
                  </div>
                  <div className="news-content-area">
                    <h4>{document.titre}</h4>
                    <p>{document.description}</p>
                    <Lien href={document.fichier} target="_blank" className="btn primary btn-sm">
                      📥 Télécharger PDF
                    </Lien>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
