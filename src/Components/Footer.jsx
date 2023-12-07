import React from 'react'
import fbicon from '../assets/images/icon-facebook.svg'
import instaicon from '../assets/images/icon-instagram.svg'
import pinteresticon from '../assets/images/icon-pinterest.svg'
import twittericon from '../assets/images/icon-twitter.svg'

const Footer = () => {
  const containerFooter = {
    backgroundColor: "#232027", 
    color:'white',
    display: "flex",
    justifyContent: 'space-between',
    height:'300px'
  }

  const linksContainer = {
    display:'flex'
  }

  const iconsContainer = {
    display:'flex',
    gap:'20px'
  }

  const img = {
    height: '24px',
    width:'24px'
  }


  return (
    <div style={containerFooter}>

      <div>
        <h2>Shortly</h2>
      </div>

      <div style= {linksContainer}>
        <div>
          <h5>Features</h5>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div>
          <h5>Resources</h5>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        
      </div>

      <div style ={iconsContainer}>
        <img style={img} src={fbicon} alt="facebook" />
        <img style={img} src={twittericon} alt="twitter" />
        <img style={img} src={pinteresticon} alt="pinterest" />
        <img style={img} src={instaicon} alt="instagram" />
      </div>

    </div>
  )
}

export default Footer