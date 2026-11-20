import { db, semerDonnees } from './db.js';

db.exec('DELETE FROM praticiens; DELETE FROM evenements; DELETE FROM actualites;');
semerDonnees();

const praticiens = db.prepare('SELECT COUNT(*) AS total FROM praticiens').get() as {
  total: number;
};
const evenements = db.prepare('SELECT COUNT(*) AS total FROM evenements').get() as {
  total: number;
};

console.log('Base de données réinitialisée.');
console.log(`- ${praticiens.total} praticiens`);
console.log(`- ${evenements.total} événements`);
