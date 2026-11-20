import Lien from '../components/Lien';
import PageMeta from '../components/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta titre="Page introuvable - SORMD" />
      <main className="page-content">
        <div className="container">
          <h1>Page introuvable</h1>
          <p>La page que vous recherchez n'existe pas.</p>
          <Lien href="/" className="btn primary">
            Retour à l'accueil
          </Lien>
        </div>
      </main>
    </>
  );
}
