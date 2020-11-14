import './App.css';
import Projects from './components/Projects';
import Tasks from './components/Tasks';

//Components
import ProjectForm from './components/todolist';

const App = () => {
  return (
    <div className="App">
      <header className="bigtext">Todoing by Michael Riccio</header>
      <div className="center">
        <Projects/>
        <Tasks/>
      </div>
      <footer className="bigtext">Made with HTML/CSS/JS/REACT</footer>
    </div>
  );
}

export default App;
