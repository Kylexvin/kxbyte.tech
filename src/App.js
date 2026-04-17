import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;