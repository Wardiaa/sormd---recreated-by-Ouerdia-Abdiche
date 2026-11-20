import type { Request, Response } from 'express';
import { emailValide, texteNettoye } from '../utils.js';
import { insererMessageContact } from '../services/contactService.js';

export function creerMessageContact(requete: Request, reponse: Response): void {
  const corps = requete.body ?? {};

  if (texteNettoye(corps.website, 200)) {
    reponse.status(200).json({ succes: true });
    return;
  }

  const nom = texteNettoye(corps.nom, 150);
  const email = texteNettoye(corps.email, 200);
  const sujet = texteNettoye(corps.sujet, 50) || 'general';
  const message = texteNettoye(corps.message, 5000);

  if (!nom || !email || !message) {
    reponse.status(400).json({ erreur: 'Le nom, l’e-mail et le message sont obligatoires.' });
    return;
  }

  if (!emailValide(email)) {
    reponse.status(400).json({ erreur: 'L’adresse e-mail est invalide.' });
    return;
  }

  const id = insererMessageContact({ nom, email, sujet, message });

  reponse.status(201).json({ succes: true, id });
}
