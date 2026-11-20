import { db } from '../db/db.js';

export interface Evenement {
  id: number;
  type: string;
  libelle: string;
  description: string;
  adresse: string;
  dateDebut: string | null;
  dateFin: string | null;
  dateLimite: string | null;
  lienWeb: string;
  montant: number;
  image: string;
}

export function obtenirListeEvenements(): Evenement[] {
  return db
    .prepare(
      `SELECT id, type_evenement AS type, libelle, description, adresse,
              date_debut AS dateDebut, date_fin AS dateFin, date_limite AS dateLimite,
              lien_web AS lienWeb, montant, image
       FROM evenements
       ORDER BY CASE WHEN date_debut IS NULL THEN 1 ELSE 0 END ASC, date_debut ASC`
    )
    .all() as unknown as Evenement[];
}
