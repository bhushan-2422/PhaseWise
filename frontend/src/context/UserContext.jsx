import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
import { app } from "./FirebaseApp";

const UserContext = createContext(null);
const auth = getAuth(app);

// ✅ custom hook
export const useUser = () => {
  return useContext(UserContext);
};

// ✅ Provider (capital letter is REQUIRED)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 👈 correct initial state

  useEffect(() => {
    return onAuthStateChanged(auth, (user) =>{
        if(user){
            setUser(user)
        }else{
            console.log("you are logged out")
            setUser(null)
        }
    })
  }, []);

  const signoutUser = () =>{
    return signOut(auth)
  }

  return (
    <UserContext.Provider value={{ user, signoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
