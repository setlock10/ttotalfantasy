import {  Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import Login from "./Login";
import Picks from "./Picks.js"
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(()=>{

    fetch('/me')
    .then(res=>res.json())
    .then(data=> {
      console.log(data.error)
      if(data.error !== "Not authorized"){
        setUser(data)
        setIsAuthenticated(true)

        navigate('/')
      }
      else{
        console.log("go to logon")
        navigate('/Logon')
      }
      
    })


  },[])


  return (
    
    
      <Routes>
          <Route path="/Logon" element={<Login/>} />
            {/* <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/> */}
          

        <Route path="/" element={<Picks/>}/>
          {/* <Picks/> */}
         
      </Routes>
   
    // <div>
    //   <Picks/>
    // </div>

  );
}

export default App;
