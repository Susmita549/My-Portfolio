import "./App.css";

import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Nav from "./components/Nav";
// import { Route, Routes } from 'react-router-dom';

function App() {
  const {isLight} = useContext(ThemeContext)


  return (
    <div className={`App ${isLight?"light":"dark"}`}>
      <Nav />

      <Header />
      <Profile />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
