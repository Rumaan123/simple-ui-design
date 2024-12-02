import React from 'react'
import { Button } from './ui/button'

const Category = () => {
  return (
    <div className="bg-white w-[1280] h-[1742] mx-auto rounded-lg">
      <div>
      <h1 className="text-6xl font-bold text-center text-black ">Courses</h1>
      <p className="text-lg text-center text-black mt-4 mb-12">Your Ultimate Guide to learning</p>
      </div>

      <div className="flex justify-center mt-8">
      <Button variant="outline">Popular</Button>
      <Button variant="outline">Recommended</Button>
      <Button variant="outline">Best Prize</Button>
      </div>

      <div className='flex space-x-10 mt-8'>
        <img src="/Card 1.svg" alt="Card 1" />
        <img src="/Card 2.svg" alt="Card 2" />
        <img src="/Card 3.svg" alt="Card 3" />
      </div>

      
      <div className='flex space-x-10 mt-8'>
        <img src="/Card 4.svg" alt="Card 4" />
        <img src="/Card 5.svg" alt="Card 5" />
        <img src="/card 6.svg" alt="Card 6" />
      </div>

      <div className="grid place-items-center mt-8">
       <Button variant="outline" className="w-[155px] h-[48px] text-lg flex items-center justify-center">
        View All Courses
       </Button>
      </div>
    </div>
  )
}

export default Category
