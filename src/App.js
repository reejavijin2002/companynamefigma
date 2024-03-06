import React from "react";
import Login from "./components/login/Login";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companyname from "./components/companyname/Companyname";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/companyname" element={<Companyname/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
