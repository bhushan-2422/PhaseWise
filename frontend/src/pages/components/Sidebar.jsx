import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const {user, signoutUser} = useUser()
  
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-purple-900 to-purple-950 text-purple-100 flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-wide">
        PhaseWise
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <button
          onClick={() => navigate("/")}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Profile
        </button>
        <button
          onClick={() => navigate("/userhome")}
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          My Projects
        </button>
      </nav>

      <div className="p-4">
        <button className="w-full px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition" onClick={signoutUser }>
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
