import type { Praticien } from '../types';

export const communesParWilaya: Record<string, string[]> = {
  '1': ['Béjaïa', 'Akbou', 'Kherrata', 'Sidi Aïch', 'El Kseur', 'Tichy', 'Amizour', 'Souk El Tenine'],
  '2': ['Bouira', 'Lakhdaria', 'Sour El Ghozlane', 'Aïn Bessem', 'Boudjellil', "M'Chedallah", 'Bechloul'],
  '3': [
    'Tizi-Ouzou',
    'Azazga',
    'Draâ Ben Khedda',
    'Larbaâ Nath Irathen',
    'Tigzirt',
    'Boghni',
    'Ouaguenoun',
    'Tizi Rached'
  ],
  '4': ['Boumerdès', 'Boudouaou', 'Bordj Menaïel', 'Corso', 'Dellys', 'Khemis El Khechna', 'Thénia']
};

export const specialites: string[] = [
  'Omnipraticien',
  'Pathologie bucco-dentaire',
  'Odontologie conservatrice',
  'Orthodontie dento-faciale',
  'Parodontologie',
  'Prothèse dentaire',
  'Implantologie',
  'Chirurgie orale',
  'Résident ODF',
  'Résident Prothèse'
];

export const praticiens: Praticien[] = [
  {
    civilite: 'Dr',
    nom: 'Benali',
    prenom: 'Karim',
    num: '16/1042',
    specialite: 'Omnipraticien',
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'BOUIRA',
    wilayaCode: 2,
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
    wilaya: 'BOUIRA',
    wilayaCode: 2,
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
    wilaya: 'BOUIRA',
    wilayaCode: 2,
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
    wilaya: 'BÉJAÏA',
    wilayaCode: 1,
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
    wilaya: 'BÉJAÏA',
    wilayaCode: 1,
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
    wilaya: 'BÉJAÏA',
    wilayaCode: 1,
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
    wilaya: 'BÉJAÏA',
    wilayaCode: 1,
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
    wilaya: 'BOUMERDÈS',
    wilayaCode: 4,
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
    wilaya: 'BOUMERDÈS',
    wilayaCode: 4,
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
    wilaya: 'BOUMERDÈS',
    wilayaCode: 4,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'TIZI-OUZOU',
    wilayaCode: 3,
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
    wilaya: 'BOUIRA',
    wilayaCode: 2,
    commune: 'Aïn Bessem',
    adresse: 'Hôpital Aïn Bessem',
    tel: '0556 33 47 08',
    mode: 'Public',
    cabinet: 'EPH Aïn Bessem'
  }
];

export function normaliser(texte: string): string {
  return (texte || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
