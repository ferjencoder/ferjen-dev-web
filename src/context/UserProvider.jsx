//import { navBarLinksFetch } from '../thunks/thunks';
import { UserContext } from './UserContext';

const user = {
  uid: 123,
  name: 'Tony',
  email: 'ironman@email.com',
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
      {children}
    </UserContext.Provider>
  );
};
