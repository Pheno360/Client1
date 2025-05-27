import React from 'react'
import { motion } from "motion/react"

const Mission = () => {
  return (
     <div className=' bg-[#12a4ff] p-1 '>
    <div className=' flex flex-col items-center mt-10'>

    <div className=' font-semibold md:text-3xl text-xl text-[#e0e0e0]'>Our difference</div>

    <div className=' text-[#050563] text-center font-bold md:text-[4vw] text-[7vw]'>
    <h1>For capital, hassle free</h1>
    </div>

    <div className=' text-[#dedede] font-semibold md:m-6 m-4 md:text-xl text-sm text-center md:w-[60vw] w-full'>
    <h1>Our mission is to level the playing field for early stage growth capital.</h1>
    <h1 className=' md:flex hidden'>we provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation.</h1>
    </div>
    </div>

    <motion.div 
    initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ amount: 0.3 }} // triggers only once when 30% visible 
    className='cardHolder md:flex justify-center mb-10'>

    <motion.div
     className='card1 md:w-[25vw] m-8 p-2 bg-slate-50  rounded-xl shadow-xl shadow-blue-300 text-center mt-10 '>
    <div className=' m-5 flex justify-center gap-16 text-4xl'>
        <div>
             <i className="ri-line-chart-fill text-blue-400"></i>
        </div>
        </div>
        <h1 className=' my-4 text-[#06063a] text-xl font-semibold'>Data Driven</h1>
        <p className=' mb-4'>Fund recurring growth expenses eg. customer acquisition, inventory</p>
    </motion.div>


    <div className='card2 md:w-[25vw]  m-8 p-2 bg-slate-50  rounded-xl shadow-xl shadow-blue-300 text-center mt-10 '>
    <div className=' m-5 flex justify-center gap-16 text-4xl'>
        <div>
             <i className="ri-money-dollar-box-line text-blue-400"></i>
        </div>
        </div>
        <h1 className=' my-4 text-[#06063a] text-xl font-semibold'>Flexible funding</h1>
        <p className=' mb-4'>Fund recurring growth expenses eg. customer acquisition, inventory</p>
    </div>
    

  <div className='card3 md:w-[25vw] m-8 p-2 bg-slate-50  rounded-xl shadow-xl shadow-blue-300 text-center mt-10 '>
    <div className=' m-5 flex justify-center gap-16 text-4xl'>
        <div>
             <i className="ri-bar-chart-grouped-line text-blue-400"></i>
        </div>
        </div>
        <h1 className=' my-4 text-[#06063a] text-xl font-semibold'>Value Accelerating</h1>
        <p className=' mb-4'>Fund recurring growth expenses eg. customer acquisition, inventory</p>
    </div>
    </motion.div>


    </div>
  )
}

export default Mission