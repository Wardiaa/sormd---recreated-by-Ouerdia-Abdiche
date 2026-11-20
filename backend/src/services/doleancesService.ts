import { db } from '../db/db.js';

export function insererDoleance(donnees: {
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  document: string | null;
}): number {
  const resultat = db
    .prepare(
      `INSERT INTO doleances (nom, email, telephone, objet, message, document)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run(donnees.nom, donnees.email, donnees.telephone, donnees.objet, donnees.message, donnees.document);

  return Number(resultat.lastInsertRowid);
}
