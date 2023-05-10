import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='loginPage flex'>
      <div className="container flex"></div>

      <h1>Loginpage</h1>
      <a href="./login">To Login</a>
      <br />
      <a href="./dashboard">To Login</a>

      <div className="footerDiv flex">
        <span className="text">Don't have an account</span>
        <Link to={'/register'}>
          <button className='btn'>Sign Up</button>
        </Link>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src="" alt="logo" />
            <h3>Welcome Back!</h3>
            <span className='showMessage'> Login Status will go here</span>
            <div className="inputDiv"></div>
            <label htmlFor="username">Username</label>
            <div className="input flex">

            </div>
          </div>
          <form action="" className='form grid'>


          </form>

        </div>
      </div>
    </div>
  )
}

export default Login