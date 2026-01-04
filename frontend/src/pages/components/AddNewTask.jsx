import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useFirebase } from "../../context/Firebase";


const AddNewTask = ({ projectId, phaseId, onClose, onTaskAdded }) => {
  const { user } = useUser();
  const firebase = useFirebase();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!taskTitle.trim()) return alert("Task title required");

    try {
      setLoading(true);
      const taskRef = await firebase.handleAddTask(
        user,
        projectId,
        phaseId,
        {
          taskTitle,
          taskDescription,
        }
      );

      // optimistic UI
      onTaskAdded({
        id: taskRef.id,
        taskTitle,
        taskDescription,
        completed: false,
        createdBy: "user",
        createdAt: new Date(),
      });

      onClose();
    } catch (e) {
      console.error(e);
      alert("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-purple-900 border border-purple-800 rounded-xl p-5 shadow-lg
                    transform transition-all duration-300 scale-100 opacity-100">
      <h3 className="text-lg font-semibold mb-4">Add New Task</h3>

      <input
        type="text"
        placeholder="Task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="w-full mb-3 px-3 py-2 rounded bg-purple-950 border border-purple-800
                   text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <textarea
        placeholder="Task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded bg-purple-950 border border-purple-800
                   text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
        rows={3}
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded bg-purple-800 hover:bg-purple-700 transition"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 transition"
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </div>
    </div>
  );
};

export default AddNewTask;
