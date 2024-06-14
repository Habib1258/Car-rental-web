import React from 'react'
import heroImage from '../assets/images/hero.png'
import sedan from '../assets/images/sed.png'
import truck from '../assets/images/truck.png'


const Hero = () => {
  return (
    <>
        <div className="z-0 flex mb-44">
            <div>
                <img src={ heroImage } className='w-screen h-full -z-40 opacity-20 absolute top-0 ' alt="" />
                <h1 className="text-5xl text-white font-serif pl-16 ml-12 mr-36 mt-48">
                    Experience the Freedom<br /> of the Open Road
                </h1>
            </div>
            <div className=' py-7 px-8 ml-3 mr-14 mt-16 opacity-100 z-auto bg-white rounded-md w-1/2 h-auto shadow-lg shadow-slate-600'>
                <h1 className='text-black text-2xl font-bold mb-6'>Chose Car Type ?</h1>
                <div className="flex gap-5 text-center">
                    <button className="px-2 py-2 text-xl text-black border-2 hover:bg-red-700 border-black rounded flex items-center"><img src={sedan} className='w-20 pr-2' alt="" />Sedan</button>
                    <button className="px-2 py-2 text-xl text-black border-2 hover:bg-red-700 border-black rounded flex items-center"><img src={truck} className='w-20 pr-2' alt="" />Truck</button>
                </div>
                <div className=" mt-5 grid grid-flow-col grid-cols-3 grid-rows-2">
                    <label className='text-black underline underline-offset-4'>Place Of Departure :</label>
                    <input type="text" className=' bg-slate-200 rounded py-2 px-2 w-36 text-black hover:outline outline-offset-2 outline-black outline-2' placeholder='Place Of Departure'/>
                    <label className='text-black underline underline-offset-4'>Place Of Arrival :</label>
                    <input type="text" className='bg-slate-200 w-36 rounded py-2 px-2 text-black hover:outline outline-offset-2 outline-black outline-2' placeholder='Place Of Arrival'/>
                    <label className='text-black underline underline-offset-4'>Date Of Reservation :</label>
                    <input type="date" className='text-black bg-slate-200 w-36 rounded py-2 px-2 hover:outline outline-offset-2 outline-black outline-2 '/>
                </div>
                <div className='mt-6 grid grid-row-2 grid-cols-2'>
                    <div className='grid'>
                        <label htmlFor="Age" className='underline underline-offset-4 text-xl text-black'>Age :</label>
                        <input type="text" className='bg-slate-200 w-36 mt-4 rounded py-2 px-2 hover:outline outline-offset-2 outline-black outline-2' placeholder='Age'/>
                    </div>
                    <div>
                        <button className='mt-10 ml-36 bg-red-600 py-2 px-16 rounded text-white font-bold hover:bg-red-800 hover:outline hover:outline-2 outline-offset-2 outline-red-400' type="submit">Book</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero