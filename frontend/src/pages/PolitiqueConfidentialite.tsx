import PageMeta from '../components/PageMeta';
import Lien from '../components/Lien';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageMeta titre="Politique de Confidentialité - Ordre National des Chirurgiens-Dentistes" />
      <main className="page-content">
        <section className="hero-banner" style={{height: 250}}>
          <img src="img/mentions-legales-banniere.jpg" alt="Politique de confidentialité" className="hero-image" />
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Politique de Confidentialité</h1>
            </div>
          </div>
        </section>
        <section className="legal-notice" style={{padding: '40px 0'}}>
          <div className="container legal-content">
            <h2>1. Introduction et Responsable du Traitement</h2>
            <p>L'Ordre Régional des Chirurgiens-Dentistes de Tizi-Ouzou (SORMD TO) s'engage à protéger la confidentialité et la sécurité des données personnelles traitées via son site web.</p>
            <h3>1.2. Champ d'Application</h3>
            <p>Cette politique décrit comment la SORMD TO collecte, utilise, conserve et protège les données des deux catégories d'utilisateurs : les patients et le public consultant l'espace ouvert, ainsi que les membres inscrits accédant à l'espace sécurisé.</p>
            <h2>2. Les Données Collectées et Finalités de Traitement</h2>
            <p>Le type de données collectées dépend strictement de l'espace du site que vous utilisez :</p>
            <table>
              <thead>
                <tr>
                  <th>Espace du Site</th>
                  <th>Catégories de Données Collectées</th>
                  <th>Finalités du Traitement</th>
                  <th>Base Légale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Espace Public (Patients / Visiteurs)</strong></td>
                  <td>
                    <ul>
                      <li>Données de navigation (adresse IP, pages consultées, durée de session).</li>
                      <li>Données de contact (nom, e-mail, objet) via les formulaires de contact ou de doléance.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Mesure de l'audience et amélioration de l'ergonomie du site.</li>
                      <li>Réponse aux requêtes des utilisateurs et gestion des doléances.</li>
                    </ul>
                  </td>
                  <td>Intérêt légitime de l'Ordre (amélioration du service public).</td>
                </tr>
                <tr>
                  <td><strong>Espace Sécurisé (Membres Inscrits)</strong></td>
                  <td>
                    <ul>
                      <li><strong>Identité et état civil :</strong> nom, prénom, date et lieu de naissance, adresse.</li>
                      <li><strong>Professionnelles :</strong> numéro d'inscription, spécialités, lieu d'exercice.</li>
                      <li><strong>Financières et administratives :</strong> statut des cotisations, informations de gestion interne.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Respect des obligations légales de tenue du Tableau de l'Ordre.</li>
                      <li>Gestion des cotisations et suivi de la situation administrative et déontologique des membres.</li>
                      <li>Assurer la sécurité de l'accès aux services réservés.</li>
                    </ul>
                  </td>
                  <td>Exécution d'une obligation légale de l'Ordre.</td>
                </tr>
              </tbody>
            </table>
            <h2>3. Sécurité et Destinataires des Données</h2>
            <h3>3.1. Mesures de Sécurité</h3>
            <p>L'Ordre met en œuvre des mesures de sécurité physiques, techniques et organisationnelles appropriées pour garantir la confidentialité et l'intégrité des données personnelles, notamment :</p>
            <ul>
              <li><strong>Pour l'Espace Public :</strong> chiffrement du trafic (SSL/HTTPS).</li>
              <li><strong>Pour l'Espace Sécurisé :</strong> accès sécurisé par identifiant et mot de passe unique, chiffrement des données sensibles, restriction d'accès aux seuls agents habilités de l'Ordre.</li>
            </ul>
            <h3>3.2. Destinataires des Données</h3>
            <p>Les données sont destinées exclusivement :</p>
            <ol>
              <li>Au personnel habilité du Conseil National de l'Ordre et des Conseils Régionaux.</li>
              <li>À l'hébergeur du site (voir Mentions Légales) pour les besoins de maintenance technique.</li>
              <li>Aux autorités publiques ou judiciaires, uniquement en cas d'obligation légale.</li>
            </ol>
            <h2>4. Durée de Conservation des Données</h2>
            <p>La conservation des données est limitée à la durée nécessaire pour atteindre les finalités décrites ci-dessus :</p>
            <ul>
              <li><strong>Données des Membres (Espace Sécurisé) :</strong> conservées pendant la durée de l'inscription active du membre à l'Ordre, et au-delà, archivées conformément aux obligations légales de conservation des archives administratives de l'Ordre.</li>
              <li><strong>Données de Contact et Doléances :</strong> conservées le temps nécessaire au traitement de la requête, puis archivées ou détruites.</li>
              <li><strong>Données de Connexion et Cookies :</strong> conservées pour une durée maximale de 13 mois après leur collecte.</li>
            </ul>
            <h2>5. Droits des Personnes Concernées</h2>
            <p>Conformément aux dispositions légales en vigueur, vous disposez des droits suivants concernant vos données :</p>
            <ul>
              <li><strong>Droit d'Accès :</strong> demander et obtenir une copie des données vous concernant.</li>
              <li><strong>Droit de Rectification :</strong> mettre à jour les données inexactes (particulièrement important pour les informations d'état civil des membres).</li>
              <li><strong>Droit d'Opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes (sauf en cas d'obligation légale pour les membres inscrits).</li>
              <li><strong>Droit à l'Effacement :</strong> demander la suppression de vos données (sous réserve des obligations légales de l'Ordre de conserver certaines informations).</li>
            </ul>
            <p>Pour exercer l'un de ces droits, veuillez adresser votre demande, accompagnée d'une preuve de votre identité, à l'adresse e-mail du secrétariat : <Lien href="mailto:sormdto@gmail.com">sormdto@gmail.com</Lien>.</p>
            <h2>6. Gestion des Cookies</h2>
            <p>Le site utilise des cookies (petits fichiers texte) pour des besoins techniques (fonctionnement de l'espace sécurisé) et statistiques (mesure d'audience).</p>
            <ul>
              <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement de l'espace sécurisé et à l'authentification des membres. Ils ne requièrent généralement pas de consentement.</li>
              <li><strong>Cookies statistiques :</strong> permettent d'analyser la fréquentation du site et d'améliorer les contenus. Vous avez le droit de les refuser.</li>
            </ul>
            <p>Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies. Cependant, le refus des cookies techniques peut empêcher l'accès aux services sécurisés de l'espace d'administration.</p>
          </div>
        </section>
      </main>
      
    </>
  );
}
