import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import Statistics from './Statistics'
import BoostLinks from './BoostLinks'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Hero />
        <Statistics />
        <BoostLinks />
        <Footer />
    </div>
  )
}

export default HomePage