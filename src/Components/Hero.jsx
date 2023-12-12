import React from 'react'
import heroImage from '../assets/images/illustration-working.svg'
import shortenBg from '../assets/images/bg-shorten-desktop.svg'
import { Link } from 'react-router-dom'

const Hero = () => {

  const contentContainer = {
    display: 'flex',
    justifyContent:'space-between',
    marginBottom: '60px',
    paddingLeft:'100px',
    paddingBottom:'100px'
    
  }

  const image = {
    height: '400px',
    width: '550px'

  }

  const button = {
    backgroundColor:'hsl(180, 66%, 49%)',
    borderRadius: '50px',
    padding: '10px 40px',
    color: 'white',
    fontWeight:'700'    

  }

  const inputStyle = {
    width:'600px',
    height:'50px',
    borderRadius: '8px',
    paddingLeft: '20px'

  }

  const shortenContainer = {
    backgroundImage: `url(${shortenBg})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'#3B3054', 
    borderRadius: '10px',
    height:'150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center",
    gap: "20px",
    width:"80%",
    position:'absolute',
    bottom:"-80px"

  }

  const shortenbutton = {
    backgroundColor:'hsl(180, 66%, 49%)',
    borderRadius: '8px',
    height:'50px',
    padding: '8px 35px',
    color: 'white'    

  }

  return (
    <div style={{display:'flex',flexDirection:'column',position:'relative'}}>

      <div style={contentContainer}>

        <div style={{marginRight:'150px',textAlign: 'left'}} >
          <h1 style={{fontSize:'70px',fontWeight:'bold', margin: '0px', padding: '0px'}}>More than just shorter links</h1>
          <p style={{marginBottom: '30px',}}>Build your brand's recognitio and get detailled <br /> insights on how your links are performing.</p>
          <Link to='/Signin'><button type='Submit' style={button}>Get Started</button></Link>
        </div>

        <img style={image} src={heroImage} alt="Illustratin Working" />
      </div>

      <div style={shortenContainer}>
        <input style={inputStyle}   type="text" placeholder='Shorten a link here...' />
        <button style={shortenbutton} type='Submit'>Shorten it!</button>
      </div>

    </div>
  )
}

export default Hero
