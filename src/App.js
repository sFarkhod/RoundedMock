import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Course from './Components/Course';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Partener from './Components/Partener';
import Profeession from './Components/Profeession';
import Sertificate from './Components/Sertificate';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Profeession/>
      <Course/>
      <Partener/>
      <News/>
      <Sertificate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
