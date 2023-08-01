import {  NavLink, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import Login from "./Login.js";
import Signup from "./Signup.js"
import Picks from "./Picks.js"
import About from "./About.js";
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading,setIsLoading]=useState(false);


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
  //   fetch('/logout',{
  //     method:'DELETE'
  // })
  // .then(()=>{
  //     setIsAuthenticated(false)
  //     setUser(null)
  //     navigate("/Signin")
      
  //   //   debuggerSess
  //     if(user)
  //       console.log("ff")
  //   else
  //       console.log("hey, hey")

  // })

  }


  return (
    
    
    <div >
                  <div hidden={!isLoading} className='loader'></div>

              <div name="navBars">
            <nav className="navLinks">
                <NavLink  to="/">My Picks</NavLink>
                <NavLink  to="/">Leader Board</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
            </div>
      <div >{email}</div><button onClick={onLogout} >LOGOUT</button>
      <Routes>
          <Route path="/Signin" element={<Login user={user} setIsLoading={setIsLoading} navigate={navigate} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />
            {/* <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/> */}

          <Route path="/Signup" element={<Signup user={user} navigate={navigate} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />

          <Route path="/About" element={<About setIsLoading={setIsLoading} navigate={navigate}/>} />

        <Route path="/" element={<Picks  setIsLoading={setIsLoading} user={user}/>}/>
          {/* <Picks/> */}
         
      </Routes>
   
    
    </div>

  );
}

export default App;
