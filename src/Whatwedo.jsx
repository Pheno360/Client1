import React from 'react'

const Whatwedo = () => {
  return (

    <div className=' mb-10 '>
    <div className=' flex flex-col items-center mt-20'>

    <div className=' font-semibold md:text-3xl text-[#01aaff]'>What we do</div>

    <div className=' text-[#050563] text-center font-bold md:text-[4vw] text-[4.5vw]'>
    <h1>Empowering founders with non dilutive</h1>
    <h1>capital and execution expertise</h1>
    </div>

    <div className=' text-[#777777] font-semibold md:m-4 md:text-xl'>Here is how we can evaluate</div>
    </div>

    <div className='cardHolder md:flex justify-center'>

    <div className='card1 md:w-[25vw] m-8 p-2  rounded-xl shadow-xl shadow-blue-300 text-center mt-10 '>
        <h1 className=' my-4  text-xl font-semibold'>Blue Advances</h1>
        <p>Fund recurring growth expenses eg. customer acquisition, inventory</p>

        <div className=' m-5 flex justify-center gap-16 text-4xl'>
        <div>
             <i class="ri-building-line"></i>
             <h1 className='text-sm'>3X monthly revenue</h1>
        </div>

        <div>
            <i class="ri-award-fill"></i>
            <h1 className='text-sm'>Flate fee of 6-12%</h1>
        </div>
        </div>
    </div>


     <div className='card2 md:w-[25vw] m-8 p-2  rounded-xl shadow-xl shadow-blue-300 text-center mt-10 '>
        <h1 className=' my-4  text-xl font-semibold'>Blue Advances</h1>
        <p>Fund recurring growth expenses eg. customer acquisition, inventory</p>

        <div className=' m-5 flex justify-center gap-16 text-4xl'>
        <div>
             <i class="ri-building-line"></i>
             <h1 className='text-sm'>3X monthly revenue</h1>
        </div>

        <div>
            <i class="ri-award-fill"></i>
            <h1 className='text-sm'>Flate fee of 6-12%</h1>
        </div>
        </div>   
    </div>

    </div>


    </div>
  )
}

export default Whatwedo