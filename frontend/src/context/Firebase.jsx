import { createContext } from "react";
import { app } from "./FirebaseApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useContext } from "react";

const firebaseAuth = getAuth(app);
const FirebaseContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signupWithGoogle = () =>{
    return signInWithPopup(firebaseAuth, googleProvider)
  }
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider value={{ signupUser, signinUser, signupWithGoogle }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
