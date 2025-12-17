import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function Aboutimage() {
  return (
    <div>
        <motion.div 
        variants={fadeIn("left",0.4)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:false, amount:0}}
        className='grid grid-cols-[170px_auto] h-full gap-2  text-center font-medium px-2'>
          
          <img src="./image/image119104-wiim-200h.png" alt="" /> 
          <img src="./image/image219108-7rx-300w.png" className='row-span-2 w-full h-full object-cover' alt="" />
          <img src="./image/image319106-76tp-200h.png" alt="" />
        </motion.div>
    </div>
  )
}

export default Aboutimage