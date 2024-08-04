"use client";

import {useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { FaRegCalendarAlt,FaRegHeart  } from "react-icons/fa";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Card = ()=>{

  const router = useRouter();

  return(

    <div onClick={()=>router.push("/appointment")} className="bg-white drt p-[20px] rounded-[10px] cursor-pointer">
    
    <div className="image relative">

      <div className="icon absolute top-[20px] left-[20px]">
        <FaRegHeart className='text-white text-[30px] font-bold' />
      </div>

    <img src="/images/card.jpg" alt="card" className='w-full rounded-[10px]' />
    </div>

    <h3 className='mt-[20px] text-[20px] font-semibold'>استشارة الأمراض المزمنة</h3>
    <p className='mt-[20px] text-gray-600 leading-[1.5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <div className="flex flex-row-reverse items-center justify-between mt-[30px]">

      <button className='flex items-center justify-center
       gap-[10px] bg-blue-500 text-white text-[20px]
        w-[180px] h-[45px] rounded-[50px]'>احجز موعدك <FaRegCalendarAlt />
      </button>

      <p className='text-[20px] font-semibold text-gray-600'><span className='text-blue-500'>200</span> ر.س</p>
    </div>
  </div>

  )
}


const Appointment = () => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    
    const handleResize = () => setWidth(window.innerWidth);

    
    handleResize();

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div id="hajz" className='mt-[200px] px-[15px]'>

      <h1 className='font-semibold text-[45px] sm:text-[60px] mb-[10px] text-center'> احجز موعدك الآن</h1>
      <h3 className='sm:text-[25px] text-[22px] text-center'>نحن نقدم أفضل رعاية صحية لعائلتك.نحن نقدم أفضل خدمات العلاج</h3>

      <div className="mt-[50px]">
      
      <Swiper
        slidesPerView={width > 991 ? 3 : (width > 567 && width < 991) ? 2 : 1 }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Appointment
