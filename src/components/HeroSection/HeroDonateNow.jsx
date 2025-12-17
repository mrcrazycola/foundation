import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function HeroDonateNow() {
  return (
    <div className='flex justify-center'>

        <motion.div 
        variants={fadeIn("left",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false, amount:0}}
        className=' inline-block bg-textred sm:mt-[30px] sm:w-[80%] md:mt-[125px] md:mr-[70px] p-[30px] sm:mb-[20px]'>
        <motion.h1 
        variants={fadeIn("top",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}
        className='font-medium  text-white text-3xl p-0 m-0 pb-4 text-center whitespace-wrap'>DONATE TODAY</motion.h1>
        <motion.p 
        variants={fadeIn("right",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}
        className='text-left font-light  text-white pb-[30px] text-xs'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum had\s seen the industry's standard dummy text ever since the 1500s</motion.p>
        <motion.div 
        variants={fadeIn("top",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}
        className='grid grid-cols-3 gap-2  text-center font-medium'>
          <buttton className='bg-white p-2 mb-[10px]'>Rs.100</buttton>
          <buttton className='bg-white p-2  mb-[10px]'>Rs.200</buttton>
          <buttton className='bg-white p-2 mb-[10px]'>Rs.500</buttton>
          <buttton className='bg-white p-2 mb-[10px]'>Rs.1000</buttton>
          <buttton className='bg-white p-2 mb-[10px]'>Rs.2000</buttton>
          <buttton className='bg-white p-2 mb-[10px]'>Rs.5000</buttton>
        </motion.div>
          <motion.div 
          variants={fadeIn("top",0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0}}
          className='grid grid-cols-2 gap-2  text-center font-medium'>
          <buttton className='bg-white p-2 py-3 mb-[10px] mt-[10px]'>Other Amount</buttton>
          <buttton className='bg-buttonyellow p-2 py-3 mb-[10px] mt-[10px]'>DONATE NOW</buttton>
        
        </motion.div>
        </motion.div>
    </div>
  )
}

export default HeroDonateNow