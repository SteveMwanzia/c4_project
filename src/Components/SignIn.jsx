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
    width: "100%",
    height: "1024px",
    fontFamily:"Poppins",
    flexshrink: "0"
  }

  const contentstye = {
    width: "900px",
    height: "1024px",
    flexshrink: "0",
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
    lineHeight: "153.023%",
    textAlign:'center'
  }

  const paragraph = {
    color: "#000",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "153.023%",
    paddingTop:"10px"
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
        <div className='back' style={{display:"flex", gap:'5px',paddingTop:'50px'}}>
          <Link to="/">
            <IoArrowBackOutline size="24" color="#BFBFBF"/>
          </Link>
          <Link to="/" ><span>Back</span></Link>
        </div>

        <form style={{display:'flex',flexDirection:"column",alignItems:'center',paddingTop:'140px'}} >
          <div >
            <h2 style={title}>Login</h2>
            <p style={paragraph}>Get started with Shortly</p>
          </div>
          
          <div style={{paddingTop:'40px'}}>
          <label>Email</label><br />
          <input style={input} value={email} onChange={handleEmail}
          type="text"
        />
          </div>

          <div style={{paddingTop:'40px'}}>
          <label>Password</label><br />
          <input style={input} value={password} onChange={handlePassword}
          type="password"
        />
          </div>

          <div style={{width:'634px',paddingTop:'25px'}}>
          <Link to="/passwordrecovery"><p style={{color:'#F46262',fontWeight:'500', alignItems:'start'}}>forgot passowrd ?</p></Link>
          </div>
  

          <div style={{paddingTop:'20px',color:'#FFF'}}>
            <button style={buttonsignin} type='Submit'>Login </button>
          </div>
          

          <div style={{display:'flex',alignContent:'center',justifyContent:'center',paddingTop:"40px"}}>
            <p style={{fontWeight:'500'}}>Don’t have an account yet?  <span style={{color:'#F46262'}} ><Link to="/signup">Sign Up</Link></span></p>
          </div>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default SignIn