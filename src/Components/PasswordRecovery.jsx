import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Loginimg from "..//assets/images/Frame 73171.png"
import arrowLeft from "../assets/images/Arrow Left.png"
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
  const [email, setEmail] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  // Styles
  const Mcontainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: "auto auto",
    height: "1024px",
    fontFamily:"Poppins",
    flexshrink: "0"
  }

  const contentstye = {
    width: "900px",
    height: "1024px",
    flexshrink: "0",
    paddingTop: '200px'
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
    lineHeight: "153.023%",
    paddingTop:'20px'
  }

  const buttonrecov = {
    display: "flex",
    width: "634px",
    padding: "20px 10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: '8px',
    background: "#2ACFCF",
    color:'#FFF'
  }
  // Styles

  return (
    <div className='MainContainer'  style={Mcontainer}>
      <div className='content'  style={contentstye}>

        <form style={{display:'flex',flexDirection:"column",alignItems:'center',}}>
          <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
            <h2 style={title}>Forgot Password</h2>
            <p style={paragraph}>Enter the email address you used when you joined <br /> and we’ll send you instructions to reset your password</p>
          </div>
          
          <div style={{paddingTop:'50px'}}>
          <label>Email</label><br />
          <input style={input} value={email} onChange={handleEmail}
          type="text"
        />
          </div >

          <div style={{paddingTop:'50px'}} >
            <button style={buttonrecov} type='Submit'>Send recovery code </button>
          </div>
          

          <div style={{display:"flex", gap:'5px',alignContent:"center", justifyContent:"center", paddingTop:'50px'}}>
            <Link to="/signin">
              {/* <IoArrowBackOutline size="24" color="#BFBFBF"/>  */}
              <img src={arrowLeft} alt="back" /> 
            </Link>
            <Link to="/signin" ><span style={{color:'#F46262'}}>Back to sign in</span></Link>
          </div>

        </form>

      </div>

      <img style={imagestye}src={Loginimg} alt="man Image" />
    </div>
  )
}

export default PasswordRecovery