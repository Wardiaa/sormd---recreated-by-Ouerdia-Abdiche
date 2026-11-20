import cors from 'cors';
import express, { type ErrorRequestHandler } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import './db/db.js';
import actualites from './routes/actualites.js';
import annuaire from './routes/annuaire.js';
import contact from './routes/contact.js';
import doleances from './routes/doleances.js';
import evenements from './routes/evenements.js';

const repertoireCourant = path.dirname(fileURLToPath(import.meta.url));
const application = express();

application.use(cors());
application.use(express.json({ limit: '1mb' }));
application.use(express.urlencoded({ extended: true }));

application.get('/api/health', (_requete, reponse) => {
  reponse.json({ statut: 'ok', date: new Date().toISOString() });
});

application.use('/api/annuaire', annuaire);
application.use('/api/evenements', evenements);
application.use('/api/actualites', actualites);
application.use('/api/contact', contact);
application.use('/api/doleances', doleances);

application.use('/api', (_requete, reponse) => {
  reponse.status(404).json({ erreur: 'Ressource API introuvable.' });
});

const dossierFrontend = path.resolve(repertoireCourant, '../../frontend/dist');
const indexFrontend = path.join(dossierFrontend, 'index.html');

if (fs.existsSync(indexFrontend)) {
  application.use(express.static(dossierFrontend));

  application.use((requete, reponse, suivant) => {
    if (requete.method !== 'GET') {
      suivant();
      return;
    }

    reponse.sendFile(indexFrontend);
  });
}

application.use((_requete, reponse) => {
  reponse.status(404).json({ erreur: 'Page introuvable.' });
});

const gestionErreur: ErrorRequestHandler = (erreur, _requete, reponse, _suivant) => {
  console.error(erreur);
  reponse.status(500).json({ erreur: 'Une erreur interne est survenue.' });
};

application.use(gestionErreur);

const port = Number(process.env.PORT || 3001);

application.listen(port, () => {
  console.log(`API SORMD disponible sur http://localhost:${port}`);
});
