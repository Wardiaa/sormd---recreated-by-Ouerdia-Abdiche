export function normaliser(texte: string): string {
  return (texte || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function texteNettoye(valeur: unknown, longueurMax = 5000): string {
  return String(valeur ?? '')
    .trim()
    .slice(0, longueurMax);
}

export function emailValide(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
