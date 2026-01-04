import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskArea from "../components/TaskArea";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ProjectDashboard = () => {
  const { user } = useUser();
  const firebase = useFirebase();
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [phases, setPhases] = useState([]);
  const [activePhaseId, setActivePhaseId] = useState(null);

  useEffect(() => {
    if (!user || !projectId) return;

    const loadData = async () => {
      const proj = await firebase.handleViewOneProject(user, projectId);
      const phaseList = await firebase.handleViewPhases(user, projectId);
      setProject(proj);
      setPhases(phaseList);
      if (phaseList.length) setActivePhaseId(phaseList[0].id);
    };

    loadData();
  }, [user, projectId]);

  if (!project) return <><Loader/></>

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100">
      <Sidebar />

      <main className={`flex-1 p-8 overflow-y-auto transition-all duration-300`}>
        
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            {project.projectName}
          </h1>

        {/* PHASE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {phases.map((phase) => (
            <div
              key={phase.id}
              onClick={() => setActivePhaseId(phase.id)}
              className={`cursor-pointer rounded-xl p-4 border transition
                ${
                  activePhaseId === phase.id
                    ? "bg-purple-800 border-purple-500"
                    : "bg-purple-900 border-purple-800 hover:bg-purple-800"
                }`}
            >
              <div className="text-sm text-purple-300">
                Phase {phase.order}
              </div>
              <div className="text-lg font-semibold mt-1">
                {phase.phaseName}
              </div>
              
            </div>
          ))}
        </div>

        {/* TASK AREA */}
        {activePhaseId && (
          <TaskArea projectId={projectId} phaseId={activePhaseId} />
        )}
      </main>
    </div>
  );
};

export default ProjectDashboard;
