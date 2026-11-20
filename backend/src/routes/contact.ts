import { Router } from 'express';
import { creerMessageContact } from '../controllers/contactController.js';

const routeur = Router();

routeur.post('/', creerMessageContact);

export default routeur;
