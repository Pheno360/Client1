import React from 'react'
import { motion } from "motion/react"

const HowItWorks = () => {
  return (
    <div>
        <div className=' flex flex-col items-center mt-20'>

    <div className=' font-semibold md:text-3xl text-[#01aaff] text-[3vh] mb-2'>How it works</div>

    <div className=' text-[#050563]  text-center font-bold md:text-[4vw] text-[6vw]'>
    <h1>Unlocking potential along the</h1>
    <h1>growth journey</h1>
    </div>


    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }} // animate every time it scrolls into view
    className='c1 mr-[15vw] mt-10 flex justify-center  items-center gap-7 rounded-3xl p-4 bg-[#ddecfb] shadow-lg  m-4 md:w-[40vw]'>
      <div>
        <h1 className=' font-semibold text-[#434343]'>01</h1>
        <h1 className=' font-semibold md:font-bold text-xl md:text-2xl my-2 text-[#06063a]'>Connect</h1>
        <p className=' text-sm md:text-lg'>Register and qualify for funding in less than 5 mins.Connect revenue and marketing platforms you already use.</p>
      </div>
      <div>
        <i className="ri-link-unlink-m text-4xl text-[#2c9c10]"></i>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }} // animate every time it scrolls into view
    className='c2 mt-10 ml-[15vw] flex justify-center items-center gap-7 rounded-3xl p-4 bg-[#ddecfb] md:w-[40vw]  m-4'>
      <div>
        <h1 className=' font-semibold text-[#434343]'>02</h1>
        <h1 className=' font-semibold md:font-bold text-xl md:text-2xl my-2 text-[#06063a]'>Get Funded</h1>
        <p className=' text-sm md:text-lg'>Register and qualify for funding in less than 5 mins.Connect revenue and marketing platforms you already use.</p>
      </div>
      <div>
        <i className="ri-money-rupee-circle-fill text-4xl text-[#2c9c10]"></i>
      </div>
    </motion.div>

    <motion.div
    initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }} // animate every time it scrolls into view
     className='c3 mr-[15vw] mt-10 flex justify-center items-center gap-7 rounded-3xl p-4 bg-[#ddecfb] md:w-[40vw] m-4'>
      <div>
        <h1 className=' font-semibold text-[#434343]'>03</h1>
        <h1 className=' font-semibold md:font-bold text-xl md:text-2xl my-2 text-[#06063a]'>Support Growth</h1>
        <p className=' text-sm md:text-lg'>Register and qualify for funding in less than 5 mins.Connect revenue and marketing platforms you already use.</p>
      </div>
      <div>
        <i className="ri-hand-heart-fill text-4xl text-[#2c9c10]"></i>
      </div>
    </motion.div>

    </div>
    
    </div>
  )
}

export default HowItWorks