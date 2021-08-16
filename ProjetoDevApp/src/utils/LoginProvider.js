import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const LoginContext = React.createContext({});

export default function LoginProvider(props) {
  const [user, setUser] = useState(null);

  const onAuthStateChanged = user => {
    setUser(user);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  return (
    <LoginContext.Provider value={user}>{props.children}</LoginContext.Provider>
  );
}
