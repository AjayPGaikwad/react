
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React , {useState} from 'react' ;
import Alert from './Components/Alert';
// import{
//       BrowserRouter as Router ,
//       Routes,
//       Link,
//       Route} from "react-router-dom";

function App() {
     
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{

    setAlert({ message:message,type:type })

    setTimeout(() => {

      setAlert(null);
      
    }, 1500);


  }

  let toggleMode =()=>{
   
    if(mode ===  'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      document.body.style.color='white';
      showAlert("Dark Mode Enabled","Succses")
   
      // setInterval(() => {
      //   document.title = 'Share Your FeedBack';
      // }, 2000);
      // setInterval(() => {
        document.title = 'TextUtils-DarkMode';
      // }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled","Succses")
      document.title = 'TextUtils - LightMode';
     
    }
  }
     
  return (

    <>
    
  {/* <Navbar title ="TextUtils" about="About" mode ={mode} toggleMode = {toggleMode} />
  <div className="container my-3">
  
  
  <Routes>
  <Route path="/about" element={<About />} />
  
  < Route path="/"
  </Routes>
</div> */}
  {/* //fix syntax */}
      {/* <Router> */}
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert ={alert}/>
        <div className="container my-3">
        <TextForm heading="Enter the text to analyse: " mode={mode} showAlert={showAlert}/>
          {/* <Routes>
            <Route path="/" element={<TextForm textarea="Enter the text to analyze" />} />
            <Route path="/About" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
