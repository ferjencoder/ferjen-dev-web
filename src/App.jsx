import { Link, Navigate, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  Cursor,
  HomePage,
  NavBar,
  SkillsPage,
} from './components';

import Particles from './components/ParticlesBackground';

import './assets/scss/style.scss';

const App = () => {
  return (
    <>
      <Cursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Particles />
    </>
  );
};

export default App;
