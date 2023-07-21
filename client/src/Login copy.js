import React, {useState} from 'react'


function Login({ user, setUser, setIsAuthenticated, isAuthenticated}){

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })

    const {username, email, password} = formData

    function onLogin(e){
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
 

    return(
        <div className="login" >
            <h1 className='form-title'>Sign In</h1>
            <div className="loginBackground" ></div>
            <form className="loginForm"  onSubmit={onLogin}>
                <div>
                    <input className="inputBox" type='text' name='email' placeholder="Email Address" value={email} onChange={handleChange} />
                </div>
                <div>
                    <input className="inputBox"  type='password' name='password' placeholder="Password" value={password} onChange={handleChange} />
                </div>
                <input className="button"  type='submit' value='SIGN IN' /> 
            </form>  
            {/* <div className="divider"></div>      */}
        </div>
    )



}
export default Login;