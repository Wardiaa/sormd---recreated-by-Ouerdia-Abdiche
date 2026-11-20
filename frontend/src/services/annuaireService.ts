import { praticiens, normaliser } from '../data/praticiens';
import { requete, type FiltresAnnuaire } from './api';
import type { Praticien } from '../types';

function construireParametres(filtres: FiltresAnnuaire): URLSearchParams {
  const parametres = new URLSearchParams();
  if (filtres.nom) parametres.set('nom', filtres.nom);
  if (filtres.wilaya) parametres.set('wilaya', filtres.wilaya);
  if (filtres.commune) parametres.set('commune', filtres.commune);
  if (filtres.specialite) parametres.set('specialite', filtres.specialite);
  return parametres;
}

function correspond(filtres: FiltresAnnuaire, praticien: Praticien): boolean {
  const nom = normaliser(filtres.nom?.trim() ?? '');
  const correspondNom = !nom || normaliser(`${praticien.nom} ${praticien.prenom}`).includes(nom);
  const correspondWilaya = !filtres.wilaya || String(praticien.wilayaCode) === filtres.wilaya;
  const correspondCommune = !filtres.commune || praticien.commune === filtres.commune;
  const correspondSpecialite = !filtres.specialite || praticien.specialite === filtres.specialite;

  return correspondNom && correspondWilaya && correspondCommune && correspondSpecialite;
}

export async function rechercherPraticiens(filtres: FiltresAnnuaire): Promise<Praticien[]> {
  const parametres = construireParametres(filtres);
  const suffixe = parametres.toString() ? `?${parametres.toString()}` : '';

  try {
    return await requete<Praticien[]>(`/annuaire${suffixe}`);
  } catch (erreur) {
    console.warn('API indisponible : recherche dans les données locales.', erreur);
    const liste = praticiens.filter((praticien) => correspond(filtres, praticien));
    return liste;
  }
}
