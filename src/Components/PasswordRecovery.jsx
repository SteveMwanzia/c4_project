import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Loginimg from "..//assets/images/Frame 73171.png"
import arrowLeft from "../assets/images/Arrow Left.png"

const PasswordRecovery = () => {
  const [email, setEmail] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const Mcontainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "999px",
    margin: "auto auto",
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

        <form>
          <div>
            <h2>Forgot Password</h2>
            <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password</p>
          </div>
          
          <div>
          <label>Email</label><br />
          <input value={email} onChange={handleEmail}
          type="text"
        />
          </div>

          <button type='Submit'>Send recovery code </button>

          <div style={{display:"flex"}}>
            <a href="#">
              {/* <IoArrowBackOutline size="24" color="#BFBFBF"/>  */}
              <img src={arrowLeft} alt="back" /> 
              <span>Back to sign in</span>
            </a>
          </div>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default PasswordRecovery