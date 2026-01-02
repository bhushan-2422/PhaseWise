import {getAuth , createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from 'react'
import './App.css'
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

    </Routes>
  )
}

export default App
