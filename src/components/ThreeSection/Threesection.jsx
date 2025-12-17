import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function Threesection() {
  return (
    <div className='row'>
        <div className="col-lg-4 p-[50px] pl-[70px] bg-Square1 h-[270px] md:mb-5">
          <motion.div
          variants={fadeIn("up",0.4)}
                                      initial="hidden"
                                      whileInView="show"
                                      viewport={{once:false, amount:0}}
          >
            <h1 className='md:text-[2.8rem] lg:text-5xl sm:text-4xl font-medium pb-4 text-white text-opacity-50'>VISION</h1>
            <p className='text-white'>Empowering individuals through education, skill development,and community support to breakthe cycle of poverty and foster sustainable growth.</p>
            </motion.div>
        </div>
        <div className="col-lg-4 p-[50px] pl-[70px] bg-Square2 h-[270px] md:mb-5">
            <motion.div
            variants={fadeIn("up",0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0}}
            >
            <h1 className='md:text-[2.8rem] lg:text-5xl sm:text-4xl font-medium pb-4 text-white text-opacity-50'>MISSION</h1>
            <p className='text-white'>Empowering individuals through education, skill development,and community support to breakthe cycle of poverty and foster sustainable growth.</p>
            </motion.div>
        </div>
        <div className="col-lg-4 p-[50px] pl-[70px] bg-Square3 h-[270px] md:mb-5">
          <motion.div
          variants={fadeIn("up",0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0}}
          >
            <h1 className='md:text-[2.8rem] lg:text-5xl sm:text-4xl font-medium pb-4 text-white text-opacity-50'>VALUES</h1>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
        </motion.div>
        </div>
        

    </div>
  )
}

export default Threesection