"use client";

import { useState } from 'react'
import { FaChevronDown,FaRegCalendarPlus,FaRegUser } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosAttach,IoMdArrowUp } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";

const Card = ({active})=>{

  return(
    <div className={`bg-white h-[105px] pointer-events-none
     border-[3px] ${active ? 'border-blue-500' : 'border-[#d6d5d5]'}
      p-[15px] rounded-[20px] relative`}>

        <div className={`bullet w-[20px] h-[20px] rounded-full relative bg-white
          ${active ? 'border-[6px] border-blue-500' : 'border-[3px] border-[#ccc] shadow-lg'}`}>

        </div>

      <img src="/images/visa.png" alt="card" className='w-[100px] absolute top-1/2 -translate-y-1/2 left-[10px]' />
    </div>
  )
}

const Appointment = () => {

    const [step1,setStep1] = useState(false);
    const [step2,setStep2] = useState(false);

    const [names,setNames] = useState({
      name1: false,
      name2: false,
      name3: false
    })

    const [banks,setBanks] = useState({
      bank1: true,
      bank2: false,
      bank3: false,
      bank4: false
    })


  return (
    <div className='mt-[70px] px-[15px] ibm-plex-sans-arabic-semibold'>
      
     <div className="flex flex-col-reverse lg:flex-row items-center gap-[50px] mb-[50px]">

        <div className="text text-right flex-1">

        <h1 className='text-[40px] font-semibold ibm-plex-sans-arabic-medium'>استشارة السكري نوع  ثاني</h1>

        <h3 className='text-[22px] my-[20px] font-semibold drt'>120 ر.س</h3>

        <p className='text-gray-400 lg:text-[21px] leading-[2.5]'>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Iure ut placeat aut, quam similique reiciendis alias perferendis!
             Tenetur ad molestias debitis quae amet! Nihil sit nisi odit officiis expedita? Laboriosam.
        </p>
      </div>

      <div className="image w-full h-[400px] lg:basis-[600px]">
        <img src="/images/card.jpg" alt="card" className='w-full h-full object-cover rounded-[10px]' />
      </div>


     </div>

     <div className="step-1 bg-white p-[20px] rounded-[10px] border border-[#ccc] w-[800px] max-w-full">

        <div className="flex justify-between">

        <FaChevronDown className='text-gray-500'/>
        <span className='text-gray-600 font-bold text-[14px]'>الخطوة 3/1</span>

        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-[10px] justify-between items-center mt-[20px]">

            <button className='cursor-pointer flex justify-center items-center gap-[10px]
             w-[180px] h-[50px] bg-blue-600
              text-white text-[20px] rounded-[50px]'>
            إضافة مريض <FaRegCalendarPlus />
            </button>

            <span className='font-semibold text-[25px]'>اختر مريضا</span>

        </div>

        <div className="flex flex-wrap justify-end gap-[20px] mt-[40px]">

            <span onClick={()=>{
              setStep1(true)
              setNames({name1: true,name2: false, name3: false})
            }} className={`patient-name ${names.name1 ? 'bg-blue-600 text-white' : ''}`}>احمد امين</span>
            
            <span onClick={()=>{
              setStep1(true)
              setNames({name1: false,name2: true, name3: false})
            }} className={`patient-name ${names.name2 ? 'bg-blue-600 text-white' : ''}`}>احمد امين</span>


            <span onClick={()=>{
              setStep1(true)
              setNames({name1: false,name2: false, name3: true})
            }} className={`patient-name ${names.name3 ? 'bg-blue-600 text-white' : ''}`}>احمد امين</span>

        </div>

     </div>

     <div className="step-2 bg-white p-[20px] rounded-[10px] border border-[#ccc] w-[800px] max-w-full my-[30px]">

        <div className="flex justify-between">

        <FaChevronDown className='text-gray-500'/>
        <span className='text-gray-600 font-bold text-[14px]'>الخطوة 3/2</span>

        </div>

        <span className='block font-semibold text-[25px] text-right mt-[30px] mb-[20px]'>اشرح المشكلة الصحية التي تعاني منها</span>

        {
            step1 &&

            <div className="drt">
              
              <div className="info">

                <p className='text-gray-400 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Expedita ipsa excepturi quaerat nostrum esse cum optio in at
                  
                </p>

                <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-center mt-[30px]">

                <button className='cursor-pointer flex justify-center items-center gap-[10px]
             w-[120px] h-[50px] bg-blue-600 mt-[15px]
              text-white text-[20px] rounded-[50px]'>تسجيل</button>

              <p className='flex flex-row-reverse items-center gap-[5px] text-[18px] text-gray-700'> 
                <span className='text-gray-400'>(اختياري)</span>
                
                ملاحظة صوتية

                <CiMicrophoneOn className='text-[30px]' />

              </p>


                </div>

              <p className='justify-end flex flex-row-reverse items-center gap-[5px] mt-[30px] text-[18px] text-gray-700'> 
                <span className='text-gray-400'>(اختياري)</span>
                
                ملاحظة نصية

                <IoDocumentTextOutline className='text-[30px]' />

              </p>

              <textarea className='form-txtarea block w-full h-[150px] border border-[#ccc]
               rounded-[4px] px-[20px] py-[15px] resize-none mt-[20px] focus:outline-none' 
               placeholder='اكتب ملاحظاتك و اذا كنت تعاني من اي مرض او حساسية' />

               <div className="files mt-[30px]">

               <p className='justify-end flex flex-row-reverse items-center mb-[15px] gap-[5px] text-[18px] text-gray-700'> 
                <span className='text-gray-400'>(اختياري)</span>
                
                المرفقات

                <IoIosAttach className='text-[30px]' />

              </p>

              <input type="file" className='hidden' id='attach' />

              <label
               htmlFor="attach"
               className='block w-full h-[200px] rounded-[5px] cursor-pointer
               border-dashed border-[#bbbaba] border-[3px] relative'
               >

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">

                <span className="grid place-items-center bg-slate-400 text-white
                 w-[45px] h-[45px] rounded-full text-[25px] mx-auto">
                  <IoMdArrowUp />
                  </span>

                  <p className='text-gray-700 text-center mt-[20px] text-[17px]'>اضغط هنا لاختيار الملف</p>


                </div>

              </label>

               </div>

              </div> {/* end info */}

              

                <button onClick={()=>setStep2(true)} className='cursor-pointer flex flex-row-reverse justify-center items-center gap-[10px]
             w-[120px] h-[50px] bg-blue-600 mx-auto mt-[30px]
              text-white text-[20px] rounded-[50px]'>متابعة <FaRegCalendarPlus />
              </button>
            </div>
        }
     </div>

     <div className="step-3 bg-white p-[20px] rounded-[10px] border border-[#ccc] w-[800px] max-w-full my-[30px]">

        <div className="flex justify-between">

        <FaChevronDown className='text-gray-500'/>
        <span className='text-gray-600 font-bold text-[14px]'>الخطوة 3/3</span>

        </div>

        <span className='block font-semibold text-[25px] text-right mt-[30px] mb-[20px]'>تفاصيل الدفع</span>

        {
            step2 &&

            <div className="drt">

              <div className="info ibm-plex-sans-arabic-medium">

                <div className="hajz bg-[#f5f4f4dc] p-[20px] rounded-[6px]">
                  <h3 className='font-semibold text-[20px]'>معلومات الحجز</h3>
                  <h4 className='mt-[20px] text-[18px] font-medium text-gray-700'>استشارة طبية فيديو</h4>

                  <div className="time flex flex-wrap justify-between items-center gap-[20px] mt-[30px]">

                    <div className="first flex items-center gap-[10px] text-[18px] text-gray-800">
                      <BsCalendarDate className='text-[25px]' />
                      التاريخ: 30 مارس 2024 12:00 مساءا
                    </div>

                    <div className="second flex items-center gap-[10px] text-[18px] text-gray-800">
                      <MdOutlineSpeed className='text-[25px]' />
                      المدة: ساعة
                      </div>

                    <div className="last flex items-center gap-[10px] text-[18px] text-gray-800">
                      <FaRegUser className='text-[25px]' />
                      الطبيب: احمد علي 
                    </div>


                  </div>
                </div>

                <div className="coupon bg-[#f5f4f4dc] p-[20px] rounded-[6px] mt-[20px]">

                  <h3 className='font-semibold text-[20px]'>كوبون التخفيض</h3>

                  <input 
                  type="text"
                  placeholder='اضف كوبون التخفيض'
                  className='form-inp block w-full border border-[#ccc]
               rounded-[5px] px-[20px] py-[10px] resize-none mt-[20px] focus:outline-none'
                   />

                </div>

                <div className="payment bg-[#f5f4f4dc] p-[20px] rounded-[6px] mt-[20px]">

                <h3 className='font-semibold text-[20px] mb-[20px]'>طريقة الدفع</h3>

                <div className="bank bg-white px-[10px] rounded-[6px] border border-[#ccc]
                 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
                  <p className='flex ibm-plex-sans-arabic-medium flex-wrap gap-[3px] text-[15px] text-gray-700 relative top-[20px] lg:top-0'>

                    <span>دفعات بلا فوائد  بقيمة 4</span>

                  <span className='font-bold ibm-plex-sans-arabic-bold text-[16px]'>450.00 SAR</span>
                  . بدون رسوم، و متوافقة مع احكام الشريعة.

                  <span className='underline cursor-pointer'>لمعرفة المزيد</span>
                  </p>

                  <img src="/images/bank.svg" alt="bank" className='w-[90px] lg:w-[120px]' />
                </div>

                <div className="bank mt-[20px] bg-white px-[10px] rounded-[6px] border border-[#ccc]
                 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
                  <p className='flex flex-wrap gap-[3px] text-[15px] text-gray-700 relative top-[20px] lg:top-0'>

                    <span>دفعات بلا فوائد  بقيمة 4</span>

                  <span className='font-bold ibm-plex-sans-arabic-bold text-[16px]'>450.00 SAR</span>
                  . بدون رسوم، و متوافقة مع احكام الشريعة.

                  <span className='underline cursor-pointer'>لمعرفة المزيد</span>
                  </p>

                  <img src="/images/bank.svg" alt="bank" className='w-[90px] lg:w-[120px]' />
                </div>

                <span className="block text-center my-[30px] font-bold text-[20px] text-slate-800">أو</span>

                <div className="banks grid ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">

                  <div onClick={()=>{
                    setBanks({
                      bank1: true,
                      bank2: false,
                      bank3: false,
                      bank4: false
                    })
                  }} className='cursor-pointer'>
                  <Card active={banks.bank1} />
                  </div>

                  <div onClick={()=>{
                    setBanks({
                      bank1: false,
                      bank2: true,
                      bank3: false,
                      bank4: false
                    })
                  }} className='cursor-pointer'>
                  <Card active={banks.bank2} />
                  </div>

                  <div onClick={()=>{
                    setBanks({
                      bank1: false,
                      bank2: false,
                      bank3: true,
                      bank4: false
                    })
                  }} className='cursor-pointer'>
                  <Card active={banks.bank3} />
                  </div>

                  <div onClick={()=>{
                    setBanks({
                      bank1: false,
                      bank2: false,
                      bank3: false,
                      bank4: true
                    })
                  }} className='cursor-pointer'>
                  <Card active={banks.bank4} />
                  </div>

                </div>

                <form className='mt-[30px]'>
                  
                  <div>
                  <label className='ibm-plex-sans-arabic-medium font-medium text-slate-800'>اسم حامل البطاقة</label>

                  <input 
                  type="text"
                  placeholder='أحمد'
                  className='form-inp2 block w-full border border-[#ccc]
               rounded-[5px] px-[20px] py-[10px] resize-none mt-[15px] focus:outline-none'
                   />

                  </div>

                  <div className='mt-[20px]'>
                  <label className='ibm-plex-sans-arabic-medium font-medium text-slate-800'>رقم البطاقة</label>

                  <input 
                  type="text"
                  placeholder='4578 4102 5021 1234 '
                  className='form-inp2 block w-full border border-[#ccc]
               rounded-[5px] px-[20px] py-[10px] resize-none mt-[15px] focus:outline-none'
                   />

                  </div>

                  <div className="flex flex-col sm:flex-row gap-[20px] mt-[20px]">

                  <div className=''>
                  <label className='ibm-plex-sans-arabic-medium font-medium text-slate-800'>تاريخ انتهاء الصلاحية (MM/YY)</label>

                  <input 
                  type="text"
                  placeholder='12/24'
                  className='form-inp2 block w-full border border-[#ccc]
               rounded-[5px] px-[20px] py-[10px] resize-none mt-[15px] focus:outline-none'
                   />

                  </div>

                  <div className=''>
                  <label className='ibm-plex-sans-arabic-medium font-medium text-slate-800'>رمز الامان cvv</label>

                  <input 
                  type="text"
                  placeholder='***'
                  className='form-inp2 block w-full border border-[#ccc]
               rounded-[5px] px-[20px] py-[10px] resize-none mt-[15px] focus:outline-none'
                   />

                  </div>


                  </div>
                </form>

                </div>

                <div className="total bg-[#f5f4f4dc] p-[20px] rounded-[6px] mt-[20px]">

                  <h3 className='font-semibold text-[20px] mb-[20px]'>تفاصيل السعر</h3>

                  <p className='flex justify-between items-center font-semibold text-[17px]'>
                  رسوم استشارة طبية
                  <span>120 ر.س</span>
                  </p>

                  <p className='flex justify-between items-center font-semibold text-[17px] my-[20px]'>
                  رسوم استشارة طبية
                  <span>18 ر.س</span>
                  </p>

                  <span className='block w-full h-[1px] bg-gray-300 mb-[20px]'></span>

                  <p className='flex justify-between items-center font-bold text-[20px] my-[20px]'>
                  المبلغ المستحق
                  <span className='text-blue-500'>138 ر.س</span>
                  </p>


                </div>

                

              </div> {/* end info */}

              
               

                <button onClick={()=>setStep2(true)} className='cursor-pointer flex justify-center items-center gap-[10px]
             w-full h-[50px] bg-blue-600 mx-auto mt-[15px]
              text-white text-[20px] rounded-[50px]'>ادفع 138 ر.س 
              </button>
            </div>
        }

     </div>
     
    </div>
  )
}

export default Appointment
