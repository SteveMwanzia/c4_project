import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Loginimg from "..//assets/images/Frame 73171.png"

const SignUp = () => {
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
            <h2>Sign up</h2>
            <p>Get started with Shortly</p>
          </div>
          
          <div style={{display:'flex'}}>
          <label>First name</label><br />
          <input 
          type="text"
        />
          <label>Last name</label><br />
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

          <div>
          <label>Confirm Password</label><br />
          <input 
          type="password"
        />
          </div>

          <button type='Submit'>Sign Up </button>

          <p>Already have an account?  <span><a href="#">Sign In</a></span></p>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default SignUp