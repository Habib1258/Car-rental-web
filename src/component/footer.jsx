import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <>
        <section className="bg-black">
                
            <div className="flex">
                <div className=' w-3/6'>
                    <h1 className="text-4xl text-white pl-6 mt-20 ml-36 font-cambria">
                            Follow us Via Social media
                    </h1>
                    <div className=' mb-96 ml-80 mr-96 relative '>
                        <ul className="flex mt-6 py-3 px-3 gap-16 justify-center rounded-xl ">
                            <a href="https://github.com/Habib1258" target="_blank"><FaGithub className='text-4xl text-white hover:text-red-600'/></a>
                            <a href="https://www.linkedin.com/in/habib-mustapha-ab587a1b3/" target="_blank"><FaLinkedinIn className='text-4xl text-white hover:text-red-600'/></a>
                            <a href="https://x.com/abdesselemmust1?s=21" target="_blank"><FaXTwitter className='text-4xl text-white hover:text-red-600'/></a>
                            <a href="https://web.facebook.com/habib.mustapha.9210" target="_blank"><FaFacebookF className='text-4xl text-white hover:text-red-600'/></a>
                        </ul>
                    </div>
                </div>
                <div className='text-white mb-28 w-3/6'>
                        <h1 className="text-4xl text-white  mt-20 ml-48 mr-80 font-cambria">
                            Contact us
                        </h1>
                        <div className="bg-gray-200 text-2xl hover:bg-red-600 hover:text-white text-black w-auto ml-20 mr-64 mt-20 rounded py-4 px-4 flex">
                            <FaEnvelope />
                            <h1 className="text-black text-2xl hover:text-white pl-6">habib054mustapha@gmail.com</h1>
                        </div>
                        <div className="bg-gray-200 text-2xl hover:bg-red-600 hover:text-white text-black w-auto ml-20 mr-64 mt-20 rounded py-4 px-4 flex">
                            <FaPhone />
                            <h1 className="text-black text-2xl hover:text-white pl-6">+213 549573583</h1>
                        </div>
                        <div className="bg-gray-200 text-2xl hover:bg-red-600 hover:text-white text-black w-auto ml-20 mr-64 mt-20 rounded py-4 px-4 flex">
                            <FaMapMarkerAlt />
                            <h1 className="text-black text-2xl hover:text-white pl-6">Tiaret, Algeria</h1>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer