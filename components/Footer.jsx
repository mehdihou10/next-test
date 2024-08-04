import React from 'react'
import { FaLinkedin } from "react-icons/fa";


const Card = ()=>(

    <div className="w-[150px] p-[10px] border border-[#ccc] rounded-[5px]">

       <img src="/images/visa.png" alt="card" className='w-[100px] h-[50px] object-cover mx-auto' />
        
    </div>

)

const List = ()=>(

    <ul>
        <li className='footer-link font-semibold text-gray-700 mb-[15px]'>روابط</li>
        <li className='footer-link font-semibold mb-[10px]'>الخدمات</li>
        <li className='footer-link font-semibold mb-[10px]'>الخدمات</li>
        <li className='footer-link font-semibold mb-[10px]'>الخدمات</li>
        <li className='footer-link font-semibold'>الخدمات</li>

    </ul>
)

const Footer = () => {

  return (
    <footer className='py-[60px] border-t px-[15px] mt-[150px] bg-white'>

        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[30px]">


            <div className="cards flex gap-[20px] flex-wrap lg:basis-[500px]">

            <Card />
            <Card />
            <Card />
            <Card />  

          </div>


      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 place-items-center gap-[30px]">

        <List />
        <List />

        <div className="last col-start-1 col-end-3 md:col-start-3 md:col-end-5 drt">
            <h3 className='font-semibold text-[25px] mb-[15px]'>عناية الطبيب</h3>
            <p className='w-full text-[15px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fuga? Provident voluptates veniam earum sint.</p>

            <div className="social-links flex gap-[10px] mt-[20px]">

                <FaLinkedin className='text-gray-500 text-[28px]' />
                <FaLinkedin className='text-gray-500 text-[28px]' />
                <FaLinkedin className='text-gray-500 text-[28px]' />
                <FaLinkedin className='text-gray-500 text-[28px]' />


                
            </div>
        </div>


      </div>

      </div>
    </footer>
  )
}

export default Footer
