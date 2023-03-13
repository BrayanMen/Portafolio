import './App.css';
import NavBar from './Componets/NavBar.jsx';
import Home from './Componets/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import About from './Componets/About';
import Skill from './Componets/Skill';
import Proyectos from './Componets/Proyectos';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/projects' element={<Proyectos/>}/>
        <Route path='/about-me' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
