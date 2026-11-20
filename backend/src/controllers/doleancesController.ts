import type { Request, Response } from 'express';
import { emailValide, texteNettoye } from '../utils.js';
import { insererDoleance } from '../services/doleancesService.js';

export function creerDoleance(requete: Request, reponse: Response): void {
  const corps = requete.body ?? {};

  if (texteNettoye(corps.website, 200)) {
    reponse.status(200).json({ succes: true });
    return;
  }

  const nom = texteNettoye(corps.nom, 150);
  const email = texteNettoye(corps.email, 200);
  const telephone = texteNettoye(corps.telephone, 50);
  const objet = texteNettoye(corps.objet, 250);
  const message = texteNettoye(corps.message, 5000);
  const document = texteNettoye(corps.document, 300) || null;

  if (!nom || !email || !telephone || !objet || !message) {
    reponse.status(400).json({
      erreur: 'Le nom, l’e-mail, le téléphone, l’objet et la description sont obligatoires.'
    });
    return;
  }

  if (!emailValide(email)) {
    reponse.status(400).json({ erreur: 'L’adresse e-mail est invalide.' });
    return;
  }

  const id = insererDoleance({ nom, email, telephone, objet, message, document });

  reponse.status(201).json({ succes: true, id });
}
