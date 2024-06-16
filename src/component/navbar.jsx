import logo  from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className='flex z-50'>
        <a className='cursor-pointer' href="#home"><img className="h-auto w-64 pl-12 pt-1" src={ logo } alt="habib's logo" /></a>
            <div className="list-none w-5/6">
                <ul className="w-11/12 flex pt-6 justify-center gap-4 z-50">
                    <a className='cursor-pointer' href="#Home"><li className=" py-6 px-4 text-end space-x-5 text-xl underline underline-offset-8 decoration-red-600 hover:text-red-600 text-white">Home</li></a>
                    <a className='cursor-pointer' href="#Vehicules"><li className=" py-6 px-4 text-end space-x-5 text-xl underline underline-offset-8 decoration-red-600 hover:text-red-600 text-white">Vehicules</li></a>
                    <a className='cursor-pointer' href="#Offers"><li className=" py-6 px-4 text-end space-x-5 text-xl underline underline-offset-8 decoration-red-600 hover:text-red-600 text-white">Offers</li></a>
                    <a className='cursor-pointer' href="#contact"><li className=" py-6 px-4 text-end space-x-5 text-xl underline underline-offset-8 decoration-red-600 hover:text-red-600 text-white">Contact Us</li></a>
                </ul>
            </div>
            <button className='text-white text-xl border-2 mr-10 mt-7 mb-6 py-1 px-4 rounded border-red-600 hover:bg-red-600 font-cambria'>BOOK</button>
      </nav>
    </>
  )
}

export default Navbar