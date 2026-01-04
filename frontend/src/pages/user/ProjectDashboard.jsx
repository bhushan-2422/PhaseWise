import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskArea from "../components/TaskArea";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";
import { useParams } from "react-router-dom";

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

  if (!project) return <div className="text-white p-6">Loading…</div>;

  return (
    <div className="flex h-screen bg-purple-950 text-purple-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">
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
