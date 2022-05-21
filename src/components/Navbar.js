import React from 'react'
import {
    Link
  } from "react-router-dom"

export default function Navbar(props) {
  const {
    token,
    setToken,
    userInfo,
    setUserInfo
   } = props;


  return (
        <nav className="p-3 bg-dark text-white sticky-top">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

              <span className='navbar-text' style={{marginRight: "16px"}}>Stranger's Things:</span>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link className="nav-link px-2 text-white" to="/posts">Posts</Link></li>
                {token && <li><Link className="nav-link px-2 text-white" to="/submit">New Post</Link></li>}
                {token && <li><Link className="nav-link px-2 text-white" to="/profile">Profile</Link></li>}
              </ul>

                {token && <span className='navbar-text' style={{marginRight:"32px"}}>Welcome {userInfo?.username}</span>}

                {token ? 
                  <div className="text-end">
                    <button 
                    type="button" 
                    className="btn btn-outline-light me-2"
                    onClick={(e)=>{
                      localStorage.removeItem("jwt");
                      setToken(null)
                      setUserInfo(null)}}>
                      <Link to="/">Logout</Link>
                    </button>
                  </div>
              :
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2"><Link to="/">Login</Link></button>
                <button type="button" 
                className="btn btn-warning">
                  <Link to="/register">Register</Link>
                </button>
              </div>}

            </div>
          </div>
        </nav>
  )
}