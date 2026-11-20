import FormulaireContact from '../components/FormulaireContact';
import HeroBanner from '../components/HeroBanner';
import PageMeta from '../components/PageMeta';

export default function Contact() {
  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Contact" />

      <main className="page-content">
        <HeroBanner
          image="img/contactimg.png"
          alt="Photo de professionnels dentaires souriants et collaboratifs"
          titre="Nous contacter"
          containerClassName="text-center"
        />

        <div className="container" style={{ paddingTop: '25px' }}>
          <p>
            Pour toutes vos questions relatives à notre association ou aux procédures d'adhésion.
          </p>

          <div className="contact-grid">
            <div className="contact-form-area">
              <FormulaireContact />
            </div>

            <div className="contact-info-area">
              <h2>Nos Coordonnées</h2>
              <div className="contact-form">
                <div className="info-block">
                  <h3>
                    📍 Siège de la Section Ordinale Régionale des Médecins-Dentistes de Tizi-Ouzou
                  </h3>
                  <p>
                    50 rue Kerrad Rachid, immeuble Bel Air, Bureau numéro 1, 2eme étage, Tour villa
                  </p>
                  <p>15000 BOUDJELLIL, BOUMERDES</p>
                </div>

                <div className="info-block">
                  <p>
                    <strong>Fixe :</strong> 044925715
                  </p>
                  <p>
                    <strong>Mobile :</strong> 0552 24 93 74
                  </p>
                </div>

                <div className="info-block">
                  <p>
                    <strong>Email :</strong> <a href="mailto:sormdto@gmail.com">sormdto@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div style={{ width: '100%', height: '48vh', margin: 0, padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.248205397907!2d4.039907675544692!3d36.71659977240821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc79a9c29c113%3A0x2dbca812b02d0c00!2sSection%20Ordinale%20R%C3%A9gionale%20des%20M%C3%A9decins%20Dentistes%20de%20Tizi%20Ouzou!5e0!3m2!1sfr!2sdz!4v1763658158259!5m2!1sfr!2sdz"
          style={{ width: '100%', height: '100%', border: 0, display: 'block', margin: 0, padding: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation du siège de la section ordinale"
        ></iframe>
      </div>
    </>
  );
}
