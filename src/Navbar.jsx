import React, { useState } from 'react'

const Navbar = () => {
  const[menu,setMenu]=useState(true)


  return (
  <div>

  <div className={`md:hidden absolute w-full h-screen ${menu?'translate-x-[100%]':''} transition-all bg-white p-8 text-2xl`}>
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
            <i className="ri-building-3-fill text-2xl px-5"></i>
            <h1 className=' font-[400] text-sm '>Company</h1>
        </div>

        <div className='menu-icon md:hidden flex items-center'>
        <i onClick={()=>setMenu(!menu)} className="ri-menu-3-line text-2xl font-light "></i>
        </div>

        <div className=' nav-menus hidden md:flex gap-6 px-14 items-center '>
          <h1>What We Do</h1>
          <h1>How it Works </h1>
          <h1>Who we invest in </h1>
          <h1>Testimonials</h1>
          <h1 className=' py-3 px-4 text-white font-bold bg-green-500 rounded-full'>Contact Us</h1>
        </div>
    </div>

    
    </div>
  )
}

export default Navbar