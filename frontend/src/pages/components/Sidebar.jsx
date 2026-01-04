import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const {user, signoutUser} = useUser()
  
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-black to-violet-800 text-purple-100 flex flex-col">
      <div className="text-3xl font-bold tracking-wide py-5 px-5">
        <Link to={'/'}>
        <span className="text-green-400">&lt;Phase</span>
        <span className="text-white">Wise</span>
        <span className="text-green-400">/&gt;</span>
        </Link>
        
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
        <button className="border border-4 w-full px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition" onClick={signoutUser }>
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
