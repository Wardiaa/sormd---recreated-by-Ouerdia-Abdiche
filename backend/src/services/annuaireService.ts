import { db } from '../db/db.js';
import { normaliser } from '../utils.js';

export interface PraticienRow {
  civilite: string;
  nom: string;
  prenom: string;
  num: string;
  specialite: string;
  wilayaCode: number;
  wilaya: string;
  commune: string;
  adresse: string;
  tel: string;
  mode: string;
  cabinet: string;
}

export interface CritèresRechercheAnnuaire {
  nom?: string;
  wilaya?: string;
  commune?: string;
  specialite?: string;
}

export function rechercherPraticiens(
  critères: CritèresRechercheAnnuaire = {}
): PraticienRow[] {
  const nom = (critères.nom ?? '').trim();
  const wilaya = (critères.wilaya ?? '').trim();
  const commune = (critères.commune ?? '').trim();
  const specialite = (critères.specialite ?? '').trim();

  const praticiens = db
    .prepare(
      `SELECT civilite, nom, prenom, num_ordre AS num, specialite,
              wilaya_code AS wilayaCode, wilaya, commune, adresse,
              telephone AS tel, mode_exercice AS mode, cabinet
       FROM praticiens
       ORDER BY nom ASC, prenom ASC`
    )
    .all() as PraticienRow[];

  const termeNom = normaliser(nom);

  return praticiens.filter((praticien) => {
    const correspondNom =
      !termeNom || normaliser(`${praticien.nom} ${praticien.prenom}`).includes(termeNom);
    const correspondWilaya = !wilaya || String(praticien.wilayaCode) === wilaya;
    const correspondCommune = !commune || praticien.commune === commune;
    const correspondSpecialite =
      !specialite || normaliser(praticien.specialite) === normaliser(specialite);

    return correspondNom && correspondWilaya && correspondCommune && correspondSpecialite;
  });
}
