import { useState } from "react";
import "./App.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes> 
    </>
  );
}

export default App;


    