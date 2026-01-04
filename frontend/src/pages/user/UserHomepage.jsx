import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const UserHomepage = () => {
  const { user } = useUser();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await firebase.handleViewAllProjects(user);
        setProjects(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [user]);

  const deleteProject = async (projectId) => {
    const ok = window.confirm("Are you sure you want to delete this?");

    if (!ok) return;

    setLoading(true)
    await firebase.handleDeleteProject(user, projectId)
    setProjects((prev) => prev.filter((t) => t.id !== projectId));
    setLoading(false)
  }

  if (!user) return <div className="text-white p-6">Not logged in</div>;
  if(loading) return <><Loader/></>

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <div className="text-4xl font-bold tracking-wide px-10 py-10">
        <Link to={'/'}>
        <span className="text-green-400">&lt;Phase</span>
        <span className="text-white">Wise</span>
        <span className="text-green-400">/&gt;</span>
        </Link>
        
      </div>
      <div className=" text-gray-200 px-30 py-10">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-green-500">
            Hello, <span className="text-white">{user.email}</span>
          </h1>
          <p className="text-gray-400 mt-1">Welcome back to PhaseWise!</p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              Get started
            </h2>

            {/* CREATE PROJECT */}
            <div
              onClick={() => navigate("/create")}
              className="cursor-pointer bg-purple-900 border border-2 rounded-xl p-5
                       hover:border-yellow-500 transition"
            >
              <h3 className="text-lg font-medium mb-1">Create a new project</h3>
              <p className="text-sm text-gray-400">
                Use AI to generate a structured project plan
              </p>
            </div>

            {/* OPTIONAL SECOND CARD */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-5">
              <h3 className="text-lg font-medium mb-1">
                Continue where you left off
              </h3>
              <p className="text-sm text-gray-400">
                Open an existing project and resume work
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2">
            {/* SEARCH */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search projects"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2
                         text-sm text-gray-200 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* PROJECTS LIST */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-700 text-sm text-gray-400">
                Projects and workspaces
              </div>

              {projects.length === 0 ? (
                <div className="p-5 text-gray-400">No projects yet.</div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="px-5 py-4 border-b border-gray-800 last:border-none
                             cursor-pointer hover:bg-[#222] transition flex justify-between"
                  >
                    <div onClick={() => navigate(`/projects/${project.id}`)}>
                      <div className="font-medium">{project.projectName}</div>
                      <div className="text-xs text-gray-400">
                        Click to open project
                      </div>
                    </div>
                    <div className="text-red-400 font-bold cursor-pointer"><button onClick={() => deleteProject(project.id)}>Delete</button></div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomepage;
