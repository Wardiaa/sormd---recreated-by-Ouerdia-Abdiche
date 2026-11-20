export interface PraticienSeed {
  civilite: string;
  nom: string;
  prenom: string;
  num: string;
  specialite: string;
  wilayaCode: number;
  wilaya: string;
  commune: string;
  adresse: string;
  tel: string;
  mode: string;
  cabinet: string;
}

export interface EvenementSeed {
  id: number;
  type: string;
  libelle: string;
  description: string;
  adresse: string;
  dateDebut: string | null;
  dateFin: string | null;
  dateLimite: string | null;
  lienWeb: string;
  montant: number;
  image: string;
}

export const praticiensSeed: PraticienSeed[] = [
  {
    civilite: 'Dr',
    nom: 'Benali',
    prenom: 'Karim',
    num: '16/1042',
    specialite: 'Omnipraticien',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Tizi-Ouzou',
    adresse: '12 boulevard Stiti, Tizi-Ouzou',
    tel: '0552 14 22 07',
    mode: 'Libéral',
    cabinet: 'Cabinet dentaire Benali'
  },
  {
    civilite: 'Dr',
    nom: 'Aïssani',
    prenom: 'Lynda',
    num: '16/1187',
    specialite: 'Orthodontie dento-faciale',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Azazga',
    adresse: 'Route nationale 12, Azazga',
    tel: '0550 36 81 44',
    mode: 'Libéral',
    cabinet: 'Cabinet d’orthodontie Aïssani'
  },
  {
    civilite: 'Dr',
    nom: 'Mansouri',
    prenom: 'Sofiane',
    num: '16/0931',
    specialite: 'Odontologie conservatrice',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Draâ Ben Khedda',
    adresse: 'Cité des 40 logements, Draâ Ben Khedda',
    tel: '0556 72 19 30',
    mode: 'Libéral',
    cabinet: 'Cabinet Mansouri'
  },
  {
    civilite: 'Dr',
    nom: 'Haddadi',
    prenom: 'Nassim',
    num: '16/1264',
    specialite: 'Implantologie',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Tizi-Ouzou',
    adresse: '18 rue des Frères Bouadou, Tizi-Ouzou',
    tel: '0770 45 62 18',
    mode: 'Libéral',
    cabinet: 'Clinique dentaire Haddadi'
  },
  {
    civilite: 'Dr',
    nom: 'Ouali',
    prenom: 'Amel',
    num: '16/0875',
    specialite: 'Parodontologie',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Larbaâ Nath Irathen',
    adresse: 'Centre-ville, Larbaâ Nath Irathen',
    tel: '0551 63 90 27',
    mode: 'Libéral',
    cabinet: 'Cabinet Ouali'
  },
  {
    civilite: 'Dr',
    nom: 'Bouzid',
    prenom: 'Yacine',
    num: '15/0674',
    specialite: 'Prothèse dentaire',
    wilayaCode: 2,
    wilaya: 'BOUIRA',
    commune: 'Bouira',
    adresse: '24 rue Mohamed Boudiaf, Bouira',
    tel: '0554 28 71 06',
    mode: 'Libéral',
    cabinet: 'Cabinet Bouzid'
  },
  {
    civilite: 'Dr',
    nom: 'Kaci',
    prenom: 'Samira',
    num: '15/1102',
    specialite: 'Pathologie bucco-dentaire',
    wilayaCode: 2,
    wilaya: 'BOUIRA',
    commune: 'Lakhdaria',
    adresse: 'Cité 200 logements, Lakhdaria',
    tel: '0771 30 48 55',
    mode: 'Libéral',
    cabinet: 'Cabinet Kaci'
  },
  {
    civilite: 'Dr',
    nom: 'Mokrani',
    prenom: 'Rachid',
    num: '15/0459',
    specialite: 'Omnipraticien',
    wilayaCode: 2,
    wilaya: 'BOUIRA',
    commune: 'Sour El Ghozlane',
    adresse: 'Rue de la Poste, Sour El Ghozlane',
    tel: '0552 91 37 84',
    mode: 'Libéral',
    cabinet: 'Cabinet Mokrani'
  },
  {
    civilite: 'Dr',
    nom: 'Cherifi',
    prenom: 'Sonia',
    num: '14/0763',
    specialite: 'Orthodontie dento-faciale',
    wilayaCode: 1,
    wilaya: 'BÉJAÏA',
    commune: 'Béjaïa',
    adresse: '8 rue Fatah, Béjaïa',
    tel: '0550 22 64 19',
    mode: 'Libéral',
    cabinet: 'Cabinet Cherifi'
  },
  {
    civilite: 'Dr',
    nom: 'Aït Ahmed',
    prenom: 'Mourad',
    num: '14/1388',
    specialite: 'Odontologie conservatrice',
    wilayaCode: 1,
    wilaya: 'BÉJAÏA',
    commune: 'Akbou',
    adresse: 'Boulevard Krim Belkacem, Akbou',
    tel: '0556 48 27 03',
    mode: 'Libéral',
    cabinet: 'Cabinet Aït Ahmed'
  },
  {
    civilite: 'Dr',
    nom: 'Saïdi',
    prenom: 'Nadia',
    num: '14/0956',
    specialite: 'Parodontologie',
    wilayaCode: 1,
    wilaya: 'BÉJAÏA',
    commune: 'El Kseur',
    adresse: 'Route de Béjaïa, El Kseur',
    tel: '0770 51 83 72',
    mode: 'Libéral',
    cabinet: 'Cabinet Saïdi'
  },
  {
    civilite: 'Dr',
    nom: 'Belaïd',
    prenom: 'Hakim',
    num: '14/0621',
    specialite: 'Omnipraticien',
    wilayaCode: 1,
    wilaya: 'BÉJAÏA',
    commune: 'Sidi Aïch',
    adresse: 'Centre-ville, Sidi Aïch',
    tel: '0551 17 46 90',
    mode: 'Libéral',
    cabinet: 'Cabinet Belaïd'
  },
  {
    civilite: 'Dr',
    nom: 'Mebarki',
    prenom: 'Fairouz',
    num: '13/0518',
    specialite: 'Prothèse dentaire',
    wilayaCode: 4,
    wilaya: 'BOUMERDÈS',
    commune: 'Boumerdès',
    adresse: '5 rue Kerrad Rachid, Boumerdès',
    tel: '0554 73 29 61',
    mode: 'Libéral',
    cabinet: 'Cabinet Mebarki'
  },
  {
    civilite: 'Dr',
    nom: 'Zerrouki',
    prenom: 'Djamel',
    num: '13/0894',
    specialite: 'Omnipraticien',
    wilayaCode: 4,
    wilaya: 'BOUMERDÈS',
    commune: 'Boudouaou',
    adresse: 'Cité des oliviers, Boudouaou',
    tel: '0552 60 18 35',
    mode: 'Libéral',
    cabinet: 'Cabinet Zerrouki'
  },
  {
    civilite: 'Dr',
    nom: 'Bensalem',
    prenom: 'Wassila',
    num: '13/1176',
    specialite: 'Pathologie bucco-dentaire',
    wilayaCode: 4,
    wilaya: 'BOUMERDÈS',
    commune: 'Dellys',
    adresse: 'Rue du port, Dellys',
    tel: '0771 84 52 07',
    mode: 'Libéral',
    cabinet: 'Cabinet Bensalem'
  },
  {
    civilite: 'Dr',
    nom: 'Amrouche',
    prenom: 'Tarek',
    num: '16/1310',
    specialite: 'Chirurgie orale',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Tigzirt',
    adresse: 'Corniche de Tigzirt',
    tel: '0550 75 39 24',
    mode: 'Libéral',
    cabinet: 'Cabinet Amrouche'
  },
  {
    civilite: 'Dr',
    nom: 'Lounis',
    prenom: 'Sara',
    num: '16/1455',
    specialite: 'Résident ODF',
    wilayaCode: 3,
    wilaya: 'TIZI-OUZOU',
    commune: 'Boghni',
    adresse: 'Cité universitaire, Boghni',
    tel: '0770 28 61 43',
    mode: 'Public',
    cabinet: 'EPH Boghni'
  },
  {
    civilite: 'Dr',
    nom: 'Taleb',
    prenom: 'Anis',
    num: '15/1218',
    specialite: 'Résident Prothèse',
    wilayaCode: 2,
    wilaya: 'BOUIRA',
    commune: 'Aïn Bessem',
    adresse: 'Hôpital Aïn Bessem',
    tel: '0556 33 47 08',
    mode: 'Public',
    cabinet: 'EPH Aïn Bessem'
  }
];

