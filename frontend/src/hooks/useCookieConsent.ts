import { useState } from 'react';
import { ecrireCookie, lireCookie } from './cookies';

export const NOM_COOKIE_CONSENT = 'user_cookie_consent';
export const DUREE_COOKIE_JOURS = 365;

export default function useCookieConsent() {
  const [visible, setVisible] = useState(() => lireCookie(NOM_COOKIE_CONSENT) === null);

  function enregistrer(choix: 'accepted' | 'declined') {
    ecrireCookie(NOM_COOKIE_CONSENT, choix, DUREE_COOKIE_JOURS);
    setVisible(false);
  }

  return { visible, enregistrer };
}
