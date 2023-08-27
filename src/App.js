import './App.css';
// import Home from './components/Home';
// import Nav from './components/Nav';
import React from 'react';
import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
import { Routes, Route} from 'react-router-dom';
// import './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/projects' element={<Projects/>}/> */}
        {/* <Route path='/skills' element={<Skills/>}/> */}
      </Routes>
      {/* <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
