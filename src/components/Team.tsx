import React from 'react'

const Team = () => {
  return (
    <div className="bg-gray-100 py-12 ">
      <div  className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our team</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='flex mt-10'>
        <img src="Card 7.svg" alt="Card 7" />
        <img src="Card 8.svg" alt="Card 8" />
        <img src="/Card 9.svg" alt="Card 9" />
      </div>
      <div className='flex mt-7'>
        <img src="Card 10.svg" alt="Card 10" />
        <img src="Card 11.svg" alt="Card 11" />
        <img src="/Card 12.svg" alt="Card 12" />
      </div>
    </div>
  )
}

export default Team
