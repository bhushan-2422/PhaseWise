import React, { useState } from "react";
import axios from "axios";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Loader from "../components/Loader";

const CreateProject = () => {
  const [name, setname] = useState("");
  const [type, setType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [level, setLevel] = useState("");
  const [techstack, setTechstack] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false)

  const firebase = useFirebase();
  const navigate = useNavigate();
  const { user} = useUser();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://phasewise.onrender.com/api/v1/user/gemini", {
        name,
        type,
        deadline,
        level,
        techstack,
        description,
      });

      const { projectId } = await firebase.handleCreateNewProject(
        user,
        res.data.data
      );
      setLoading(false);
      navigate(`/projects/${projectId}`);
    } catch (e) {
      console.error("error:", e.response?.data || e.message);
      setLoading(false);
    } 
  };

  if(loading) return <><Loader/></>

  return (
    <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-xl shadow-xl p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">
            Create New <span className="text-green-400">Project</span>
          </h1>
          <h1 className="text-2xl font-bold text-white">
            Using <span className="text-pink-600">Gemini</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Define your idea clearly. Garbage input = garbage output.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input
            placeholder="Project name"
            value={name}
            onChange={setname}
          />

          <Input
            placeholder="Type (web, mobile, ML, etc.)"
            value={type}
            onChange={setType}
          />

          <Input
            placeholder="Deadline (e.g. 10 Jan 2026)"
            value={deadline}
            onChange={setDeadline}
          />

          <Input
            placeholder="Level (beginner, intermediate, advanced)"
            value={level}
            onChange={setLevel}
          />

          <Input
            placeholder="Tech stack (e.g. MERN)"
            value={techstack}
            onChange={setTechstack}
          />

          <textarea
            className="w-full rounded-xl bg-[#0b0f14] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
            rows={4}
            placeholder="Project description (be specific)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-500 via-purple-500 to-violet-600 px-4 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50 transition"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </div>
    </div>
  );
};

const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className="w-full rounded-xl bg-[#0b0f14] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-300 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
  />
);

export default CreateProject;
