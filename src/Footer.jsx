import React from 'react'
import webBg2 from './assets/WebD7.jpg'

const Footer = () => {
  return (
    <div className=' object-cover md:bg-center  mt-20 md:h-[60vh] h-[66vh] '  style={{ backgroundImage: `url(${webBg2})` }} >
     <div className=' p-8 text-2xl justify-center flex-col items-center flex'>
        <h1 className=' font-bold text-white md:text-[3vw] md:mt-14 mt-10 '>Get Funded Today!</h1>

        <div className='flex items-center gap-2 justify-center '>
        <input className='mt-10 mb-2 rounded-full text-center md:text-2xl text-xl h-10' type="text" placeholder='Enter Email' />
        <i className="ri-arrow-right-circle-line text-4xl -mb-9 text-green-500"></i>
        </div>

        <div>

        </div>
     </div>

     <div className=' flex m-2 justify-center gap-5 md:gap-20 text-sm md:text-2xl p-2 text-white text-nowrap'>
       <h1 className=''>Home</h1>
       <h1 className=''>What We Do</h1>
       <h1 className=''>How It Works</h1>
       <h1 className=''>Tesimonials</h1>
     </div>
     <div className='mt-6  flex justify-center text-3xl font-thin gap-10'>
         <i class="ri-linkedin-box-fill "></i>
         <i class="ri-instagram-line "></i>
         <i class="ri-mail-line "></i>
         </div>

     <div className=' m-5 mt-7 md:mt-10 justify-center md:flex gap-10   text-[#ffffffa3] '>
        <h1>Privacy Policy</h1>
        <h1>Terms of Service</h1>
        <h1>©Company All Rights Reserved 2025</h1>
     </div>

    </div>
  )
}

export default Footer