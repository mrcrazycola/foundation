import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../FrameMotion/variants";
function FountationDetailMap() {
  return (
    <motion.div
     variants={fadeIn("left",0.4)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{once:false, amount:0}}
    ><iframe className='w-full p-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.94499533950443!2d80.27210354460965!3d13.028034249652848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d720f8b4cf%3A0xabe804b134ff3088!2sEL-ROI%20CHURCH!5e0!3m2!1sen!2sin!4v1741525362036!5m2!1sen!2sin" height="450" allowFullscreen="" Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></motion.div>
  )
}

export default FountationDetailMap