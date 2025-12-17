import React from 'react'
import FountationDetails from './FountationDetails'
import FountationDetailMap from './FountationDetailMap'

function FountaionDetailmain() {
  return (
    <div id='contact' className='row px-[5%] py-4 bg-gray'>
        <div className='col-lg-6'>
        <FountationDetails></FountationDetails>
        </div>
        <div className='col-lg-6'>
        <FountationDetailMap></FountationDetailMap>
        </div>
        
        
    </div>
  )
}

export default FountaionDetailmain