import React from 'react'
import People from './assets/peoplepng.png'
import webBg from './assets/WebD4.jpg'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className=' bg-cover bg-center' style={{ backgroundImage: `url(${webBg})` }}>

    <div className='md:flex md:p-10 md:px-14'>

      <motion.div
       initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }} // triggers only once when 30% visible
       className=" font-extrabold md:p-10 p-5 md:text-[4vw] text-[9vw] mb-5">
        <h1 className=' text-[#0cf323]'>REDEFINE HOW</h1>
        <h1 className=' text-[#0cf323]'>YOU GROW YOUR</h1>
        <h1 className=' text-[#fff]'>DIGITAL BUSINESS</h1>

        <div className='font-semibold text-[3vw]  md:text-[2vw] text-[white] mt-5'>
          <h1> Revenue based funding and execution support designed for early stage founders</h1>
        </div>

      </motion.div>

      <div className='  flex justify-center'>
        <img className=' md:h-[65vh] md:w-[80vh] -mt-10  md:mt-10 h-[70vw]' src={People} alt="" />
      </div>

      </div>

      <div className='flex justify-center items-center gap-2 md:-mt-5 '>
        <input className=' text-center md:-mt-4 rounded-full md:w-[60vh] w-[40vh] h-[6vh] text-xl my-7' type="text" placeholder='Enter Mail' />
        <i className="ri-arrow-right-circle-line md:text-5xl text-4xl  md:mb-10 text-green-500"></i>
      </div>

    </div>
  )
}

export default Hero