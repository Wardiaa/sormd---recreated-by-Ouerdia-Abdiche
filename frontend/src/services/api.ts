import type { Actualite, ContactPayload, DoleancePayload, Evenement } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function requete<T>(chemin: string, init?: RequestInit): Promise<T> {
  const reponse = await fetch(`${API_BASE}${chemin}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {})
    },
    ...init
  });

  if (!reponse.ok) {
    throw new Error(`Erreur API (${reponse.status})`);
  }

  return reponse.json() as Promise<T>;
}

export interface FiltresAnnuaire {
  nom?: string;
  wilaya?: string;
  commune?: string;
  specialite?: string;
}

export async function chargerEvenements(): Promise<Evenement[]> {
  return requete<Evenement[]>('/evenements');
}

export async function chargerActualites(): Promise<Actualite[]> {
  return requete<Actualite[]>('/actualites');
}

export async function envoyerContact(donnees: ContactPayload): Promise<void> {
  await requete<{ succes: boolean }>('/contact', {
    method: 'POST',
    body: JSON.stringify(donnees)
  });
}

export async function envoyerDoleance(donnees: DoleancePayload): Promise<void> {
  await requete<{ succes: boolean }>('/doleances', {
    method: 'POST',
    body: JSON.stringify(donnees)
  });
}
