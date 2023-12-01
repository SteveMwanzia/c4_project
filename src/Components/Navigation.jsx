import React from 'react'
import shortlylogo from '../assets/images/logo.svg'

const Navigation = () => {

    const generalstyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom:'70px'
        
    }

    const button = {
        backgroundColor:'hsl(180, 66%, 49%)',
        borderRadius: '50px',
        padding: '5px 25px',
        color: 'white'
    }

  return (
    <div style={generalstyle}>
        <div style={{display:'flex', gap:'45px'}}  >
            <img src={shortlylogo} alt="logo" />
            <a href="#"> <h3>Features</h3></a>
            <a href="#"> <h3>Pricing</h3></a>
            <a href="#"> <h3>Resources</h3></a>
        </div>
            
        <div style={{display:'flex', gap:'40px', }}>
            <a href="#"> <h3>Login</h3></a>
            <button type='Submit' style={button}> Sign Up </button>
        </div>

    </div>
  )
}

export default Navigation