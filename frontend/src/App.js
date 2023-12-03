import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home1"
import Signup from './pages/Signup1';
import Login from './pages/Login1';
import Creater from './pages/Creater';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import RecipeDetail from './components/RecipeDetail';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile  username="khushi"/>}/>
        <Route path="/createrecipe" element={<Creater/>}/>
        <Route path="/recipe/:id" element={<RecipeDetail/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
