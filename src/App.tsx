import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import EuropePage from './pages/EuropePage';
import JapanPage from './pages/JapanPage';
import CardsPage from './pages/CardsPage';
import LuggagePage from './pages/LuggagePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EuropePage />} />
        <Route path="/japan" element={<JapanPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/luggage" element={<LuggagePage />} />
        <Route path="*" element={<EuropePage />} />
      </Routes>
    </>
  );
}

export default App;
