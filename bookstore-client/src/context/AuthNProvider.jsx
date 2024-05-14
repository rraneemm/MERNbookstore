import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
export const AuthNContext = createContext();
const authN = getAuth(app);

const AuthNProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(authN, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(authN, googleProvider);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(authN, email, password);
  };
  const logOut = () => {
    return signOut(authN);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authN, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = { user, createUser, loginWithGoogle, login, logOut };

  return (
    <AuthNContext.Provider value={authInfo}>{children}</AuthNContext.Provider>
  );
};

export default AuthNProvider;
