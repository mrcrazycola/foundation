import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function FountationDetails() {
  return (
    <motion.div 
    variants={fadeIn("right",0.4)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{once:false, amount:0}}
    className='p-2'>
      <img src="./image/elroifoundationlog.png" alt="" />
        <p className='text-left font-medium pb-[30px] md:pb-[5%] text-s lg:w-[450px] pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
         <p className='text-left font-medium text-s lg:w-[450px] pt-3'><strong>Address :</strong>  Address address Address addressAddress addressAddress addressAddress addressAddress address</p>
         <p className='text-left font-medium pt-1 text-s lg:w-[450px]'><strong>Contact us:</strong> 00000 00000</p>
         <p className='text-left font-medium pt-3 text-s lg:w-[450px]'><strong>Email: 00000 00000</strong> </p>      
   
   
    </motion.div>
  )
}

export default FountationDetails