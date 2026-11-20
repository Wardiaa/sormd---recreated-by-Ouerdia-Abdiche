import { Router } from 'express';
import { creerDoleance } from '../controllers/doleancesController.js';

const routeur = Router();

routeur.post('/', creerDoleance);

export default routeur;
