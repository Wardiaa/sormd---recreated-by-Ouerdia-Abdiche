import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Actualites from './pages/Actualites';
import Annuaire from './pages/Annuaire';
import Application from './pages/Application';
import Association from './pages/Association';
import Contact from './pages/Contact';
import Demarches from './pages/Demarches';
import Documents from './pages/Documents';
import Doleance from './pages/Doleance';
import Evenements from './pages/Evenements';
import MentionsLegales from './pages/MentionsLegales';
import NotFound from './pages/NotFound';
import PatientsInfo from './pages/PatientsInfo';
import PlanDuSite from './pages/PlanDuSite';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Services from './pages/Services';

function RouteInconnue() {
  return <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="association" element={<Association />} />
        <Route path="demarches" element={<Demarches />} />
        <Route path="services" element={<Services />} />
        <Route path="documents" element={<Documents />} />
        <Route path="patients-info" element={<PatientsInfo />} />
        <Route path="doleance" element={<Doleance />} />
        <Route path="evenements" element={<Evenements />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="annuaire" element={<Annuaire />} />
        <Route path="contact" element={<Contact />} />
        <Route path="telecharger-app" element={<Application />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="plan-du-site" element={<PlanDuSite />} />
        <Route path="*" element={<RouteInconnue />} />
      </Route>
    </Routes>
  );
}
