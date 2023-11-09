import {  NavLink, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import Login from "./Login.js";
import Leaderboard from "./Leaderboard.js"
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
  const [hasCreatedPicks,setHasCreatedPicks] = useState(false);
  const [teams,setTeams] = useState([]);

  useEffect(()=>{
    console.log(isAuthenticated)
   

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
        //console.log("go to logon")
        navigate('/Signup')
      }
      fetch("./teams")
      .then((r) => r.json())
      .then((data)=>{
          setTeams(data)
      })

      
    })
  

  },[])

  function onLogout(){
    fetch('/logout',{
      method:'DELETE'
  })
  
  .then((r)=>{
    //console.log(r)
      setIsAuthenticated(false)
      setUser(null)
      navigate("/Signin")
      setHasCreatedPicks(false)
      
    //   debuggerSess
      if(user)
        console.log("ff")
    else
        console.log("hey, hey")

  })

  }


  return (
    
    
    <div >
      <div id="header">Team Total Fantasy</div>
                  <div hidden={!isLoading} className='loader'></div>

              <div name="navBars">
            <nav className="navLinks"><span>
                <NavLink  to="/">My Picks</NavLink>
                <NavLink  to="/Leaderboard">Leaderboard</NavLink>
                <NavLink to="/About">About</NavLink>
                <a onClick={onLogout}>Logout</a>
                </span>
            </nav>
            </div>
      <div >{email}</div> 
      <Routes>
          <Route path="/Signin" element={<Login user={user} setIsLoading={setIsLoading} navigate={navigate} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />
            {/* <Login user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/> */}

          <Route path="/Signup" element={<Signup user={user} navigate={navigate} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}  />

          <Route path="/About" element={<About setIsLoading={setIsLoading} navigate={navigate}/>} />
          <Route path="/Leaderboard" element={<Leaderboard teams={teams}/>} />

        <Route path="/" element={<Picks hasCreatedPicks={hasCreatedPicks} setHasCreatedPicks={setHasCreatedPicks} setIsLoading={setIsLoading} teams={teams}user={user}/>}/>
          {/* <Picks/> */}
         
      </Routes>
   
    
    </div>

  );
}

export default App;
