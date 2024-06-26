import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
        <Navbar/>
            <section id="home">
                <Intro/>
            </section>
            <section id="about">
               <Skills/>
            </section>
            <section id="projects">
            <Projects/>
            </section>
    </div>
  );
}

export default App;
