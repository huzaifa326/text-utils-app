import './App.css';
import NavBar from './components/NavBar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

//==============================
function App() {
  
  const [mode, setMode] = useState('light');

  const toggleMode= ()=>{           //jb navbar me mode wla button click kry gy tu yh run hoga
   if( mode == 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#1c5587' //042743   
     showAlert('Dark-Mode is Enabled', 'success')
     //============================================
     document.title= 'Huzzi-App (DarkMode)'             //kisi button ya page pr jay tu title change ho jay
     //setInterval(()=>{                                (is code se har 15 sec bad title blink kry ga.)
    //  document.title= 'Huzzi-App (Instal This app)'
     //    }, 1500)
    //=============================================
    }
     else if ( mode == 'dark'){
     setMode('light');
     document.body.style.backgroundColor = 'white'
     showAlert('Light-Mode is Enabled', 'success')       
     document.title= 'Huzzi-App (LigthMode)'            //kisi button ya page pr jay tu title change ho jay
     }
    }
  //===============================================================
  const [alert, setAlert] = useState(null);

   const showAlert = (message,type)=>{
   setAlert({
    msg: message,
    type: type,
   })
    setTimeout(()=>{          //yh 1 method he jis se alert sirf 2 second(2,000) dikhny ke bad bnd ho jay ga
    setAlert(null)
       }, 2000)
   }
  //===============================================================
  return (
  <>
     
           < NavBar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
           < Alert  alert={alert}/>
           <div className="container my-3">
      
          < TextForm showAlert={showAlert} title="Enter Text Below:" mode={mode}  />
        
        </div>  
 </>
  );
}

export default App;
