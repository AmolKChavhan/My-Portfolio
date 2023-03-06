import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import About from './Component/About';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Footer from './Component/Footer';
import './main.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
