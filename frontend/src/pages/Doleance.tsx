import FormulaireDoleance from '../components/FormulaireDoleance';
import PageMeta from '../components/PageMeta';

export default function Doleance() {
  return (
    <>
      <PageMeta titre="Déposer une Doléance - Association des Médecins-Dentistes" />

      <main className="page-content">
        <div className="container">
          <h1>Déposer une Doléance</h1>
          <p>
            Vous avez une réclamation concernant un médecin-dentiste ? Remplissez le formulaire
            ci-dessous.
          </p>

          <div className="contact-grid">
            <div className="contact-form-area">
              <FormulaireDoleance />
            </div>

            <div className="contact-info-area">
              <h2>Informations Importantes</h2>

              <div className="info-block">
                <h3>📋 À propos des Doléances</h3>
                <p>Les doléances sont traitées de manière confidentielle par nos membres.</p>
                <p>
                  <strong>Délai de traitement :</strong> 7 à 14 jours ouvrables
                </p>
              </div>

              <div className="info-block">
                <h3>✅ Ce qu'il faut inclure</h3>
                <p>• Description précise des faits</p>
                <p>• Tout document justificatif (si disponible)</p>
              </div>

              <div className="info-block">
                <h3>📞 Besoin d'aide ?</h3>
                <p>
                  Si vous avez besoin d'assistance pour remplir ce formulaire, contactez-nous :
                </p>
                <p>
                  <strong>Tél :</strong> 044925715
                </p>
                <p>
                  <strong>Email :</strong> <a href="mailto:sormdto@gmail.com">sormdto@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
