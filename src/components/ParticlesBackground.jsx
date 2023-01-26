import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';
import { optionsParticles } from '../data/particles';

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return optionsParticles;
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
