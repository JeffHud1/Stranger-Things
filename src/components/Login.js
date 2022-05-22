import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { TokenLogin } from '../api';

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

          </form>

        </div>

      </div>
    </div>
  </div>
</section>
)}