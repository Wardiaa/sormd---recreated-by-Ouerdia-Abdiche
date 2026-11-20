import { useEffect, type ReactNode } from 'react';
import type { Praticien } from '../types';

interface AnnuaireModalProps {
  praticien: Praticien | null;
  onClose: () => void;
}

export default function AnnuaireModal({ praticien, onClose }: AnnuaireModalProps) {
  useEffect(() => {
    if (!praticien) return;

    function gererTouche(evenement: KeyboardEvent) {
      if (evenement.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', gererTouche);
    return () => document.removeEventListener('keydown', gererTouche);
  }, [praticien, onClose]);

  if (!praticien) return null;

  const champs: Array<[string, ReactNode]> = [
    ["Numéro d'ordre", `N° ${praticien.num}`],
    ['Spécialité', praticien.specialite],
    ["Mode d'exercice", praticien.mode],
    ['Cabinet', praticien.cabinet],
    ['Wilaya', praticien.wilaya],
    ['Commune', praticien.commune],
    ['Adresse', praticien.adresse],
    ['Téléphone', <a href={`tel:${praticien.tel}`}>{praticien.tel}</a>]
  ];

  return (
    <div
      id="dentistModal"
      className="dentist-modal"
      style={{ display: 'block' }}
      onClick={(evenement) => {
        if (evenement.target === evenement.currentTarget) onClose();
      }}
    >
      <div className="dentist-modal-content">
        <div className="dentist-modal-header">
          <span className="dentist-modal-close" onClick={onClose}>
            &times;
          </span>
          <h2 id="modalDentistName">
            {praticien.civilite} {praticien.prenom} {praticien.nom}
          </h2>
        </div>
        <div className="dentist-modal-body" id="modalDentistBody">
          <div className="dentist-info-grid">
            {champs.map(([label, valeur]) => (
              <div className="dentist-info-item" key={label}>
                <div className="dentist-info-label">{label}</div>
                <div className="dentist-info-value">{valeur}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
