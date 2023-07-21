import {  Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import Login from "./Login.js";
import Signup from "./Signup.js"
import Picks from "./Picks.js"
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");


  useEffect(()=>{

    fetch('/me')
    .then(res=>res.json())
    .then(data=> {
      console.log(data.error)
      if(data.error !== "Not authorized"){
        setUser(data)
        setEmail(data.username)
        setIsAuthenticated(true)
        console.log(data)

        navigate('/')
      }
      else{
        console.log("go to logon")
        navigate('/Signup')
      }
      
    })


  },[])

  function onLogout(){
    fetch('/logout',{
      method:'DELETE'
  })
  .then(()=>{
      setIsAuthenticated(false)
      setUser(null)
      navigate("Logon")
      
    //   debuggerSess
      if(user)
        console.log("ff")
    else
        console.log("hey, hey")

  })

  }


  return (
    
    
    <div >
      <div >{email}</div><button onClick={onLogout} >LOGOUT</button>
      <Routes>
          <Route path="/Logon" element={<Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />
            {/* <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/> */}

          <Route path="/Signup" element={<Signup user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />

          

        <Route path="/" element={<Picks/>}/>
          {/* <Picks/> */}
         
      </Routes>
   
    
    </div>

  );
}

export default App;
