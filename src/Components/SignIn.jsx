import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Loginimg from "..//assets/images/Frame 73171.png"
import { useState } from "react";
import { Link } from 'react-router-dom';


const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(email)
  }


  // Style
  const Mcontainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "auto auto",
    width: "999px",
    height: "1024px",
    fontFamily:"Poppins",
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

  const input = {
    width: '634px',
    height: '65px',
    flexShrink: "0",
    borderRadius: "8px",
    background: "#EBE9E9"
  }

  

  const title = {
    color: "#000",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "153.023%"
  }

  const paragraph = {
    color: "#000",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "153.023%"
  }

  const buttonsignin = {
    display: "flex",
    width: "634px",
    padding: "20px 10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: '8px',
    background: "#2ACFCF"
  }
  // Styles


  return (
    <div className='MainContainer'  style={Mcontainer}>
      <div className='content'  style={contentstye}>
        <div className='back' style={{display:"flex", gap:'5px',}}>
          <Link to="/">
            <IoArrowBackOutline size="24" color="#BFBFBF"/>
          </Link>
          <Link to="/" ><span>Back</span></Link>
        </div>

        <form>
          <div style={{display:'flex',flexDirection:"column",alignItems:'center',}}>
            <h2 style={title}>Login</h2>
            <p style={paragraph}>Get started with Shortly</p>
          </div>
          
          <div>
          <label>Email</label><br />
          <input style={input} value={email} onChange={handleEmail}
          type="text"
        />
          </div>

          <div>
          <label>Password</label><br />
          <input style={input} value={password} onChange={handlePassword}
          type="password"
        />
          </div>

          <Link to="/passwordrecovery"><p>forgot passowrd ?</p></Link>

          <button style={buttonsignin} type='Submit'>Login </button>

          <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
            <p>Don’t have an account yet?  <span><Link to="/signup">Sign Up</Link></span></p>
          </div>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default SignIn