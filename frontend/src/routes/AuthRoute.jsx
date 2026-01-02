import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const AuthRoute = ({ children }) => {
  const { user, loading } = useUser;

  if (loading) return null; // wait for auth

  if (user) {
    return <Navigate to="/userhome" replace />;
  }

  return children;
};

export default AuthRoute;
