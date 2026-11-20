import { Outlet, useLocation } from 'react-router-dom';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import Header from './Header';
import ScrollToHash from './ScrollToHash';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {pathname === '/' ? <CookieBanner /> : null}
      <Footer />
      <ScrollToHash />
    </>
  );
}
