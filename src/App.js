import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';


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
           
            </section>
    </div>
  );
}

export default App;
