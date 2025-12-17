import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function VideoButton() {
  return (
    <div className="px-[5%] sm:py-4 md:py-5 lg:py-5 bg-graydrak flex items-center">
  <div className="flex flex-row justify-center items-center w-full">
    <div className="w-3/4">
      <motion.h1 
       variants={fadeIn("right",0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{once:false, amount:0}}
      className="leading-loose md:text-[2.8rem] sm:py-[2%] lg:text-5xl sm:text-2xl font-semibold text-white">
        Click the video button <br className="pt-5" />
        to see our contributions
      </motion.h1>
    </div>
    <div className="w-1/4 flex justify-center">
      <button>
        <img src="./image/playcircle1793-djtyn.svg" alt="Play Button" />
      </button>
    </div>
  </div>
</div>

  )
}

export default VideoButton