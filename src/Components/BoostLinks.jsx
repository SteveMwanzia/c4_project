import React from 'react'
import boostimg from '../assets/images/bg-boost-desktop.svg'

const BoostLinks = () => {

  const boostContainer = {
    backgroundImage: `url(${boostimg})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'#3B3054', 
    height:'250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "20px",

  }

  const button = {
    backgroundColor:'hsl(180, 66%, 49%)',
    borderRadius: '50px',
    padding: '10px 40px',
    color: 'white',
    fontWeight:'700'    

  }
  
  return (
    <div style={boostContainer}>
      <h2 style= {{color:'#fff', fontSize:'40px',fontWeight:'700'}}>Boost your links today</h2>
      <button type='Submit' style={button}>Get Started</button>
    </div>
  )
}

export default BoostLinks