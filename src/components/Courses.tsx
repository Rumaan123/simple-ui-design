import React from "react";
import { Button } from "./ui/button";

const Courses = () => {
  return (
    <div className="text-center px-4 py-10 bg-white">
      
      <h1 className=" text-5xl font-bold  mb-4">
        Explore Courses By Category
      </h1>
      <p className=" text-lg text-black leading-relaxed mb-8">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full  hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 292.svg" alt="Icon 1" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Design & Development</h2>
            <p className="text-sm text-black font-medium">
            50+ Courses Available
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 293.svg" alt="Icon 2" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Marketing</h2>
            <p className="text-sm text-black font-medium">
            50+ Courses Available
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 294.svg" alt="Icon 3" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Development</h2>
            <p className="text-sm text-black font-medium">
            50+ Courses Available
            </p>
          </div>
        </div>
        {/* {card 4} */}

        <div className="flex  items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 295.svg" alt="Icon 4" className="w-32 h-32"/>
          </div>

        <div>
        <h2 className="text-lg font-bold text-black mb-1">Communication</h2>
        <p className="text-sm text-black font-medium">50+ Courses Available</p>
        </div>
        </div>

        {/* {card 5} */}

        <div className="flex   items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full hover:bg-gray-200 transition" >
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 296.svg" alt="Icon 5" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Digital Marketing</h2>
            <p className="text-sm text-black font-medium">50+ Courses Available</p>
          </div>
        </div>
        {/* {card 6} */}
        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full  hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 297.svg" alt="Icon 6" className="w-32 h-32"/>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Self Development</h2>
            <p className="text-sm text-black font-medium">50+ Courses Available</p>
          </div>
        </div> 
        {/* {card 7} */}
        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full  hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 298.svg" alt="Icon 7" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Business</h2>
            <p className="text-sm text-black font-medium">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full  hover:bg-gray-200 transition">
          <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
            <img src="/Frame 299.svg" alt="Icon 8" className="w-32 h-32"/>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-1">Finance</h2>
            <p className="text-sm text-black font-medium">50+ Courses Available</p>
          </div>
        </div>
        {/* {card 9} */}
        <div className="flex  items-center bg-[#F7F7F7] shadow-md p-6 rounded-lg w-full  hover:bg-gray-200 transition">
         <div className="flex items-center justify-center w-[100px] h-[100px] border border-gray-300 rounded-full mr-4">
          <img src="/Frame 2910.svg" alt="Icon 9" className="w-32 h-32"/>
         </div>
         <div>
          <h2 className="text-lg font-bold text-black mb-1">Consulting</h2>
          <p className="text-sm text-black font-medium">50+ Courses Available</p>
         </div>
        </div>

      </div>
      <div className="grid place-items-center mt-8 w-full">
       <Button variant="outline" className="w-[155px] h-[48px] text-lg flex items-center justify-center">
        View All Courses
       </Button>
      </div>

    </div>
  );
};

export default Courses;