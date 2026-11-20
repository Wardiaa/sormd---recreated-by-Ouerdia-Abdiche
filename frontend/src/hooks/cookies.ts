export function lireCookie(nom: string): string | null {
  const prefixe = `${nom}=`;
  const morceaux = document.cookie.split(';');

  for (const morceau of morceaux) {
    const partie = morceau.trim();
    if (partie.indexOf(prefixe) === 0) {
      return partie.substring(prefixe.length);
    }
  }

  return null;
}

export function ecrireCookie(nom: string, valeur: string, jours: number): void {
  const date = new Date();
  date.setTime(date.getTime() + jours * 24 * 60 * 60 * 1000);
  document.cookie = `${nom}=${valeur}; expires=${date.toUTCString()}; path=/; samesite=Lax`;
}
