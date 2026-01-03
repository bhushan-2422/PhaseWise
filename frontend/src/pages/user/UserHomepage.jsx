import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

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
        setProjects(res); // res is already an array
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [user, firebase]);

  if (!user) return <p>Not logged in</p>;
  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h2>Your Projects</h2>

      {projects.length === 0 && <p>No projects yet.</p>}

      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            {project.projectName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHomepage;
