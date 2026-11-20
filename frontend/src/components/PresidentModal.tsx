import { useEffect } from 'react';

interface PresidentModalProps {
  ouvert: boolean;
  onClose: () => void;
}

export default function PresidentModal({ ouvert, onClose }: PresidentModalProps) {
  useEffect(() => {
    if (!ouvert) return;

    function gererTouche(evenement: KeyboardEvent) {
      if (evenement.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', gererTouche);
    return () => document.removeEventListener('keydown', gererTouche);
  }, [ouvert, onClose]);

  if (!ouvert) return null;

  return (
    <div
      id="presidentModal"
      className="modal"
      style={{ display: 'block' }}
      onClick={(evenement) => {
        if (evenement.target === evenement.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Mot du président</h2>
        </div>
        <div className="modal-body" style={{ background: 'white' }}>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <img
              src="img/president.png"
              alt="Photo du président"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            />
            <h3 style={{ marginTop: '15px', color: '#8B4789' }}>Mot du président</h3>
            <p style={{ color: '#666', fontStyle: 'italic' }}>Président de la SOR de Tizi-Ouzou</p>
          </div>
          <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1.05em' }}>
            Une nouvelle mandature 2023-2025 s'ouvre avec un nouveau bureau de la section ordinale
            régionale des médecins dentistes de Tizi-Ouzou. Une nouvelle équipe qui a accepté
            d'investir bénévolement son temps et son dévouement au service de la profession.{' '}
            <br />
            <br />
            Notre démarche s'articule autour de 3 axes : Assurer une communication fluide entre
            l'ensemble des confrères et consœurs inscrits au tableau par la mise en place d'une
            plateforme de communication via le net, accessible à tous ; Assurer une facilitation et
            une optimisation des services administratifs en accompagnant les confrères et les
            consœurs inscrits dans leur démarche d'installation ; Réhabiliter la profession de
            médecine dentaire en veillant au strict respect des règles et lois qui régissent notre
            profession, le but étant de protéger le praticien dans l'exercice de sa profession,
            mais aussi préserver le droit du patient vis-à-vis de son médecin traitant.
            <br />
            <br />
            Le concours de l'ensemble des bonnes volontés est nécessaire pour atteindre les objectifs
            tracés.
            <br />
            <br />
            SORMD TO
          </div>
        </div>
      </div>
    </div>
  );
}
