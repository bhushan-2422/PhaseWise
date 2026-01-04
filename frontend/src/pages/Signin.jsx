import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { user, loading } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      await firebase.signinUser(email, password);
      navigate("/userhome", { replace: true });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl shadow-xl p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">
            Welcome <span className="text-green-400">back</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Sign in to continue where you left off.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
          />
        </div>

        {/* CTA */}
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-500 via-purple-500 to-violet-600 px-4 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50 transition"
        >
          Sign in
        </button>

        {/* Signup link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-400 hover:text-green-300 underline underline-offset-4"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

const Input = ({ label, type, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-gray-400">{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl bg-[#0b0f14] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
    />
  </div>
);

export default Signin;
