
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React , {useState} from 'react';



function App() {
  const[mode , setMode] = useState("light")
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = "#010636"
    }
  }
  return (
    <>
     <Navbar title="Textutils" home ="Home" mode = {mode} toggleMode={toggleMode}/>
     <div className="container my-3">
      
      <Textform heading = "Enter text to analyse" mode = {mode}/>
      {/* <About/> */}
     </div>
    </>
  ); 
}

export default App;


