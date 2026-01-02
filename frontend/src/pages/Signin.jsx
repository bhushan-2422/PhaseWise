import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useUser } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Signin = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, loading} = useUser()
  const navigate = useNavigate()


  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      await firebase.signinUser(email, password);
        navigate("/userhome", { replace: true }); // ONLY HERE

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <label>Email</label><br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <label>Password</label><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default Signin;
