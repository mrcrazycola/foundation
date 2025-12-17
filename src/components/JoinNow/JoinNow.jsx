import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function JoinNow() {
  return (
    <div className='row'>
        <div className="col-lg-5 col-sm-12 p-0">
    <img src="./image/rectangle311812-ickv-600h.png" alt="" />
        </div>
        <div className="col-lg-7 col-sm-12 bg-textred px-[40px] py-[4%]">
          <motion.div
          variants={fadeIn("right",0.4)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once:false, amount:0}}
          >
            
          
            <h4 className='text-textyellow  text-2xl pb-2'>
            JOIN NOW
            </h4>
            <h1 className=' md:text-[2.8rem] sm:pb-[2%] md:pb-[4%] lg:text-5xl sm:text-4xl font-semibold text-white lg:w-[500px] leading-[5rem]'>Support People in Need by Raising Valuable Donations</h1>
            <div className='grid sm:grid-cols-4 lg:grid-cols-6 gap-2  text-center font-medium'>
          <buttton className='bg-white p-3 mb-[10px]'>Rs.100</buttton>
          <buttton className='bg-white p-3  mb-[10px]'>Rs.200</buttton>
          <buttton className='bg-white p-3 mb-[10px]'>Rs.500</buttton>
          <buttton className='bg-white p-3 mb-[10px]'>Rs.1000</buttton>
          <buttton className='bg-white p-3 mb-[10px]'>Rs.2000</buttton>
          <buttton className='bg-white p-3 mb-[10px]'>Rs.5000</buttton>
          
        </div>
        <div className='grid sm:grid-cols-[150px_auto] lg:grid-cols-[240px_300px] gap-2  text-center font-medium'>
          <buttton className='bg-white p-2 py-3 mb-[10px] mt-[10px]'>Other Amount</buttton>
          <buttton className='bg-buttonyellow font-bold p-2 py-3 mb-[10px] mt-[10px]'>DONATE NOW</buttton>
        
        </div>
        </motion.div>
        </div>

    </div>
  )
}

export default JoinNow