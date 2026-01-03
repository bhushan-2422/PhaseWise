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

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [phases, setPhases] = useState([]);
  const [activePhaseId, setActivePhaseId] = useState(null);

  useEffect(() => {
    if (!user || !projectId) return;

    const fetchProject = async () => {
      try {
        setLoading(true);

        const res = await firebase.handleViewOneProject(user, projectId);
        setProject(res);

        const phaseList = await firebase.handleViewPhases(user, projectId);
        setPhases(phaseList);
      } catch (e) {
        console.error("error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [user, projectId]);

  if (loading) return <div>loading project...</div>;
  if (!project) return <div>project not found</div>;

  return (
    <div>
      <Sidebar />
      <h1>{project.projectName}</h1>

      {phases.map((phase) => (
        <div key={phase.id}>
          <h2>
            {phase.order} - {phase.phaseName}
          </h2>
          <div>{phase.phaseGoal}</div>
          <button onClick={() => setActivePhaseId(phase.id)}>
            View Tasks
          </button>
        </div>
      ))}

      {activePhaseId && (
        <TaskArea phaseId={activePhaseId} projectId={projectId} />
      )}
    </div>
  );
};

export default ProjectDashboard;
