import React, { useState } from "react";
import axios from "axios";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
const CreateProject = () => {
  const [name, setname] = useState("");
  const [type, setType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [level, setLevel] = useState("");
  const [techstack, setTechstack] = useState("");
  const [description, setDescription] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { user, loading, setLoading } = useUser();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/user/gemini", {
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
      navigate(`/projects/${projectId}`);
    } catch (e) {
      console.error("error:", e.response?.data || e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="enter project name"
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={type}
        placeholder="enter type eg. web, mobile app, ml model"
        onChange={(e) => setType(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={deadline}
        placeholder="enter deadline eg. 10 jan 2026"
        onChange={(e) => setDeadline(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={level}
        placeholder="level eg. beginer, intermidiate"
        onChange={(e) => setLevel(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={techstack}
        placeholder="tech stack eg. MERN"
        onChange={(e) => setTechstack(e.target.value)}
      />
      <br />
      <br />
      <textarea
        name="description"
        id="description"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <br />
      <button onClick={handleSubmit}>
        {loading ? "Creating..." : "Submit"}
      </button>
    </div>
  );
};

export default CreateProject;
