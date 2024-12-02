import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className="bg-white py-12 px-4  space-x-10">
      <div className="text-start mb-6">
        
        <h1 className="text-3xl font-bold text-black">Subscribe to our newsletter</h1>
        <p className="text-lg text-black mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
      
        <div className="flex justify-end space-x-4 mb-6">
        <Button variant='outline' className='w-[265px] h-[48px]'>Enter your email</Button>
        <Button variant='outline' className='w-[119px] h-[48px]'>Subcribe</Button>
        </div>
      </div>

      
      <div>
        <img src="Links.svg" alt="Links" />
        <img src="/Credits.svg" alt="Credits" />
      </div>
    </div>
  )
}

export default Footer