export const evenementsSeed: EvenementSeed[] = [
  {
    id: 14,
    type: 'FORMATION',
    libelle: 'Élection des membres de la Section Ordinale Régionale',
    description:
      "Le 27 novembre 2025 est une date cruciale pour le renouvellement des membres de la section ordinale régionale des médecins dentistes de Tizi-Ouzou. Après un conflit qui a duré plus de 6 ans, nous avons l'honneur de vous appeler à voter pour désigner les éléments que vous voulez qu'ils vous représentent pour les 4 wilayas : Tizi-Ouzou, Boumerdès, Béjaïa et Bouira.\n\nSoyez au rendez-vous, tous unis pour un changement positif pour notre corporation.",
    adresse: '',
    dateDebut: '2025-11-27',
    dateFin: '2025-11-27',
    dateLimite: null,
    lienWeb: '',
    montant: 0,
    image: 'img/evenement-31.png'
  },
  {
    id: 13,
    type: 'FORMATION',
    libelle: 'Implantologie : All On Four et Implants zygomatiques',
    description:
      "Trois journées de formation en implantologie. Première journée théorique et les deux jours suivants pose d'implants : All On Four et implants zygomatiques avec le formateur Docteur Babouche Mohand Sghir à l'hôtel Relais Vert, Oued Aïssi, Tizi-Ouzou.\n\nVeuillez prendre contact avec le secrétariat de l'Ordre pour plus d'informations. Nombre de places limité.",
    adresse: 'Hôtel Relais Vert, Oued Aïssi, Tizi-Ouzou.',
    dateDebut: null,
    dateFin: null,
    dateLimite: null,
    lienWeb: '',
    montant: 0,
    image: 'img/evenement-30.jpg'
  }
];
