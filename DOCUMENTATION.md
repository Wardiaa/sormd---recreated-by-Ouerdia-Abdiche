# Documentation du projet

## Présentation

Ce projet reproduit l'interface du site de la **Section Ordinale Régionale des Médecins-Dentistes de Tizi-Ouzou (SORMD)**.

Le front-end est développé avec **React, TypeScript et Vite**. Le back-end repose sur **Node.js, Express et SQLite**.

## Choix techniques

### Pourquoi ce stack ?

le stack retenu est le suivant :

- **Front-end** : React, TypeScript et Vite — pour une interface riche et réactive, fidèle visuellement au site d'origine.
- **Back-end** : Node.js, Express et SQLite — pour offrir les fonctionnalités dynamiques (annuaire, événements, actualités, formulaires) avec un back-end léger et auto-hébergé.

Ce choix permet de recréer l'interface, tout en conservant un back-end simple et un repli sur les données locales.

## Prérequis

- **Node.js 20 ou supérieur** (testé avec Node.js 22) et **npm**.
- Une connexion Internet pour la police d'icônes Font Awesome et la carte Google Maps de la page Contact.

## Installation

Ouvrir un terminal dans le dossier du projet, puis exécuter :

```bash
npm install
```

La commande installe les dépendances du front-end et du back-end (workspaces npm).

## Lancement en développement

```bash
npm run dev
```

Cette commande démarre simultanément :

- le front-end Vite sur **http://localhost:5173** ;
- l'API Express sur **http://localhost:3001**.

Les requêtes vers `/api` sont automatiquement redirigées vers le serveur Express.

Sous Windows, il est également possible de double-cliquer sur **`lancer-site.bat`** : le script installe les dépendances si nécessaire, démarre les deux serveurs et ouvre le site dans le navigateur.

## Version de production

```bash
npm run build
npm start
```

Le build compile le front-end dans `frontend/dist` et le back-end dans `backend/dist`. Le serveur Express sert alors le site complet et l'API sur **http://localhost:3001**.

Le port peut être modifié avec la variable d'environnement `PORT` :

```bash
set PORT=8080
npm start
```

## Arborescence

```text
sormd-tizi-ouzou/
├── frontend/
│   ├── public/
│   │   ├── img/                     Images du site
│   │   ├── docs/                    Documents PDF
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/              En-tête, pied de page, modales, formulaires
│   │   ├── data/                    Données locales de secours
│   │   ├── pages/                   Une page par rubrique du site
│   │   ├── services/                Client de l'API
│   │   ├── styles/styles.css        Feuille de styles principale
│   │   ├── App.tsx                  Routes de l'application
│   │   └── main.tsx                 Point d'entrée React
│   ├── index.html
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── controllers/            Mécanismes de traitement des requêtes
│   │   ├── db/                      Base SQLite, schéma et données initiales
│   │   ├── routes/                  Définition des routes de l'API
│   │   ├── services/                Accès aux données et logique métier
│   │   ├── server.ts                Serveur Express
│   │   └── utils.ts
│   └── data/sormd.db                Base créée automatiquement
├── lancer-site.bat
├── package.json
└── DOCUMENTATION.md
```

## Fonctionnalités

- **Navigation responsive** : menu fixe, sous-menus déroulants, menu hamburger sur mobile et tablette.
- **Pages institutionnelles** : présentation, missions, bureau régional, commissions, démarches et services.
- **Documents** : documents PDF consultables et téléchargeables.
- **Annuaire** : recherche par nom, wilaya, commune et spécialité, avec fiches détaillées. Les données proviennent de l'API, avec un jeu local de secours.
- **Événements** : fiches de détail en modale et agrandissement des affiches avec zoom et déplacement.
- **Formulaires** : contact et doléance avec validation native du navigateur, enregistrés dans la base SQLite.
- **Bandeau cookies** : information et choix de l'utilisateur, mémorisé dans le navigateur.
- **Application mobile** : bouton de téléchargement de l'APK et QR Code agrandissable.
- **Accessibilité** : structure sémantique, libellés de formulaires, attributs `alt` et navigation au clavier.

## Architecture

### Front-end

Le front-end suit une séparation claire des responsabilités :

- `components/` : composants réutilisables (en-tête, pied de page, modales, formulaires, visualiseur d'image).
- `pages/` : une page par rubrique du site, uniquement composants et données.
- `services/` : communication avec l'API et logique de recherche.
- `data/` : données locales de secours.
- `styles/` : feuille de styles.

### Back-end

L'API Express suit le modèle **routes → contrôleurs → services** :

- `routes/` : définition des chemins et des méthodes HTTP, sans logique métier.
- `controllers/` : réception de la requête, validation et orchestraction des réponses.
- `services/` : accès aux données (requêtes SQL) et logique métier.
- `db/` : création du schéma et données initiales.
- `server.ts` : montage des routes, API et diffusion du site compilé.

## API

| Méthode | Route              | Description                                   |
| ------- | ------------------ | --------------------------------------------- |
| GET     | `/api/health`      | Vérification de l'état du serveur             |
| GET     | `/api/annuaire`    | Liste des praticiens, filtres par paramètres  |
| GET     | `/api/evenements`  | Liste des événements                          |
| GET     | `/api/actualites`  | Liste des actualités                          |
| POST    | `/api/contact`     | Enregistrement d'un message de contact        |
| POST    | `/api/doleances`   | Enregistrement d'une doléance                 |

Filtres disponibles pour l'annuaire : `nom`, `wilaya`, `commune`, `specialite`.

## Base de données

La base SQLite est créée automatiquement dans `backend/data/sormd.db` au premier démarrage du serveur. Elle est initialisée avec les praticiens et les événements de démonstration.

Pour réinitialiser les données :

```bash
npm run seed
```

## Personnalisation

### Couleurs et typographie

Les couleurs principales sont définies sous forme de variables CSS au début de `frontend/src/styles/styles.css` :

```css
:root {
    --color-primary: #004d99;
    --color-secondary: #6d2077;
    /* ... */
}
```

Modifier ces valeurs met à jour l'ensemble du site.

### Annuaire et événements

Les données initiales se trouvent dans `backend/src/db/seed-data.ts`. Le jeu de secours utilisé par le front-end est défini dans `frontend/src/data/`.

### Images et documents

- Les images se trouvent dans `frontend/public/img/`.
- Les PDF se trouvent dans `frontend/public/docs/`.

## Remarques techniques

- Les styles sont regroupés dans un seul fichier pour faciliter la maintenance.
- Les formulaires restent utilisables lorsque l'API est arrêtée : une confirmation de démonstration est alors affichée.
- La carte de la page Contact utilise un iframe Google Maps et nécessite une connexion Internet.
