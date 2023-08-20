import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
// import About from './components/About';
// import './components/Projects';
// import './components/Skills';
// import './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <About/> */}
      {/*<Projects/>
      <Skills/>
      <Footer/> */}
    </div>
  );
}

export default App;
