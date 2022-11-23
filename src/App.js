import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./MyCompponents/AddTodo";
import MyTodosHeroSection from "./MyCompponents/MyTodosHeroSection";

import Navbar from "./MyCompponents/Navbar";
function App() {
  console.log("app rendering");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/mytodo" element={<MyTodosHeroSection />} />
      </Routes>
    </>
  );
}

export default App;
