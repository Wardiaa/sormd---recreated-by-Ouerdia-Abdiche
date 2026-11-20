import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Lien from './Lien';

export default function Header() {
  const { pathname } = useLocation();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [ordreOuvert, setOrdreOuvert] = useState(false);
  const [patientsOuvert, setPatientsOuvert] = useState(false);

  const ordreRef = useRef<HTMLUListElement>(null);
  const patientsRef = useRef<HTMLUListElement>(null);

  const ordreActif = ['/association', '/demarches', '/services', '/documents'].includes(pathname);
  const patientsActif = ['/patients-info', '/doleance'].includes(pathname);

  useEffect(() => {
    setMenuOuvert(false);
    setOrdreOuvert(ordreActif);
    setPatientsOuvert(patientsActif);

    if (ordreRef.current) ordreRef.current.style.height = '';
    if (patientsRef.current) patientsRef.current.style.height = '';
  }, [pathname, ordreActif, patientsActif]);

  useEffect(() => {
    function gererRedimensionnement() {
      if (window.innerWidth > 650) {
        if (ordreRef.current) ordreRef.current.style.height = '';
        if (patientsRef.current) patientsRef.current.style.height = '';
      }
    }

    window.addEventListener('resize', gererRedimensionnement);
    return () => window.removeEventListener('resize', gererRedimensionnement);
  }, []);

  function toggleSousMenu(cle: 'ordre' | 'patients', evenement: MouseEvent<HTMLAnchorElement>) {
    if (window.innerWidth > 992) return;

    evenement.preventDefault();

    const ouverture = cle === 'ordre' ? !ordreOuvert : !patientsOuvert;
    const reference = cle === 'ordre' ? ordreRef : patientsRef;
    const sousMenu = reference.current;

    if (sousMenu) {
      sousMenu.style.height = ouverture ? `${sousMenu.scrollHeight}px` : '0';
    }

    if (cle === 'ordre') {
      setOrdreOuvert(ouverture);
    } else {
      setPatientsOuvert(ouverture);
    }
  }

  function classeLien(actif: boolean, base?: string): string | undefined {
    const classes = [base, actif ? 'active' : ''].filter(Boolean).join(' ');
    return classes || undefined;
  }

  return (
    <header className={`elegant-header${menuOuvert ? ' menu-open' : ''}`}>
      <div className="logo-container">
        <Lien href="/" className="logo">
          <img src="img/logo-sorto.png" alt="logo" height="60" />
          <span className="logo-text">
            Section Ordinale Régionale des Médecins Dentistes de Tizi-Ouzou
          </span>
        </Lien>

        <button
          className="hamburger"
          aria-expanded={menuOuvert}
          aria-controls="main-menu-nav"
          id="hamburger-btn"
          onClick={() => setMenuOuvert((ouvert) => !ouvert)}
        >
          <i className={`fas ${menuOuvert ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <nav className={`main-nav${menuOuvert ? ' active' : ''}`} id="main-menu-nav">
        <ul>
          <li>
            <Lien href="/" className={classeLien(pathname === '/')}>
              Accueil
            </Lien>
          </li>

          <li className={`has-submenu${ordreActif ? ' active open' : ''}`}>
            <Lien
              href="/association"
              className={classeLien(ordreActif, 'submenu-trigger')}
              onClick={(evenement) => toggleSousMenu('ordre', evenement)}
            >
              L'Ordre <i className="fas fa-chevron-down submenu-toggle"></i>
            </Lien>
            <ul className="submenu" ref={ordreRef}>
              <li>
                <Lien href="/association#qui-sommes-nous">A propos</Lien>
              </li>
              <li>
                <Lien href="/demarches">Démarches</Lien>
              </li>
              <li>
                <Lien href="/services">Services</Lien>
              </li>
              <li>
                <Lien href="/documents">Documents</Lien>
              </li>
            </ul>
          </li>

          <li className={`has-submenu${patientsActif ? ' active open' : ''}`}>
            <Lien
              href="#"
              className={classeLien(patientsActif, 'submenu-trigger')}
              onClick={(evenement) => toggleSousMenu('patients', evenement)}
            >
              Les Patients <i className="fas fa-chevron-down submenu-toggle"></i>
            </Lien>
            <ul className="submenu" ref={patientsRef}>
              <li>
                <Lien href="/patients-info">Informations</Lien>
              </li>
              <li>
                <Lien href="/doleance">Doléances</Lien>
              </li>
            </ul>
          </li>

          <li>
            <Lien href="/evenements" className={classeLien(pathname === '/evenements')}>
              Événements
            </Lien>
          </li>
          <li>
            <Lien href="/actualites" className={classeLien(pathname === '/actualites')}>
              Actualités
            </Lien>
          </li>
          <li>
            <Lien href="/annuaire" className={classeLien(pathname === '/annuaire')}>
              Annuaire
            </Lien>
          </li>
          <li>
            <Lien href="/contact" className={classeLien(pathname === '/contact')}>
              Contact
            </Lien>
          </li>
        </ul>

        <div className="mobile-actions">
          <button type="button" className="btn btn-signup">
            S'inscrire
          </button>
          <button type="button" className="btn btn-login">
            Mon compte
          </button>
        </div>
      </nav>

      <div className="header-actions">
        <button type="button" className="btn btn-signup">
          S'inscrire
        </button>
        <button type="button" className="btn btn-login">
          Mon compte
        </button>
      </div>
    </header>
  );
}
