import React from 'react'
import './Register.css'
import '../../App.css'
import { Link, NavLink } from 'react-router-dom'

import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AIOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'


function Register() {
  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className="textDiv">
          <h2 className="title">Create and Sell Extraordinary Products</h2>
          <p>Adopt the peace of nature</p>
        </div>
        <div className="footerDiv flex">
          <span className="text">Don't have an account?</span>
          <Link to={'/login'}>
            <button className="btn">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="formDiv flex">
        <div className="headerDiv">
          <img src="" alt="" />
          <h3>Welcome Back</h3>
        </div>

        <form action="" className='form grid'>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <MdMarkEmailRead className="icon"></MdMarkEmailRead>
              <input type="email" id='email' placeholder='Enter Email' />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className="icon">
              </FaUserShield>
              <input type="text" id='username' placeholder='Enter Username' />
            </div>
          </div>

        </form>

      </div >
    </div >
  )
}

export default Register