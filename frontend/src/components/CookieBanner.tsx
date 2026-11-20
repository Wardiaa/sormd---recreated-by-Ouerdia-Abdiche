import { useState } from 'react';
import Lien from './Lien';
import { ecrireCookie, lireCookie } from './cookies';

const NOM_COOKIE = 'user_cookie_consent';
const DUREE_JOURS = 365;

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => lireCookie(NOM_COOKIE) === null);

  function enregistrer(choix: 'accepted' | 'declined') {
    ecrireCookie(NOM_COOKIE, choix, DUREE_JOURS);
    setVisible(false);
  }

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
