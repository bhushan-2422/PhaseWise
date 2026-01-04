import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";
import AddNewTask from "./AddNewTask";

const TaskArea = ({ projectId, phaseId }) => {
  const { user } = useUser();
  const firebase = useFirebase();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    if (!user || !projectId || !phaseId) return;

    const fetchTasks = async () => {
      setLoading(true);
      setTasks([]);
      const res = await firebase.handleViewTask(user, projectId, phaseId);
      setTasks(res);
      setLoading(false);
    };

    fetchTasks();
  }, [user, projectId, phaseId]);

  if (loading) {
    return <div className="text-purple-300">Loading tasks…</div>;
  }

  const onDelete = async (taskId) => {
    try {
      await firebase.handleDeleteTask(user, projectId, phaseId, taskId);
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    } catch (e) {
      console.error("error while deleting task : ", e);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        )
      );

      await firebase.handleTaskComplete(user, projectId, phaseId, task.id);
    } catch (e) {
      console.error(e);
      alert("Failed to update task status");
    }
  };

  return (
    <div>
      
      {/* FOOTER */}
      <div className="mt-6 flex justify-between items-center text-purple-100 font-bold">
        <span>Deadline: — </span>
        <button
          className={`px-4 py-2 rounded-lg transition ${
            showAddTask
              ? "bg-purple-800 cursor-not-allowed opacity-60"
              : "bg-purple-700 hover:bg-purple-600"
          }`}
          onClick={() => setShowAddTask(true)}
          disabled={showAddTask}
        >
          Add Task
        </button>
      </div>
      <br />
       {/* ADD TASK FORM */}
      {showAddTask && (
        <div className="mt-6 animate-fadeIn">
          <AddNewTask
            projectId={projectId}
            phaseId={phaseId}
            onClose={() => setShowAddTask(false)}
            onTaskAdded={(task) => setTasks((prev) => [task, ...prev])}
          />
        </div>
      )}
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg- border rounded-xl p-4 hover:bg-purple-800 transition relative"
          >
            {/* DELETE BUTTON */}
            <button
              className="absolute top-2 right-2 font-bold border px-2 py-1 rounded-2xl bg-fuchsia-950 hover:text-red-400"
              onClick={() => onDelete(task.id)}
            >
              ✕
            </button>

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-1">{task.taskTitle}</h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-purple-300 mb-3">
              {task.taskDescription}
            </p>

            {/* META */}
            <div className="text-xs text-purple-400 flex justify-between items-center">
              <span className="text-blue-200 font-bold">
                {task.createdBy === "ai" ? "AI Generated" : "User Added"}
              </span>
              <span>
                {task.createdAt?.toDate
                  ? task.createdAt.toDate().toLocaleDateString()
                  : ""}
              </span>
            </div>

            {/* COMPLETE */}
            <div className="mt-3 flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task)}
                className="accent-purple-500 cursor-pointer"
              />

              <span className="text-sm">
                {task.completed ? "Completed" : "Mark as complete"}
              </span>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default TaskArea;
