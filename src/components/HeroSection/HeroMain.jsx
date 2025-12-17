import React from 'react'
import Herotext from './Herotext'
import HeroDonateNow from './HeroDonateNow'

function HeroMain() {
  return (
    <div id='home' className=' bg-gray'>
        <div className="row">
        <div className="col-lg-8">
        <Herotext></Herotext>
              </div>
              <div className="col-lg-4">
                
        <HeroDonateNow></HeroDonateNow>
            </div>
        </div>
       
    </div>
  )
}

export default HeroMain