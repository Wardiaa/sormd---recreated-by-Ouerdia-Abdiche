export interface Praticien {
  civilite: string;
  nom: string;
  prenom: string;
  num: string;
  specialite: string;
  wilaya: string;
  wilayaCode?: number;
  commune: string;
  adresse: string;
  tel: string;
  mode: string;
  cabinet: string;
}

export interface Evenement {
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
  image?: string;
}

export interface Actualite {
  id: number;
  titre: string;
  resume: string;
  contenu: string;
  source: string;
  datePublication: string | null;
  lien: string;
}

export interface ContactPayload {
  nom: string;
  email: string;
  sujet: string;
  message: string;
  website?: string;
}

export interface DoleancePayload {
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  document?: string;
  website?: string;
}
