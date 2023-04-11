//import logo from './logo.svg';
import {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//import './style.css';

function App() {
  document.title = "Home";
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      // document.title="Home-DarkMode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // document.title="Home-LightMode";
    }
  }
  return (
    <>
    {/* <Navbar/>
    <TextBar/>
<About/> */}
      <Router>
        <Navbar title="" about="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-4" mode={mode} toggleMode={toggleMode}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextBar mode={mode} toggleMode={toggleMode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

