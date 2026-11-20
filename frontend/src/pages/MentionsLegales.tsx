import PageMeta from '../components/PageMeta';

export default function MentionsLegales() {
  return (
    <>
      <PageMeta titre="Mentions Légales - Ordre National des Chirurgiens-Dentistes" />
      <main className="page-content">
        <section className="hero-banner" style={{height: 250}}>
          <img src="img/mentions-legales-banniere.jpg" alt="Mentions légales" className="hero-image" />
          <div className="hero-overlay">
            <div className="container text-center">
              <h1>Mentions légales</h1>
            </div>
          </div>
        </section>
        <section className="legal-notice" style={{padding: '40px 0'}}>
          <div className="container legal-content">
            <h2>1. Identification de l'Éditeur du Site (L'Ordre)</h2>
            <p>Le présent site web est édité par : L'ORDRE RÉGIONAL DES MÉDECINS-DENTISTES DE TIZI-OUZOU (SORMD TO).</p>
            <p>Le site www.sormd-tizi.com est hébergé par : la société Symphotech Solutions SARL.</p>
            <h2>2. Conditions Générales d'Utilisation (CGU)</h2>
            <h3>2.1. Objet du Site</h3>
            <p>Le site de l'Ordre Régional des Médecins-Dentistes de Tizi-Ouzou a une double vocation :</p>
            <ol>
              <li><strong>Espace Public :</strong> informer les patients et le grand public sur la profession, la déontologie, l'annuaire des inscrits et les actualités de l'Ordre.</li>
              <li><strong>Espace Sécurisé (administration) :</strong> offrir un service de gestion et d'information privée réservé exclusivement aux membres inscrits et à jour de leurs cotisations.</li>
            </ol>
            <h3>2.2. Accès et Sécurité de l'Espace Sécurisé</h3>
            <p>L'accès à l'espace sécurisé est strictement limité aux membres inscrits via une identification unique (identifiant et mot de passe) fournie et gérée par l'Ordre. L'utilisateur est seul responsable de la conservation du caractère confidentiel de son identifiant et de son mot de passe. L'Ordre ne pourra être tenu responsable en cas d'accès non autorisé résultant d'un manquement à cette obligation de confidentialité.</p>
            <h2>3. Propriété Intellectuelle</h2>
            <p>L'Ordre est le propriétaire exclusif de tous les droits de propriété liés aux données contenues sur le site et dans l'espace d'administration.</p>
            <p>Toute reproduction ou utilisation sans autorisation écrite préalable du secrétariat de l'Ordre est interdite.</p>
            <h2>4. Protection et Traitement des Données Personnelles</h2>
            <h3>4.1. Responsable du Traitement</h3>
            <p>L'Ordre s'engage à ce que la collecte et le traitement des données personnelles, effectués à partir du présent site, soient conformes aux dispositions légales et réglementaires en vigueur en Algérie relatives à la protection des données.</p>
            <h3>4.2. Finalités des Traitements (Différenciation Public / Espace Sécurisé)</h3>
            <table>
              <thead>
                <tr>
                  <th>Espace du Site</th>
                  <th>Données Collectées</th>
                  <th>Finalités</th>
                  <th>Base Légale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Espace Public</strong></td>
                  <td>Données de navigation (cookies, IP, pages vues)</td>
                  <td>Statistiques de fréquentation, amélioration du service</td>
                  <td>Intérêt légitime</td>
                </tr>
                <tr>
                  <td><strong>Espace Sécurisé</strong></td>
                  <td>État civil, cotisations, informations de gestion interne</td>
                  <td>Gestion de l'inscription à l'Ordre, suivi des obligations déontologiques et financières</td>
                  <td>Exécution d'une obligation légale et contractuelle</td>
                </tr>
              </tbody>
            </table>
            <h3>4.3. Caractère Sensible des Données de l'Espace Sécurisé</h3>
            <p>L'espace sécurisé contient des données d'ordre privé et de gestion interne dont l'accès est sécurisé. Les données d'état civil et de cotisations sont collectées uniquement auprès des membres pour les besoins légitimes et réglementaires de l'exercice de l'Ordre. Ces informations ne sont en aucun cas rendues publiques ou transmises à des tiers non autorisés.</p>
            <h3>4.4. Droits des Personnes Concernées</h3>
            <p>Conformément aux réglementations applicables, tout membre inscrit dispose d'un droit d'accès, de rectification, de suppression et d'opposition pour motif légitime aux données le concernant.</p>
            <p><strong>Pour exercer ces droits :</strong> veuillez adresser une demande écrite et signée, accompagnée d'une copie d'une pièce d'identité, à l'adresse du siège social de l'Ordre ou par e-mail aux coordonnées mentionnées sur notre site.</p>
            <h2>5. Limitation de Responsabilité</h2>
            <p>L'Ordre s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations.</p>
            <ul>
              <li><strong>Avertissement Public :</strong> les informations publiques disponibles sont fournies à titre indicatif et ne sauraient se substituer à une consultation médicale ou à un avis professionnel.</li>
              <li><strong>Sécurité de l'Espace Sécurisé :</strong> l'Ordre met en œuvre tous les moyens raisonnables pour assurer la sécurité des données de l'espace sécurisé. Cependant, la responsabilité de l'Ordre ne saurait être engagée pour des dommages résultant d'une intrusion ou d'une attaque malveillante malgré les mesures de sécurité mises en place.</li>
            </ul>
            <h2>6. Droit Applicable et Attribution de Juridiction</h2>
            <p>Les présentes Mentions Légales sont régies par le <strong>droit algérien</strong>. Tout litige en relation avec l'utilisation du site est soumis à la compétence exclusive des tribunaux compétents du lieu du siège de l'Ordre.</p>
          </div>
        </section>
      </main>
      
    </>
  );
}
