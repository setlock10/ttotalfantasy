import React, {useState} from 'react'



function Login({ navigate,setIsLoading, user, setUser, setIsAuthenticated, isAuthenticated}){

 
    const [errors, setErrors] = useState([])

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const {username, password} = formData

    function onLogin(e){
        e.preventDefault()


        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setFormData({
                        username:'',
                        password:''
                    })


                    navigate(`/`)
                    setIsAuthenticated(true)
                    setUser(user)
                    // debugger
                    setIsLoading(true)

   
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

      function goToSignUp(){
        navigate('/Signup')

      }
 

    return(
        <div style={{'position': "relative","top":"100px"}}className="login" >
            <h1 className='form-title'>Sign In</h1>
            <div className="loginBackground" ></div>
            <form className="loginForm"  onSubmit={onLogin}>
                <div>
                    <input className="inputBox" type='text' name='username' placeholder="Email Address" value={username} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox"  type='password' name='password' placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <input className="button"  type='submit' value='SIGN IN' /> 
                <input onClick={goToSignUp} className="button" type="button"  value='SIGN UP' /> 
            </form>  
            {/* <div className="divider"></div>      */}
        </div>
    )



}
export default Login;