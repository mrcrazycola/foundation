import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function AboutText() {
  return (
    <motion.div
    variants={fadeIn("right",0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false, amount:0}}
    >

        <h2 className='lg:text-3xl sm:text-4xl font-medium py-2'>ABOUT US</h2>
        <h1 className='leading-loose md:text-[2.8rem] md:pb-[2%] lg:text-5xl sm:text-4xl font-bold text-headtext '>Together, <br/> We Transform Lives</h1>
        <p className='text-left sm:hidden md:block font-medium pb-[30px] md:pb-[5%] text-s'>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and <br/>scrambled it to make a type specimen book.</p>
        <p className='text-left sm:block md:hidden font-medium pb-[30px] md:pb-[5%] sm:pt-[5%] text-s'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
    </motion.div>
  )
}

export default AboutText