import React from 'react'
import ass from '../assets/images/ass.png';
import assi from '../assets/images/assi.png';
import main from '../assets/images/main.png';

const Whyus = () => {
  return (
    <>
        <section className='bg-gray-200 text-black h-1/3'>
            <h1 className='text-5xl ml-64 text-red-600 font-cambria underline underline-offset-4'>why us</h1>
                <div className="grid grid-row-1 grid-cols-3 items-center mx-72 mt-20 ">
                    <div className="grid  grid-rows-2 grid-cols-1 w-1/3 mb-36">
                        <img className='w-64 ml-36 ' src={ass} alt="" />
                        <h1 className='text-3xl text-center ml-32 mt-12'>Assurance</h1>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-1 w-1/3 mb-36">
                        <img className='w-64 ml-36 ' src={assi} alt="" />
                        <h1 className='text-3xl text-center ml-32 mt-12'>Assistance</h1>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-1 w-1/3 mb-36">
                        <img className='w-64 ml-36 ' src={main} alt="" />
                        <h1 className='text-3xl text-center ml-28 mt-12'>Maintenance</h1>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Whyus