//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
//import './style.css';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#121212';
      document.body.style.color='white';
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
        <Navbar title="" about="About" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-4" mode={mode} toggleMode={toggleMode}>
        <TextBar mode={mode}  toggleMode={toggleMode}/>
        </div>
    </>
    );
}

export default App;
