import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function WhatWeDo() {
  return (
    <motion.div 
     variants={fadeIn("up",0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once:false, amount:0}}
    id='whatwedo' className='px-[5%]'>
        <h1 className='leading-loose md:text-[2.8rem] sm:py-[2%] md:pb-[2%] lg:text-5xl sm:text-4xl font-bold text-headtext text-center'>What We Do</h1>
        <div className='grid gap-5 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div>
            <img src="./image/rectangle181512-t1js-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>After School Club</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>
            <div>
            <img src="./image/rectangle191616-cb3q-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>English Killadies</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>
            <div>
            <img src="./image/rectangle201617-vqi-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>Tution</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle211661-him-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>My Street My Responsible</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle221662-1a7-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>Zero Hungry</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle231663-tedz-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>Skill Development</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle211815-6pj-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>Patient Care</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle221815-gs0c-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>General Checkup</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>

            <div>
            <img src="./image/rectangle231815-1z2g-300h.png" alt="" />
            <h3 className='py-[10px] text-2xl font-bold'>First Aid</h3>
            <p className='font-medium pb-[10px]'>Empowering individuals through <br/> education, skill development, <br/>and community support to break <br/>the cycle of poverty and foster sustainable <br/>growth.</p>
            <button className='mb-[2%] sm:mb-[5%] bg-buttonred text-white py-[5px] px-[15px]'>READ MORE</button>
            </div>
        </div>
        
    </motion.div>
  )
}

export default WhatWeDo