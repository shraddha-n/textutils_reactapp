import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,SetMode] =useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert=(type,msg)=>{
    setAlert({
      "type":type,
      "msg":msg
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  
  const toggleMode =()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = "white"
      SetMode("light");
      showAlert("success","light mode enable");
    }else{
      SetMode("dark");
      document.body.style.backgroundColor = "#123568"
      showAlert("success","dark mode enable");

    }
  }
  
  return (
    <>
    <div>
      <Navbar title="TextUtils2" aboutText="AboutText" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    </div>
    <Routes>
        <Route path="/" element={<Textfrom showAlert={showAlert} heading="Enter Text Here" mode={mode}/>} />
        <Route path="about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
