import { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';

const LIEN_APK =
  'https://github.com/symphodev/assoclic/releases/latest/download/assoclic-app.apk';

type EtatTelechargement = 'initial' | 'en_cours' | 'termine';

export default function Application() {
  const [etat, setEtat] = useState<EtatTelechargement>('initial');
  const [qrOuvert, setQrOuvert] = useState(false);

  useEffect(() => {
    if (!qrOuvert) return;

    document.body.style.overflow = 'hidden';

    function gererTouche(evenement: KeyboardEvent) {
      if (evenement.key === 'Escape') setQrOuvert(false);
    }

    document.addEventListener('keydown', gererTouche);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', gererTouche);
    };
  }, [qrOuvert]);

  function telecharger() {
    window.location.href = LIEN_APK;
    setEtat('en_cours');
    window.setTimeout(() => setEtat('termine'), 4000);
  }

  const texteBouton =
    etat === 'en_cours'
      ? 'Téléchargement lancé'
      : etat === 'termine'
        ? 'Télécharger SORMD.apk'
        : "Télécharger l'application";

  return (
    <>
      <PageMeta titre="Télécharger l'Application - SORMD" />

      <main>
        <section className="app-download-page">
          <div className="container">
            <div className="page-header">
              <h1>
                <i className="fas fa-mobile-alt"></i> Application Mobile SORMD
              </h1>
            </div>

            <div className="steps-card">
              <div className="step">
                <div className="step-header">
                  <div className="step-number">1</div>
                  <div className="step-title">Télécharger l'application mobile (Android)</div>
                </div>

                <div className="step-content">
                  <p className="step-description">
                    Sur votre smartphone <b>cliquez sur le lien</b> pour télécharger
                    l'application, <br />
                    et suivez les instructions d'installation.
                  </p>
                  <button
                    className="download-button"
                    id="downloadBtn"
                    type="button"
                    onClick={telecharger}
                    style={
                      etat === 'en_cours'
                        ? { background: 'linear-gradient(135deg, #27ae60, #229954)' }
                        : undefined
                    }
                  >
                    <i className={`fas ${etat === 'en_cours' ? 'fa-check' : 'fa-download'}`}></i>
                    <span>{texteBouton}</span>
                  </button>
                  <div className="info-box">
                    <i className="fas fa-info-circle"></i>
                    <span>Le fichier sera dans « Téléchargements »</span>
                  </div>
                  <div className="info-box">
                    <i className="fas fa-info-circle"></i>
                    <span>
                      <strong>Important :</strong> Autorisez l'installation depuis des sources
                      inconnues
                    </span>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step-header">
                  <div className="step-number">2</div>
                  <div className="step-title">Connecter l'application à la SORMD de Tizi-Ouzou</div>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    <b>Lancez</b> l'application sur votre smartphone et <b>scannez le QR Code</b>{' '}
                    <br />
                    ci-dessous pour lier votre compte inscrit.
                  </p>
                  <div className="qr-code-container">
                    <img
                      src="img/assoclic-api-qrcode.png"
                      alt="QR Code SORMD"
                      id="qrCodeImage3"
                      data-qr
                      onClick={() => setQrOuvert(true)}
                    />
                    <div className="qr-fallback">
                      <i className="fas fa-qrcode"></i>
                      <p>QR Code indisponible</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fas fa-info-circle"></i>
                    <span>
                      <strong>Important :</strong> Cette étape est essentielle pour accéder à la
                      plateforme depuis votre application.
                    </span>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step-header">
                  <div className="step-number">3</div>
                  <div className="step-title">Accéder à votre compte inscrit</div>
                </div>
                <div className="step-content">
                  <p className="step-description">
                    <b>Utilisez vos identifiants</b> pour accéder à votre <br />
                    espace personnel.
                  </p>
                  <div className="auth-image-container">
                    <img src="img/auth.png" alt="Écran de connexion SORMD" />
                  </div>
                  <div className="info-box">
                    <i className="fas fa-info-circle"></i>
                    <span>
                      <strong>Important :</strong> Pour mettre à jour votre mot de passe, cliquez
                      sur le lien « Mot de passe oublié ? » pour enregistrer un nouveau.
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '50px',
                  paddingTop: '30px',
                  borderTop: '2px solid #e9ecef'
                }}
              >
                <h2
                  style={{
                    textAlign: 'center',
                    color: '#6b1b6b',
                    marginBottom: '30px'
                  }}
                >
                  <i className="fas fa-star"></i> Fonctionnalités
                </h2>
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="feature-text">Espace personnel sécurisé</div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="feature-text">Envoi de vos demandes en ligne</div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="feature-text">Consultez les actualités et les événements</div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-bell"></i>
                    </div>
                    <div className="feature-text">Recevoir des notifications en temps réel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div
        id="qrModal"
        className={`qr-modal${qrOuvert ? ' active' : ''}`}
        onClick={() => setQrOuvert(false)}
      >
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              top: '-50px',
              right: 0,
              color: 'white',
              fontSize: '30px',
              cursor: 'pointer'
            }}
          >
            &times;
          </span>
          <img
            src="img/assoclic-api-qrcode.png"
            alt="QR Code SORMD agrandi"
            style={{
              maxWidth: '90%',
              borderRadius: '15px',
              boxShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          />
          <p style={{ color: 'white', marginTop: '15px' }}>
            <i className="fas fa-camera"></i> Scannez le code
          </p>
        </div>
      </div>
    </>
  );
}
