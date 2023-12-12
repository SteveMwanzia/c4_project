import React from 'react'
import recognitionicon from '../assets/images/icon-brand-recognition.svg'
import recordicon from '../assets/images/icon-detailed-records.svg'
import customizenicon from '../assets/images/icon-fully-customizable.svg'


const Statistics = () => {

  const mainContainer = {
    background:'#f0f1f6',
    height:'800px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingTop:'150px',
  
    
  }

  const statisticsContainer = {
    display:'flex',
    gap:'25px',
    height:'300px',
    alignItems: 'center'
  }

  const contcontainer = {
    backgroundColor:'#fff',
    borderRadius:'6px',
    paddingLeft:'25px',
    paddingRight:'30px',
    paddingBottom:'35px',
    width:'340px',
    height:'250px',
    position:'relative'
  }

  const icons = {
    backgroundColor:'#3B3054',
    padding:'15px',
    borderRadius:'50px',
    position:'absolute',
    top:"-35px"

  }


  return (
    <div style={mainContainer}>
      <div style={{display:'flex', flexDirection:'column',alignContent:'center',justifyContent:'center',paddingBottom:'100px'}}>
        <h2 style={{textAlign:'center',fontSize:'30px',fontWeight:'700',paddingBottom:'15px'}} >Advanced Statistics</h2>
        <p style={{textAlign:'center',color:'#92929b',fontWeight:'600'}}>Track how your links are performing across the web <br /> with our advanced statistics dashboard.</p>
      </div>

      <div  style={statisticsContainer}>

        <div className='contcontainer' style={{ ...contcontainer,alignSelf:'flex-start'}}>
          <img style={icons} src={recognitionicon} alt="Brand Recognition" />
          <h4>Brand Recognition</h4>
          <p>Boost your brand recognition with each click. Generic links don't mean a thin. Branded links help instill confidence in your content.</p>
        </div>

        {/* <div><hr style={{width:"30px",color:'hsl(180, 66%, 49%)',size:'20px'}} /></div> */}

        <div className='contcontainer' style={contcontainer} >
          <img style={icons} src={recordicon} alt="Detailed Records" />
          <h4>Detailed Records</h4>
          <p>Gain insights into who is clicking your links. Knowing when and whre people engage with your content helps inform better decisions.</p>
        </div>

        <div className='contcontainer'  style={{ ...contcontainer,alignSelf:'flex-end'}}>
          <img style={icons} src={customizenicon} alt="Fully Customizable" />
          <h4>Fully Customizable</h4>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>

      </div>
      
    </div>
  )
}

export default Statistics