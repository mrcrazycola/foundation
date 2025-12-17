import React from 'react'
import AboutText from './AboutText'
import Aboutimage from './Aboutimage'

function AboutMain() {
  return (
    <div id='aboutus' className='row px-[5%] py-4'>
        <div className='col-lg-8'>
        <AboutText></AboutText>
        </div>
        <div className='col-lg-4'>
        <Aboutimage></Aboutimage>
        </div>
        
        
    </div>
  )
}

export default AboutMain