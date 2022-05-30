
import './App.css';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    
      <Navbar/>
      {/* <Routes >
    <Route path="home" element={<Header />} />
      <Route path="about" element={<Profile />} />
      <Route path="contact" element={<Footer />} />
      <Route path="project" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
    </Routes> */}
    
    <Header/>
      <Profile/>
      <Projects/>
      <Skills/>
      <Footer/>
    
     
    </div>
  );
}

export default App;
