import { useEffect } from 'react';
import type { Evenement } from '../types';

interface EvenementModalProps {
  evenement: Evenement | null;
  onClose: () => void;
}

function formaterDate(valeur: string | null): string {
  if (!valeur) return '';
  return new Date(valeur).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function EvenementModal({ evenement, onClose }: EvenementModalProps) {
  useEffect(() => {
    if (!evenement) return;

    function gererTouche(evenementClavier: KeyboardEvent) {
      if (evenementClavier.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', gererTouche);
    return () => document.removeEventListener('keydown', gererTouche);
  }, [evenement, onClose]);

  if (!evenement) {
    return null;
  }

  const dateDebut = evenement.dateDebut ? formaterDate(evenement.dateDebut) : 'Non précisée';
  const dateFin = evenement.dateFin ? formaterDate(evenement.dateFin) : '';
  const dateLimite = evenement.dateLimite
    ? formaterDate(evenement.dateLimite)
    : "Pas de date limite";
  const montant =
    evenement.montant === 0 ? (
      <span className="modal-badge badge-gratuit">GRATUIT</span>
    ) : (
      <span className="modal-badge badge-payant">
        {evenement.montant.toLocaleString('fr-DZ')} DZD
      </span>
    );

  const lignesDescription = evenement.description.split('\n');

  return (
    <div
      id="eventModal"
      className="modal"
      style={{ display: 'block' }}
      onClick={(click) => {
        if (click.target === click.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 id="eventModalTitle">{evenement.libelle}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-info-grid" id="eventModalInfo">
            <div className="modal-info-item">
              <span className="modal-info-label">Type</span>
              <span className="modal-info-value">{evenement.type || 'Événement'}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Lieu</span>
              <span className="modal-info-value">{evenement.adresse || 'Non précisé'}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Tarif</span>
              <span className="modal-info-value">{montant}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Date de début</span>
              <span className="modal-info-value">{dateDebut}</span>
            </div>
            {dateFin ? (
              <div className="modal-info-item">
                <span className="modal-info-label">Date de fin</span>
                <span className="modal-info-value">{dateFin}</span>
              </div>
            ) : null}
            <div className="modal-info-item">
              <span className="modal-info-label">Date limite d'inscription</span>
              <span className="modal-info-value">{dateLimite}</span>
            </div>
          </div>
          <div className="modal-description" id="eventModalDescription">
            <h3>Description</h3>
            <p>
              {lignesDescription.map((ligne, index) => (
                <span key={index}>
                  {ligne}
                  {index < lignesDescription.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="modal-footer" id="eventModalFooter">
          {evenement.lienWeb ? (
            <a href={evenement.lienWeb} target="_blank" rel="noopener" className="btn primary">
              🌐 Visiter le site web
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
