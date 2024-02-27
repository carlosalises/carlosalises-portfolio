import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {
  return (
    <main>
        <Header />
        <Experience />
        <Education />
        <Projects />
        <Skills />
    </main>
  );
}

export default App;
