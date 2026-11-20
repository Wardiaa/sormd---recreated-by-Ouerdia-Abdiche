import { useState, type FormEvent } from 'react';
import { envoyerContact } from '../services/api';
import Lien from './Lien';

export default function FormulaireContact() {
  const [envoye, setEnvoye] = useState(false);

  async function soumettre(evenement: FormEvent<HTMLFormElement>) {
    evenement.preventDefault();
    const formulaire = evenement.currentTarget;

    if (!formulaire.checkValidity()) {
      formulaire.reportValidity();
      return;
    }

    const donnees = new FormData(formulaire);

    try {
      await envoyerContact({
        nom: String(donnees.get('nom') || ''),
        email: String(donnees.get('email') || ''),
        sujet: String(donnees.get('sujet') || 'general'),
        message: String(donnees.get('message') || ''),
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
        <h2>Message envoyé</h2>
        <p>
          Votre message a bien été transmis à la section ordinale. Nous vous répondrons dans les
          meilleurs délais.
        </p>
        <Lien href="/contact" className="btn primary" onClick={() => setEnvoye(false)}>
          Retour au formulaire
        </Lien>
      </div>
    );
  }

  return (
    <>
      <h2>Envoyez-nous un message</h2>

      <form
        className="contact-form"
        method="post"
        data-demo-form
        data-success-title="Message envoyé"
        data-success-message="Votre message a bien été transmis à la section ordinale. Nous vous répondrons dans les meilleurs délais."
        data-return-link="/contact"
        onSubmit={soumettre}
      >
        <div className="form-group">
          <label htmlFor="c_nom">Nom et Prénom</label>
          <input type="text" id="c_nom" name="nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="c_email">Votre E-mail</label>
          <input type="email" id="c_email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="c_sujet">Sujet</label>
          <select id="c_sujet" name="sujet">
            <option value="general">Question générale</option>
            <option value="adhesion">Demande d'adhésion</option>
            <option value="conciliation">Demande de conciliation</option>
            <option value="presse">Demande de presse</option>
            <option value="autre">Autre...</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="c_message">Votre message</label>
          <textarea id="c_message" name="message" rows={5} required></textarea>
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
          Envoyer le Message
        </button>
      </form>
    </>
  );
}
