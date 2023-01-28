import { Navigate, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  HomePage,
  LanguageWidget,
  NavBar,
  PortfolioPage,
  SkillsPage,
} from './components';

import Particles from './components/ParticlesBackground';
import './assets/scss/style.scss';
import { LanguageProvider } from './context';

const App = () => {
  return (
    <LanguageProvider>
      {/*<Cursor />*/}
      <Particles />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<AboutPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;
