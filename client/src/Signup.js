import React, {useState} from 'react'


function Signup({navigate, user, setUser, setIsAuthenticated, isAuthenticated}){

    const [formData, setFormData] = useState({
        username:'',
        password:'',
        first_name:'',
        last_name:''
    })
    // var logo = document.getElementById("logo")
    const [errors, setErrors] = useState([])
    

    const [confirm, setConfirm] = useState("")

    

    const { username, password,first_name,last_name} = formData

    function goToLogon(){
      navigate('/Signin')

    }


    function onSignup(e){
        e.preventDefault()
        fetch(`/signup`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
          })
          .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                console.log(user)
                setUser(user)
                setIsAuthenticated(true)
                navigate("/About")
               
              })
              
            } else {
              res.json()
              .then(json => setErrors(json.errors))
            }
          })
  
    }

   

    const handleChange = (e) => {
      console.log(e.target)
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        //setConfirm( [name]: value)
      }

      const handleChangeConfirm = (e)=>{
        setConfirm(e.value)
      }
  
     return(
        <div style={{'position': "relative","top":"100px"}}className="login" >
          <h1 className='form-title'>Sign Up</h1>
            <div className="loginBackground" ></div>
            <form className="loginForm"  onSubmit={onSignup}>
            <div>
                    <input className="inputBox" type='text' name='username' placeholder="Email Address" value={username} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox" type='text' name='first_name' placeholder="First Name" value={first_name} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox" type='text' name='last_name' placeholder="Last Name" value={last_name} onChange={handleChange} />
                </div>
                <div>
                <input className="inputBox"  type='password' name='password' placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <input className="inputBox"  type='password' name='confirm' placeholder="Confirm Password" value={confirm} onChange={handleChangeConfirm} />
                <div>

                </div>
                <input className="button"  type='submit' value='SIGN UP' /> 
                <input onClick={goToLogon} className="button" type="button"  value='SIGN IN INSTEAD' /> 
            </form>       
        </div>
    )
 
 
 
 }
 export default Signup;