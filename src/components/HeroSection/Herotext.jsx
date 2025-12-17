import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function Herotext() {
  return (
    <div className='flex flex-col g-4 h-full justify-center md:text-left sm:text-center md:pt-40 sm:pt-20'>
        <motion.h1 
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}
        className='md:text-[2.8rem] md:pl-[10%] md:pb-[4%] lg:text-5xl sm:text-4xl font-bold text-headtext '>Building Communities, <br/> Creating Futures</motion.h1>
       
        <div class="flex items-end justify-center">
        <motion.img 
        variants={fadeIn("up",0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0}}
        src="./image/boys12420-rl6-1000w.png" alt=""/>
</div>        
    </div>
  )
}

export default Herotext
