import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import UserHomepage from "./pages/UserHomepage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Public landing */}
      <Route path="/" element={<Home />} />

      {/* Protected */}
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <UserHomepage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
