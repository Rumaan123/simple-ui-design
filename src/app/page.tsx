import React from 'react'
import Header from '@/components/Header'
import { Button } from "@/components/ui/button"
import Courses from '@/components/Courses'
import Achivement from '@/components/Achivement'
import Category from  '@/components/Category'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full bg-gray-200 text-sm text-gray-800 py-2 px-4 flex justify-between items-center gap-8">
        <div className='flex items-center gap-4'>
          <span>Email:mrumaan316@gmaiil.com</span>
          <span>|</span>
          <span>Phone Number:03062398954</span>
        </div>

        <div className=' flex items-center gap-4'>
        <img src="/Social Links.svg" alt="social links" />
        </div>
      </div>

      <Header />
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 w-[1280px] h-[800px]">
        <div className="relative md:w-1/2 text-center md:text-left z-10 space-y-4">

          <h1 className=" text-6xl font-bold text-black leading-snug">

            Learn new skills online with ease</h1>

          <p className="text-black text-lg leading-relaxed ">

            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <Button variant="outline" className="bg-black text-white px-6 py-3 font-bold" >Start learning now</Button>
          <Button variant="outline" className="border-black text-black px-6 py-3 font-bold" >Explore Courses</Button>
        </div>

        
        <div className="absolute top-[110px] right-[-40px] w-[720] h-auto tansform translate-x-20">
          <img 
            src="/Image.svg" 
            alt="Landing Illustration"
            className=" w-full h-auto object-cover "
          />
        </div>
      </section>

     <div  className="w-full bg-gray-100 py-8 px-8 flex items-center justify-between">
      <div className="flex shrink-0 ">
        <h3 className="text-lg font-bold text-black">Trusted by 2000+ companies worldwide.</h3>

        <div className="flex item-center gap-4 w-[880px] h-[56px] flex-wrap">
      <img src="/Logos.svg" alt="logos" />
     </div>
      </div>
     
     
     </div>
     <Courses/>
     <Achivement/>
     <Category/>
     <Team/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default page
