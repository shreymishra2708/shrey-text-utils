import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() =>{
     setAlert(null);
   },1500);
  }
   const toggleMode = () =>{
     if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been enabled","success");
     }
   }
  return (
    <>
    <BrowserRouter>
   <Navbar title="ShreyTextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">  
   <Routes>
   <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
         
{ /*<TextForm showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}/> */}


   </div>
   </BrowserRouter>

   </>
  );     
}

export default App; 
