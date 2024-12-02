import React from 'react'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-[72px] px-10 bg-[#F7F7F7] ">
       
        <div className="flex items-center  space-x-10.5">
            <img src='/Ddsgnr Library.svg' alt='Logo' />
        </div>

        <nav >
            <ul className="flex space-x-10 list-none bg-white  ">
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/courses'>Courses</a>
                    </li>
                <li>
                    <a href="/services">Services</a>
                    </li>
                <li>
                    <a href='/achievement'>Achievement</a>
                    </li>
                <li>
                    <a href='/about us'>About Us</a>
                    </li>
                <li>
                    <a href='/testimonial'>Testimonial</a>
                    </li>
                <Button variant="outline">Login</Button>
                <Button variant="outline">Sign Up</Button>

            </ul>
            
        </nav>
    </header>
  )
}

export default Header
