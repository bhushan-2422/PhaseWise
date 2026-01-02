import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Signup = () => {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, loading} = useUser()
  const navigate = useNavigate()


  const handleSignup = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      await firebase.signupUser(email, password);
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

      <button onClick={handleSignup}>Signup</button>

      <br /><br />

      <button onClick={firebase.signupWithGoogle}>
        Signup with Google
      </button>
    </div>
  );
};

export default Signup;
