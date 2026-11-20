import type { Request, Response } from 'express';
import { obtenirListeEvenements } from '../services/evenementsService.js';

export function listerEvenements(_requete: Request, reponse: Response): void {
  reponse.json(obtenirListeEvenements());
}
