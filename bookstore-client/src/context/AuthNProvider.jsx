import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mern-bookstore-9efab.firebaseapp.com",
  projectId: "mern-bookstore-9efab",
  storageBucket: "mern-bookstore-9efab.appspot.com",
  messagingSenderId: "601412716548",
  appId: "1:601412716548:web:0acb8a2e64712228d20d51",
};
const app = initializeApp(firebaseConfig);

export const AuthNContext = createContext();
const authN = getAuth(app);

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
