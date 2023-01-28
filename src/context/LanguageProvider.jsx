import { useEffect, useState } from 'react';
import { navBarLinksFetch } from '../thunks/thunks';
import { LanguageContext } from './LanguageContext';

const fetchData = await navBarLinksFetch('en');
const dataFetched = fetchData;

export const LanguageProvider = ({ children }) => {
  const [datos, setDatos] = useState(dataFetched);

  useEffect(() => {
    setDatos(dataFetched);
  }, []);

  return (
    <LanguageContext.Provider value={{ datos }}>
      {children}
    </LanguageContext.Provider>
  );
};
