//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
//import './style.css';

function App() {
  return (
    <>
        <Navbar title="PB-telugu" about="New About"/>
        <div className="container">
        <TextBar/>
        </div>
    </>
    );
}

export default App;
