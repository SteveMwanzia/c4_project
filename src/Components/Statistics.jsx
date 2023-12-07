import React from 'react'
import recognitionicon from '../assets/images/icon-brand-recognition.svg'
import recordicon from '../assets/images/icon-detailed-records.svg'
import customizenicon from '../assets/images/icon-fully-customizable.svg'


const Statistics = () => {
  return (
    <div>
      <div>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web <br /> with our advanced statistics dashboard.</p>
      </div>

      <div>

        <div>
          <img src={recognitionicon} alt="Brand Recognition" />
          <h4>Brand Recognition</h4>
          <p>Boost your brand recognition with each click. Geereic links don't mean a thin. Branded links help instill confidence in your content.</p>
        </div>

        <div>
          <img src={recordicon} alt="Detailed Records" />
          <h4>Detailed Records</h4>
          <p>Gain insights into who is clicking your links. Knowing when and whre people engage with your content helps inform better decisions.</p>
        </div>

        <div>
          <img src={customizenicon} alt="Fully Customizable" />
          <h4>Fully Customizable</h4>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>

      </div>
      
    </div>
  )
}

export default Statistics