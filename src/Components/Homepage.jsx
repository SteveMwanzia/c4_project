import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Hero />
    </div>
  )
}

export default HomePage