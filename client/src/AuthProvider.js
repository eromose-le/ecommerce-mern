import React, { useLayoutEffect, useState } from 'react';

// CONTEXT
const UserContext = React.createContext(null);

// HOOKS
const AuthProvider = (props) => {
  const [user, setUser] = useState([]);

  useLayoutEffect(() => {
    console.log('#context RAN!!');
    localStorage.setItem('persist:root', {
      user: '{"currentUser":null,"isFetching":false,"error":false}',
      cart: '{"products":[],"quantity":0,"total":0}',
      _persist: '{"version":1,"rehydrated":true}'
    });
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, AuthProvider };
