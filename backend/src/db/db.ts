import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evenementsSeed, praticiensSeed } from './seed-data.js';

const repertoireCourant = path.dirname(fileURLToPath(import.meta.url));
const repertoireDonnees = path.resolve(repertoireCourant, '../../data');

fs.mkdirSync(repertoireDonnees, { recursive: true });

const cheminBase = path.join(repertoireDonnees, 'sormd.db');
export const db = new Database(cheminBase);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS messages_contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL,
    sujet TEXT NOT NULL DEFAULT 'general',
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS doleances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL,
    telephone TEXT NOT NULL,
    objet TEXT NOT NULL,
    message TEXT NOT NULL,
    document TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS praticiens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    civilite TEXT NOT NULL,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    num_ordre TEXT NOT NULL,
    specialite TEXT NOT NULL,
    wilaya_code INTEGER NOT NULL,
    wilaya TEXT NOT NULL,
    commune TEXT NOT NULL,
    adresse TEXT NOT NULL,
    telephone TEXT NOT NULL,
    mode_exercice TEXT NOT NULL,
    cabinet TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS evenements (
    id INTEGER PRIMARY KEY,
    type_evenement TEXT NOT NULL,
    libelle TEXT NOT NULL,
    description TEXT NOT NULL,
    adresse TEXT NOT NULL DEFAULT '',
    date_debut TEXT,
    date_fin TEXT,
    date_limite TEXT,
    lien_web TEXT NOT NULL DEFAULT '',
    montant INTEGER NOT NULL DEFAULT 0,
    image TEXT NOT NULL DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS actualites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    resume TEXT NOT NULL DEFAULT '',
    contenu TEXT NOT NULL DEFAULT '',
    source TEXT NOT NULL DEFAULT '',
    date_publication TEXT,
    lien TEXT NOT NULL DEFAULT ''
  );
`);

export function semerDonnees(): void {
  const nombrePraticiens = db.prepare('SELECT COUNT(*) AS total FROM praticiens').get() as {
    total: number;
  };

  if (nombrePraticiens.total === 0) {
    const insererPraticien = db.prepare(`
      INSERT INTO praticiens (
        civilite, nom, prenom, num_ordre, specialite, wilaya_code, wilaya,
        commune, adresse, telephone, mode_exercice, cabinet
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insererTous = db.transaction(() => {
      for (const praticien of praticiensSeed) {
        insererPraticien.run(
          praticien.civilite,
          praticien.nom,
          praticien.prenom,
          praticien.num,
          praticien.specialite,
          praticien.wilayaCode,
          praticien.wilaya,
          praticien.commune,
          praticien.adresse,
          praticien.tel,
          praticien.mode,
          praticien.cabinet
        );
      }
    });

    insererTous();
  }

  const insererEvenement = db.prepare(`
    INSERT OR IGNORE INTO evenements (
      id, type_evenement, libelle, description, adresse,
      date_debut, date_fin, date_limite, lien_web, montant, image
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const evenement of evenementsSeed) {
    insererEvenement.run(
      evenement.id,
      evenement.type,
      evenement.libelle,
      evenement.description,
      evenement.adresse,
      evenement.dateDebut,
      evenement.dateFin,
      evenement.dateLimite,
      evenement.lienWeb,
      evenement.montant,
      evenement.image
    );
  }
}

semerDonnees();
