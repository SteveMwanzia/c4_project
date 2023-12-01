import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Loginimg from "..//assets/images/Frame 73171.png"


const SignIn = () => {
  const Mcontainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "999px",
    height: "1024px",
    flexshrink: "0"
  }

  const contentstye = {
    width: "558px",
    height: "1024px",
    flexshrink: "0"
  }

  const imagestye = {
    width: "441px",
    height: "1024px",
    flexshrink: "0"
  }


  return (
    <div className='MainContainer'  style={Mcontainer}>
      <div className='content'  style={contentstye}>
        <div className='back'>
          <a href="#">
            <IoArrowBackOutline size="24" color="#BFBFBF"/>
          </a>
        </div>

        <form>
          <div>
            <h2>Login</h2>
            <p>Get started with Shortly</p>
          </div>
          
          <div>
          <label>Email</label><br />
          <input 
          type="text"
        />
          </div>

          <div>
          <label>Password</label><br />
          <input 
          type="password"
        />
          </div>

          <p>forgot passowrd ?</p>

          <button type='Submit'>Login </button>

          <p>Don’t have an account yet?  <span><a href="#">Sign Up</a></span></p>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default SignIn