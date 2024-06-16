import React from 'react'
import car1 from '../assets/images/sed.png';
import car2 from '../assets/images/truck.png';
import car3 from '../assets/images/s.png';
import car4 from '../assets/images/wagen.png';
import car5 from '../assets/images/suv.png';
import car6 from '../assets/images/elec.png';
import car7 from '../assets/images/hatch.png';
import car8 from '../assets/images/cabr.png'


const Types = () => {
  return (
    <>
        <section className="bg-gray-200 h-screen">
            <h1 className="text-red-600 text-5xl underline underline-offset-4 ml-64 font-cambria">
                Car Types 
            </h1>
            <div className="grid grid-rows-2 grid-cols-4 mt-16 mx-48 gap-8 ">
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 bg-cover relative bg-white'>
                    <div className="bg-yellow-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Available </h1></div>
                    <img className='w-3/6 mx-auto mt-10' src={car1} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Sedan</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white'>
                    <div className="bg-yellow-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Available </h1></div>
                    <img className='w-3/6  mx-auto mt-10' src={car2} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Pick-up</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white'>
                    <div className="bg-yellow-500 w-28 text-black text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Available </h1></div>
                    <img className='w-3/6 mx-auto mt-10' src={car3} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Sport Car</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white h-64'>
                    <div className="bg-yellow-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0">
                        <h1>Available </h1>
                    </div>
                    <img className='w-3/6 mx-auto mt-10' src={car4} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Wagen</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 bg-cover relative bg-white'>
                    <div className="bg-yellow-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Available </h1></div>
                    <img className='w-3/6 mx-auto mt-10' src={car5} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">SUV</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white'>
                    <div className="bg-red-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Non-Available </h1></div>
                    <img className='w-5/6  mx-auto mt-16' src={car6} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Electric</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white'>
                    <div className="bg-yellow-500 w-28 text-black text-center  absolute top-4 left-4 rounded-lg py-0 px-0"><h1>Available </h1></div>
                    <img className='w-5/6 mx-auto mt-10' src={car7} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Hatchback</h1>
                </div>
                <div className='grid grid-cols-1 justify-center items-center shadow-md shadow-gray-400 relative bg-white p-6'>
                    <div className="bg-red-500 w-28 text-black object-contain text-center  absolute top-4 left-4 rounded-lg py-0 px-0">
                        <h1>Non-Available </h1>
                    </div>
                    <img className='w-5/6 mx-auto mt-10' src={car8} alt="" />
                    <h1 className="text-2xl text-black text-center absolute bottom-2 left-1/3">Convertible</h1>
                </div>
                

            </div>
        </section>
    </>
  )
}

export default Types