import { Router } from 'express';
import { listerActualites } from '../controllers/actualitesController.js';

const routeur = Router();

routeur.get('/', listerActualites);

export default routeur;
