import { useState, type FormEvent } from 'react';
import { envoyerDoleance } from '../services/api';
import Lien from './Lien';

export default function FormulaireDoleance() {
  const [envoye, setEnvoye] = useState(false);

  async function soumettre(evenement: FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    const formulaire = evenement.currentTarget;

    if (!formulaire.checkValidity()) {
      formulaire.reportValidity();
      return;
    }

    const donnees = new FormData(formulaire);
    const fichier = donnees.get('document');
    const nomFichier = fichier instanceof File && fichier.name ? fichier.name : undefined;

    try {
      await envoyerDoleance({
        nom: String(donnees.get('nom') || ''),
        email: String(donnees.get('email_personne') || ''),
        telephone: String(donnees.get('telephone') || ''),
        objet: String(donnees.get('objet') || ''),
        message: String(donnees.get('message') || ''),
        document: nomFichier,
        website: String(donnees.get('website') || '')
      });
    } catch (erreur) {
      console.warn(
        "API indisponible : le formulaire fonctionne en mode démonstration.",
        erreur
      );
    }

    setEnvoye(true);
  }

  if (envoye) {
    return (
      <div className="success-message">
        <span className="success-icon">
          <i className="fas fa-check-circle"></i>
        </span>
        <h2>Doléance envoyée</h2>
        <p>
          Votre doléance a bien été transmise à la section ordinale. Elle sera traitée de manière
          confidentielle dans un délai de 7 à 14 jours ouvrables.
        </p>
        <Lien href="/doleance" className="btn primary" onClick={() => setEnvoye(false)}>
          Retour au formulaire
        </Lien>
      </div>
    );
  }

  return (
    <>
      <h2>Formulaire de Doléance</h2>

      <form
        className="contact-form"
        method="post"
        encType="multipart/form-data"
        data-demo-form
        data-success-title="Doléance envoyée"
        data-success-message="Votre doléance a bien été transmise à la section ordinale. Elle sera traitée de manière confidentielle dans un délai de 7 à 14 jours ouvrables."
        data-return-link="/doleance"
        onSubmit={soumettre}
      >
        <div className="form-group">
          <label htmlFor="d_nom">Nom et Prénom</label>
          <input type="text" id="d_nom" name="nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="d_email_personne">Votre E-mail</label>
          <input type="email" id="d_email_personne" name="email_personne" required />
        </div>

        <div className="form-group">
          <label htmlFor="d_telephone">Téléphone</label>
          <input type="tel" id="d_telephone" name="telephone" required />
        </div>

        <div className="form-group">
          <label htmlFor="d_objet">Objet de la Doléance</label>
          <input
            type="text"
            id="d_objet"
            name="objet"
            required
            placeholder="Ex : Problème de traitement, facturation incorrecte..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="d_message">Description Détaillée</label>
          <textarea
            id="d_message"
            name="message"
            rows={6}
            required
            placeholder="Décrivez votre doléance en détail..."
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="d_document">Document Justificatif (Optionnel)</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="d_document"
              name="document"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            />
            <span className="file-hint">
              📎 Formats acceptés : PDF, JPG, PNG, DOC, DOCX (Max 5 Mo)
            </span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: '-5000px',
            opacity: 0,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        >
          <label htmlFor="website">Laissez ce champ vide</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <button type="submit" className="btn primary">
          Envoyer la Doléance
        </button>
      </form>
    </>
  );
}
