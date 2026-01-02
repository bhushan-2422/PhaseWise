import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AuthRoute from "./routes/AuthRoute";
import UserHomepage from "./pages/user/UserHomepage";
import CreateProject from "./pages/user/CreateProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route
          path="/userhome"
          element={
            <ProtectedRoute>
              <UserHomepage/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateProject/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
