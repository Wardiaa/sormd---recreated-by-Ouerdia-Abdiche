import useCookieConsent from '../hooks/useCookieConsent';
import Lien from './Lien';

export default function CookieBanner() {
  const { visible, enregistrer } = useCookieConsent();

  return (
    <div
      id="cookie-banner"
      className="cookie-banner cookie-gate"
      style={{ display: visible ? 'block' : 'none' }}
    >
      <div className="container cookie-content">
        <div className="cookie-text-block">
          <h3>Gestion des Cookies</h3>
          <p>
            🍪 Ce site utilise des cookies essentiels et de mesure d'audience. Pour continuer,
            indiquez vos préférences. Consultez notre{' '}
            <Lien href="/politique-confidentialite" className="cookie-link">
              Politique de Confidentialité
            </Lien>
            .
          </p>
        </div>
        <div className="cookie-actions">
          <button id="accept-cookies" className="btn primary" onClick={() => enregistrer('accepted')}>
            J'accepte
          </button>
          <button
            id="decline-cookies"
            className="btn secondary cookie-decline"
            onClick={() => enregistrer('declined')}
          >
            Je refuse
          </button>
        </div>
      </div>
    </div>
  );
}
