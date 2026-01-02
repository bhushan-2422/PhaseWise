import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./FirebaseApp";

const UserContext = createContext(null);
const auth = getAuth(app);

// custom hook
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔥 THIS IS CRITICAL

  try{
    onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);      // null or user — both valid
      setLoading(false);          // auth check finished
    });
  }catch(e){
    console.log("error: ",e)
  }

  const signoutUser = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, loading, signoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
