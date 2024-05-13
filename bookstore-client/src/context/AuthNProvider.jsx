import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import appInstance from "../firebase/firebase.config";

export const AuthNContext = createContext();
const authN = getAuth(appInstance);

const AuthNProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(authN, email, password);
  };

  const authInfo = { createUser };
  return;
  <AuthNContext.Provider value={authInfo}>{children}</AuthNContext.Provider>;
};

export default AuthNProvider;
