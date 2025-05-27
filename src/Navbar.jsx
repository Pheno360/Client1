import React, { useState } from 'react'
import UpGlow from './assets/UpGlow.jpg'

const Navbar = () => {
  const[menu,setMenu]=useState(true)



  return (
  <div className=' overflow-x-hidden'>

  <div className={`md:hidden  fixed top-0 left-0 z-50 w-full h-screen ${menu?'translate-x-full':'translate-x-0'} transition-all bg-white p-8 text-2xl`}>
         <div className='Open-menu flex justify-end '>
         <i onClick={()=> setMenu(!menu)} className="ri-close-large-line"></i>
         </div>

         <div className=' flex flex-col gap-5 mt-20'>
           <h1 onClick={()=>{
           window.scrollTo({top:50,behavior:'smooth'})
           setMenu(!menu)
          }} >Home</h1>
           <hr  className='bg-blue-500' />
           <h1 onClick={()=>{
           window.scrollTo({top:700,behavior:'smooth'})
           setMenu(!menu)
          }}>What We Do</h1>
           <hr className='bg-blue-500' />
           <h1 onClick={()=>{
           window.scrollTo({top:1500,behavior:'smooth'})
           setMenu(!menu)
          }}>About Us</h1>
           <hr className='bg-blue-500' />
           <h1 onClick={()=>{
           window.scrollTo({top:2500,behavior:'smooth'})
           setMenu(!menu)
          }}>How It Works</h1>
         <hr className='bg-blue-500' />
           <h1 onClick={()=>{
           window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})
           setMenu(!menu)
          }}>Contact Us</h1>
           <hr className='bg-blue-500' />
         </div>

         <div className='mt-20  flex justify-center text-4xl font-thin gap-10'>
         <i class="ri-linkedin-box-fill text-slate-600"></i>
         <i class="ri-instagram-line text-slate-600"></i>
         <i class="ri-mail-line text-slate-600"></i>
         </div>
    </div>


    <div className='flex justify-between p-4 md:px-12'>
        <div className='logo'>
            <img className=' md:h-12 h-8 md:w-32 w-20' src={UpGlow} alt="" />
            
        </div>

        <div className='menu-icon md:hidden flex items-center'>
        <i onClick={()=>setMenu(!menu)} className="ri-menu-3-line text-2xl font-light "></i>
        </div>

        <div className=' nav-menus hidden md:flex gap-6 px-14 items-center '>
          <h1 className=' cursor-pointer' onClick={()=>window.scrollTo({top:700,behavior:'smooth'})}>What We Do</h1>
          <h1 className=' cursor-pointer' onClick={()=>window.scrollTo({top:1500,behavior:'smooth'})}>About Us </h1>
          <h1 className=' cursor-pointer' onClick={()=>window.scrollTo({top:2000,behavior:'smooth'})}>How it Works </h1>
          <h1 className=' cursor-pointer' onClick={()=>window.scrollTo({top:2500,behavior:'smooth'})}>Testimonials</h1>
          <h1  onClick={()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})} className=' py-3 px-4 text-white font-bold bg-green-500 rounded-full cursor-pointer'>Contact Us</h1>
        </div>
    </div>

    
    </div>
  )
}

export default Navbar