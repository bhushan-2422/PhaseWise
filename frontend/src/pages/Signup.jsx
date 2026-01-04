import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Signup = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { user, loading } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      await firebase.signupUser(email, password);
      navigate("/signin", { replace: true });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      await firebase.signupWithGoogle();
      navigate("/userhome");
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
            Create your <span className="text-green-400">account</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            No fluff. Just get started.
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

        {/* Primary CTA */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-500 via-purple-500 to-violet-600 px-4 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50 transition"
        >
          Sign up
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google Signup */}
        <button
          onClick={signupWithGoogle}
          className="w-full rounded-xl border border-white/15 bg-[#0b0f14] px-4 py-3 text-sm font-medium text-white hover:border-purple-500 transition"
        >
          Sign up with Google
        </button>

        {/* Sign in link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-green-400 hover:text-green-300 underline underline-offset-4"
          >
            Sign in
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

export default Signup;
