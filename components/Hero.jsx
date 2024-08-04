import React from 'react'


const Hero = () => {
  return (
    <div className='flex items-center pt-[60px] sm:pt-[100px]'>
      <div className="image basis-1/2 hidden lg:block">

        <img src="/images/doctor.png" alt="doctor" className='w-full h-full max-h-[700px] object-contain' />

      </div>

      <div className="text flex-1 px-[20px] lg:px-0">

        <h1 className='sm:text-[60px] text-[40px] font-semibold text-gray-900 text-center'> صحتك أهم<br /> 
             احجز موعدك الآن مع طبيبك المفضل
        </h1>

        <p className='text-gray-600 sm:text-[20px] text-center my-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <a href="#hajz" className='grid place-items-center w-[200px] h-[65px] rounded-[50px] bg-blue-600 text-white text-[25px] font-semibold mx-auto'> احجز الآن</a>
      </div>
    </div>
  )
}

export default Hero
