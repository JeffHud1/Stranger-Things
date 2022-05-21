import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { TokenRegister } from '../api'

export default function Register(props) {
    const {setToken} = props

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
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
                    console.log("Registering");
                    if(password===confirmPassword){
                        TokenRegister(userName, password, setToken)
                        setPassword("");
                        setUserName("");
                        setConfirmPassword("");
                        profilePage();
                        return
                    } alert("Passwords must match one another")
                    setPassword("");
                    setUserName("");
                    setConfirmPassword("");
                  }}>
        
                    <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Register new account</h3>
        
                    <div className="form-outline mb-4">
                      <input type="text" id="username" className="form-control form-control-lg" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required/>
                      <label className="form-label" htmlFor="username">Username</label>
                    </div>
        
                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control form-control-lg" minLength="7" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="checkPassword" className="form-control form-control-lg" minLength="7" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
                      <label className="form-label" htmlFor="checkPassword">Confirm password</label>
                    </div>
        
                    <div className="pt-1 mb-4">
                      <button className="btn btn-info btn-lg btn-block" type="submit">Confirm</button>
                    </div>
        
                    <p>Already have an account? <a href="#!" className="link-info"><Link to="/">Login here</Link></a></p>
        
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
}
