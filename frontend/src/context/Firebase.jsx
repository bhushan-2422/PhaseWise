import { createContext } from "react";
import { app } from "./FirebaseApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useContext } from "react";
import {
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getFirestore,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const firebaseAuth = getAuth(app);
const FirebaseContext = createContext(null);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signupWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const handleCreateNewProject = async (user, data) => {
    const ensureUserExists = async (user) => {
      const userRef = doc(firestore, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          createdAt: new Date(),
        });
      }

      return userRef;
    };
    const createProject = async (userRef, data) => {
      const projectRef = await addDoc(collection(userRef, "projects"), {
        projectName: data.projectName,
        createdAt: new Date(),
      });

      return projectRef;
    };

    const storePhasesAndTasks = async (projectRef, phases) => {
      for (const phase of phases) {
        const phaseRef = await addDoc(collection(projectRef, "phases"), {
          phaseName: phase.phaseName,
          order: phase.order,
          phaseGoal: phase.phaseGoal,
          completed: false,
          createdAt: new Date(),
        });

        for (const task of phase.tasks) {
          await addDoc(collection(phaseRef, "tasks"), {
            taskTitle: task.taskTitle,
            taskDescription: task.taskDescription,
            completed: false,
            createdBy: "ai",
            createdAt: new Date(),
          });
        }
      }
    };

    // 1. Ensure user exists
    const userRef = await ensureUserExists(user);

    // 2. Create project
    const projectRef = await createProject(userRef, data);

    // 3. Store phases + tasks
    await storePhasesAndTasks(projectRef, data.phases);
    return {
      projectId: projectRef.id,
      success: true,
    };
  };

  const handleViewAllProjects = async (user) => {
    if (!user) return [];

    const projectsRef = collection(firestore, "users", user.uid, "projects");

    const snapshot = await getDocs(projectsRef);

    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return projects;
  };

  const handleViewOneProject = async (user, projectId) => {
    if (!user || !projectId) {
      throw new Error("Missing required identifiers");
    }

    const ref = doc(firestore, "users", user.uid, "projects", projectId);

    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return null; // explicit and clean
    }

    return {
      id: snap.id,
      ...snap.data(),
    };
  };

  const handleViewPhases = async (user, projectId) => {
    if (!user) return [];
    const phaseRef = collection(
      firestore,
      "users",
      user.uid,
      "projects",
      projectId,
      "phases"
    );
    const q = query(phaseRef, orderBy("order"));
    const snap = await getDocs(q);

    const phases = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return phases;
  };

  const handleViewTask = async (user, projectId, phaseId) => {
    if (!user) return [];
    const taskRef = collection(
      firestore,
      "users",
      user.uid,
      "projects",
      projectId,
      "phases",
      phaseId,
      "tasks"
    );
    const q = query(taskRef, orderBy("createdAt"));
    const snap = await getDocs(q);

    const tasks = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return tasks;
  };

  const handleDeleteProject = async (user, projectId) => {
    if (!user || !projectId) {
      throw new Error("Missing required identifiers");
    }

    const ref = doc(firestore, "users", user.uid, "projects", projectId);
    await deleteDoc(ref);

    return {
      success: true,
    };
  };

  const handleDeleteTask = async (user, projectId, phaseId, taskId) => {
    if (!user || !projectId || !phaseId || !taskId) {
      throw new Error("Missing required identifiers");
    }
    const ref = doc(
      firestore,
      "users",
      user.uid,
      "projects",
      projectId,
      "phases",
      phaseId,
      "tasks",
      taskId
    );
    await deleteDoc(ref);

    return {
      success: true,
    };
  };

  const handleAddTask = async (user, projectId, phaseId, task) => {
    const ref = collection(
      firestore,
      "users",
      user.uid,
      "projects",
      projectId,
      "phases",
      phaseId,
      "tasks"
    );

    const taskref = await addDoc(ref, {
      taskTitle: task.taskTitle,
      taskDescription: task.taskDescription,
      completed: false,
      createdBy: "user",
      createdAt: new Date(),
    });
    return taskref;
  };

  const handleTaskComplete = async (user, projectId, phaseId, taskId) => {
    if (!user || !projectId || !phaseId || !taskId) {
      throw new Error("Missing required identifiers");
    }
    const ref = doc(
      firestore,
      "users",
      user.uid,
      "projects",
      projectId,
      "phases",
      phaseId,
      "tasks",
      taskId
    );

    const snap = await getDoc(ref);
    const current = snap.data().completed;

    await updateDoc(ref, {
      completed: !current,
      updatedAt: serverTimestamp(),
    });

    return {
      success: true,
    };
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUser,
        signinUser,
        signupWithGoogle,

        handleCreateNewProject,

        handleViewAllProjects,
        handleViewOneProject,
        handleViewPhases,
        handleViewTask,

        handleDeleteProject,
        handleDeleteTask,

        handleAddTask,
        handleTaskComplete,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
