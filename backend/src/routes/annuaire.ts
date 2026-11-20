import { Router } from 'express';
import { obtenirListeAnnuaire } from '../controllers/annuaireController.js';

const routeur = Router();

routeur.get('/', obtenirListeAnnuaire);

export default routeur;
