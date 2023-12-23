import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from 'react-router-dom';
import Projects from "./features/Projects/Projects";

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/> }/>
    <Route path='/projects' element={<Projects/> }/>
        
    </Routes>
    </>
  );
}

export default App;
