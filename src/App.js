import "./App.css";
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Header from "./components/Header";
import { SignedIn } from "@clerk/clerk-react";

// import './tailwind.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Disney-Clone" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
