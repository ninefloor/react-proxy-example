import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
