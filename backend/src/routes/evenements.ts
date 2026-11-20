import { Router } from 'express';
import { listerEvenements } from '../controllers/evenementsController.js';

const routeur = Router();

routeur.get('/', listerEvenements);

export default routeur;
