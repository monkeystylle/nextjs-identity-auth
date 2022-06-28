import { createContext, useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { userInfo } from 'os';

interface AppContextInterFace {}

interface ILayout {
  children: React.ReactNode;
}

interface AuthContextInterface {
  user: any;
  login: () => any;
  logout?: () => any;
  authReady?: boolean;
}

export const AuthContext = createContext<AuthContextInterface | null>({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

const AuthContextProvider = ({ children }: ILayout) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    netlifyIdentity.on('login', user => {
      setUser(user);
      netlifyIdentity.close();
      console.log('LOGIN EVENT');
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
    });

    //init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    user: user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
