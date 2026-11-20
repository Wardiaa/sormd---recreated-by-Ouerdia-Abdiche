import { db } from '../db/db.js';

export interface Actualite {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  source: string;
  datePublication: string | null;
  lien: string;
}

export function obtenirListeActualites(): Actualite[] {
  return db
    .prepare(
      `SELECT id, titre, resume, contenu, source,
              date_publication AS datePublication, lien
       FROM actualites
       ORDER BY date_publication DESC, id DESC`
    )
    .all() as Actualite[];
}
