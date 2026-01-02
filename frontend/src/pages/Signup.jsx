import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const firebase = useFirebase();
  const { user,signoutUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
   navigate('/user')
  }

  const handleSignup = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      await firebase.signupUser(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <label htmlFor="email">Enter email</label><br />
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <label htmlFor="password">Enter password</label><br />
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignup}>Signup</button>
      <br /><br />
      <button onClick={firebase.signupWithGoogle}>
        Signup with Google
      </button>
    </div>
  );
};


export default Signup;
