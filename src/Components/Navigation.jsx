import React from 'react'
import shortlylogo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const generalstyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom:'70px',
        paddingTop:'50px',
        paddingLeft:'100px',
        paddingRight:'100px'
        
    }

    const button = {
        backgroundColor:'hsl(180, 66%, 49%)',
        borderRadius: '50px',
        padding: '5px 15px',
        color: 'white',
        fontWeight:'500'
    }

  return (
    <div style={generalstyle}>
        <div style={{display:'flex', gap:'45px'}}  >
            <img src={shortlylogo} alt="logo" />
            <a href="#"> <h3>Features</h3></a>
            <a href="#"> <h3>Pricing</h3></a>
            <a href="#"> <h3>Resources</h3></a>
        </div>
            
        <div style={{display:'flex', gap:'30px', }}>
            <Link to='/signin'> <h3>Login</h3></Link>
            <Link to="/signup"><button type='Submit' style={button}> Sign Up </button></Link>
        </div>

    </div>
  )
}

export default Navigation