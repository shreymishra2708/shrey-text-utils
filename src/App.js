import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
   setAlert({
    msg:message,
    type:type
   })
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
   <Navbar title="ShreyTextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}/> 

{ /* <About/>*/}
   </div>

   </>
  );     
}

export default App; 
