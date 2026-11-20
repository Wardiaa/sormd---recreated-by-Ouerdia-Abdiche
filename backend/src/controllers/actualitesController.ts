import type { Request, Response } from 'express';
import { obtenirListeActualites } from '../services/actualitesService.js';

export function listerActualites(_requete: Request, reponse: Response): void {
  reponse.json(obtenirListeActualites());
}
