import React from 'react'

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="text-7xl font-bold text-black ml-4">
        <h1 className="text-5xl font-bold text-black">Customer testimonials</h1>
        <p className="text-lg text-black mt-8 ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className='flex space-x-6 mt-6'>
        <img src="Content 1.svg" alt="Content" />
        <img src="Content 2.svg" alt="Content" />
        <img src="Content 3.svg" alt="Content" />
      </div>

      <div className='mt-8'>
        <img src="Content 4.svg" alt="Content" />
      </div>
    </div>
  )
}

export default Testimonial
