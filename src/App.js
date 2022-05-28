
import './App.css';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Profile/>
      <Projects/>
      <Skills/>
      <Footer/>
     
    </div>
  );
}

export default App;
