import React from 'react'
import rent1 from '../assets/images/rent1.jpeg'
import rent2 from '../assets/images/rent2.jpeg'
import rent3 from '../assets/images/rent3.jpeg'

const Offer = () => {
  return (
    <>
        <section className="bg-gray-200 text-red-600 h-screen">
            <h1 className="text-5xl underline underline-offset-4 text-center pt-10 font-cambria">Offer</h1>
            <div className="grid gap-y-6 justify-center mt-12 ">
                <div className="flex gap-x-7 gap-y-5 w-full">
                    <div className='relative h-64  gap-x-5'>
                        <img className='w-80 h-64 -z-40' src={rent1} alt="" />
                        <div>
                            <h1 className='absolute top-5 left-5 font-bold bg-red-600 text-white rounded py-4 px-4 '>50% Offer</h1>
                        </div>
                        <div className='bg-black opacity-40 absolute -bottom-0 w-80 h-24 z-30 '>
                            
                        </div>
                        <h3 className='absolute bottom-3 left-5 z-50 text-white text-2xl'>
                                Book Now And Get 50% <br />On All Cars
                        </h3>
                    </div>
                    <div>
                        
                        <div className='relative h-64  gap-x-5'>
                        <img className='w-96 h-64 -z-40' src={rent2} alt="" />
                        <div>
                            <h1 className='absolute top-5 left-5 font-bold bg-red-400 text-white rounded py-4 px-4 '>20% Offer</h1>
                        </div>
                        <div className='bg-black opacity-40 absolute bottom-0 w-96 h-24 z-30 '>
                            
                        </div>
                        <h3 className='absolute bottom-3 left-5 z-50 text-white text-2xl'>
                            Limited Time Offer: 20% Off <br />On All Luxury Vehicles!
                        </h3>
                    </div>
                    </div>
                </div>
            </div>
                    <div className='relative h-64 w-5/12 ml-96 mt-10 mb-44 pl-2'>
                        <img className='w-5/6 h-64 -z-40' src={rent3} alt="" />
                        <div>
                            <h1 className='absolute top-5 left-5 font-bold bg-red-600 text-white rounded py-4 px-4 '>30% Offer</h1>
                        </div>
                        <div className='bg-black opacity-40 absolute bottom-0 w-5/6 h-24 z-30'>
                            
                        </div>
                        <h3 className='absolute bottom-5 left-5 z-50 text-white text-2xl'>
                             New Customer Offer: 30% Off <br />Your First Rental
                        </h3>
                    </div>
        </section>
    </>
  )
}

export default Offer