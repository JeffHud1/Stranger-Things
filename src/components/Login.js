import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { TokenLogin } from '../api';
// import { Alert } from 'bootstrap';

export default function Login(props) {
  const {setToken} = props

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState('')
  const history = useHistory();

  const profilePage =() =>{
    history.push("/profile")
  }

return (
<section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: "23rem"}} onSubmit={(e)=>{
            e.preventDefault();
            console.log("logging in");
            TokenLogin(userName, password, setToken);
            setPassword("");
            setUserName("");
            profilePage();
          }}>

            <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Log in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="username" className="form-control form-control-lg" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required/>
              <label className="form-label" htmlFor="username">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control form-control-lg" minLength="7" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
              <label className="form-label" htmlFor="password">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
            </div>

            <p>Don't have an account? <a href="#!" className="link-info"><Link to="/register">Register here</Link></a></p>

            {/* <div className='alert alert-success alert-dismissible fade show' role="alert">
              <span>You have successfully logged in</span>
              <button type="button" className='btn-close' data-bs-dismiss="alert"/>
            </div> */}

          </form>

        </div>

      </div>
      {/* <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="/stranger-things/public/Strangers-things-logo.png"
          alt="" className="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
      </div> */}
    </div>
  </div>
</section>
)
  // return (
  //   <div className='container'>
  //     {register ?
  //     <h1>Please register an account with unique user and password</h1> : 
  //     <h1>Log in to an existing account</h1>}
  //     <form
  //     onSubmit={(e)=>{
  //       e.preventDefault();
  //       console.log("Logging in")
  //       register ? TokenRegister(userName, password, setToken) : TokenLogin(userName, password, setToken)
  //       setPassword('')
  //       setUserName('');
  //       profilePage();
  //     }}//need to reroute the page on sucessful login to posts or messages
  //     >
  //         <input 
  //         type="text" 
  //         placeholder="Username"
  //         value={userName} 
  //         onChange={(e)=>setUserName(e.target.value)}
  //         id="username" 
  //         required/>
  //         <input 
  //         placeholder='Password' 
  //         type="password" 
  //         id="password" 
  //         value={password}
  //         onChange={(e)=>{setPassword(e.target.value)}}
  //         minLength="7" 
  //         required/>
  //         <button type="submit" className="btn btn-primary">Submit</button>
  //     </form>
  //     {
  //       register ? 
  //       <button type="click" onClick={(e)=>{setRegister(!register)}}>Return to log in</button> :
  //       <button type="click" onClick={(e)=>{setRegister(!register)}}>Register an account</button>
  //     }
  //   </div>
  // )
}
//route with match to find register page or login page
//still need to return feedback to users on successful login or failed authentication 
//add second password field for register