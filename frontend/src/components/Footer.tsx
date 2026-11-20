import Lien from './Lien';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            Adresse : 50 rue Kerrad Rachid, immeuble Bel Air, Bureau numéro 1, 2eme étage, Tour
            villa
          </p>
          <p>BOUMERDES</p>
          <p>
            Email : <a href="mailto:sormdto@gmail.com">sormdto@gmail.com</a>
          </p>
          <p>Téléphone : 0552 24 93 74 / 044925715</p>
        </div>

        <div className="footer-links">
          <h3>Infos Légales</h3>
          <ul>
            <li>
              <Lien href="/mentions-legales">Mentions Légales</Lien>
            </li>
            <li>
              <Lien href="/politique-confidentialite">Politique de Confidentialité</Lien>
            </li>
            <li>
              <Lien href="/plan-du-site">Plan du Site</Lien>
            </li>
            <li>
              <Lien href="/contact">Contactez-nous</Lien>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <a
            href="https://www.facebook.com/sormdto"
            target="_blank"
            rel="noopener"
            className="social-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <p className="copyright">
        © 2026 - Section Ordinale Régionale des Médecins-Dentistes de Tizi-Ouzou. Tous droits
        réservés.{' '}
        <span className="separator">|</span>
        {' '}
        <a className="link-admin" href="https://www.assoclic.com/sormdto/FR/page-admin.php">
          Administration
        </a>
      </p>
    </footer>
  );
}
