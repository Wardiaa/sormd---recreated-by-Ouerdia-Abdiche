import { useState, type FormEvent } from 'react';
import AnnuaireModal from '../components/AnnuaireModal';
import HeroBanner from '../components/HeroBanner';
import PageMeta from '../components/PageMeta';
import { communesParWilaya, specialites } from '../data/praticiens';
import { rechercherPraticiens } from '../services/annuaireService';
import type { Praticien } from '../types';

export default function Annuaire() {
  const [nom, setNom] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [commune, setCommune] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [resultats, setResultats] = useState<Praticien[]>([]);
  const [aRecherche, setARecherche] = useState(false);
  const [selection, setSelection] = useState<Praticien | null>(null);

  const communes = wilaya ? communesParWilaya[wilaya] || [] : [];

  async function rechercher(evenement: FormEvent<HTMLFormElement>) {
    evenement.preventDefault();

    const libelleSpecialite = specialite ? specialites[Number(specialite) - 1] : '';

    const liste = await rechercherPraticiens({
      nom: nom.trim(),
      wilaya,
      commune,
      specialite: libelleSpecialite
    });

    setResultats(liste);
    setARecherche(true);
  }

  function reinitialiser() {
    setNom('');
    setWilaya('');
    setCommune('');
    setSpecialite('');
    setResultats([]);
    setARecherche(false);
  }

  return (
    <>
      <PageMeta titre="Association des Médecins-Dentistes - Annuaire" />

      <main className="page-content">
        <HeroBanner
          image="img/annuaire-banniere.jpg"
          alt="Annuaire des médecins-dentistes"
          titre="Trouver un Médecin-Dentiste"
          sousTitre="Recherchez un praticien membre de l'association"
          containerClassName="text-center"
        />

        <div className="container" style={{ padding: '40px 0' }}>
          <div className="search-section">
            <div>
              <form className="search-form" id="searchForm" onSubmit={rechercher}>
                <h3 style={{ marginBottom: '20px', color: '#8B4789' }}>Filtres de Recherche</h3>

                <div className="form-group">
                  <label htmlFor="searchInput">Nom du Dentiste</label>
                  <input
                    type="text"
                    id="searchInput"
                    name="q"
                    placeholder="Ex : Benali"
                    value={nom}
                    onChange={(evenement) => setNom(evenement.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="wilayaSelect">Wilaya / Région</label>
                  <select
                    id="wilayaSelect"
                    name="wilaya"
                    value={wilaya}
                    onChange={(evenement) => {
                      setWilaya(evenement.target.value);
                      setCommune('');
                    }}
                  >
                    <option value="">Toutes les wilayas</option>
                    <option value="1">BEJAIA</option>
                    <option value="2">BOUIRA</option>
                    <option value="4">BOUMERDES</option>
                    <option value="3">TIZI-OUZOU</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="communeSelect">Commune / Ville</label>
                  <select
                    id="communeSelect"
                    name="commune"
                    disabled={!wilaya}
                    value={commune}
                    onChange={(evenement) => setCommune(evenement.target.value)}
                  >
                    <option value="">Toutes les communes</option>
                    {communes.map((nomCommune) => (
                      <option value={nomCommune} key={nomCommune}>
                        {nomCommune}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specialiteSelect">Spécialité</label>
                  <select
                    id="specialiteSelect"
                    name="specialite"
                    value={specialite}
                    onChange={(evenement) => setSpecialite(evenement.target.value)}
                  >
                    <option value="">Toutes les spécialités</option>
                    {specialites.map((nomSpecialite, index) => (
                      <option value={String(index + 1)} key={nomSpecialite}>
                        {nomSpecialite}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="button-group">
                  <button type="submit" className="annuaire-btn primary" id="searchBtn">
                    Rechercher
                  </button>
                  <button
                    type="button"
                    className="annuaire-btn secondary"
                    id="resetBtn"
                    onClick={reinitialiser}
                  >
                    Réinitialiser
                  </button>
                </div>
              </form>
            </div>

            <div className="results-area" id="resultsArea">
              <h2>Résultats de la Recherche</h2>

              {!aRecherche ? (
                <p>Utilisez les filtres pour lancer une recherche.</p>
              ) : resultats.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                  Aucun résultat trouvé.
                </p>
              ) : (
                <>
                  <p>
                    <strong>{resultats.length}</strong> dentiste(s) trouvé(s)
                  </p>
                  <div className="results-grid">
                    {resultats.map((praticien, index) => (
                      <div
                        className="card-clickable"
                        data-index={index}
                        key={`${praticien.num}-${index}`}
                        onClick={() => setSelection(praticien)}
                      >
                        <div className="card-header">
                          <div className="card-name">
                            {praticien.civilite} {praticien.prenom} {praticien.nom}
                          </div>
                        </div>
                        <div className="card-badges">
                          <span className="badge badge-numero">N° {praticien.num}</span>
                          <span className="badge badge-specialite">{praticien.specialite}</span>
                        </div>
                        <div className="card-info">
                          <div className="info-row">
                            <span className="info-label">📍 Wilaya :</span>
                            <span className="info-value">{praticien.wilaya}</span>
                          </div>
                          <div className="info-row">
                            <span className="info-label">🏙️ Commune :</span>
                            <span className="info-value">{praticien.commune}</span>
                          </div>
                          <div className="info-row">
                            <span className="info-label">🏠 Adresse :</span>
                            <span className="info-value">{praticien.adresse}</span>
                          </div>
                          <div className="info-row">
                            <span className="info-label">📞 Tél :</span>
                            <span className="info-value">{praticien.tel}</span>
                          </div>
                        </div>
                        <button className="voir-plus-btn" type="button">
                          Voir plus de détails
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <AnnuaireModal praticien={selection} onClose={() => setSelection(null)} />
    </>
  );
}
