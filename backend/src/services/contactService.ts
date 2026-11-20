import { db } from '../db/db.js';

export function insererMessageContact(donnees: {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}): number {
  const resultat = db
    .prepare('INSERT INTO messages_contact (nom, email, sujet, message) VALUES (?, ?, ?, ?)')
    .run(donnees.nom, donnees.email, donnees.sujet, donnees.message);

  return Number(resultat.lastInsertRowid);
}
