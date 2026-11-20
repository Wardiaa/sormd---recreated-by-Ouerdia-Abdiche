import type { Request, Response } from 'express';
import { rechercherPraticiens } from '../services/annuaireService.js';

export function obtenirListeAnnuaire(requete: Request, reponse: Response): void {
  const nom = typeof requete.query.nom === 'string' ? requete.query.nom.trim() : '';
  const wilaya = typeof requete.query.wilaya === 'string' ? requete.query.wilaya.trim() : '';
  const commune = typeof requete.query.commune === 'string' ? requete.query.commune.trim() : '';
  const specialite = typeof requete.query.specialite === 'string' ? requete.query.specialite.trim() : '';

  const resultats = rechercherPraticiens({ nom, wilaya, commune, specialite });

  reponse.json(resultats);
}
