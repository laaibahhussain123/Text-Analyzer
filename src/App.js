import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, {useState } from "react";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#010636";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark mode";
       setInterval(()=>{
        document.title = "Install textutils now"
      },2000)
      setInterval(()=>{
        document.title = "Best Text-analayzer"
      },1500)
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter text to analyse" mode={mode} />} />
          </Routes>

          
        </div>
      </Router>
    </>
  );
}

export default App;
