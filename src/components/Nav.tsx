import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-4 sm:mx-10 mx-3 bg-black border-b-2 border-gray-300'>
        <div>20X HUB</div>
        <div>
            <ul className='flex items-center sm:gap-5 gap-2 uppercase leading-loose py-3 sm:text-[17px] text-[12px]'>
                <Link href={"/"}><li className='text-white hover:text-[#ccff00] duration-150'>About</li></Link>
                <Link href={"/"}><li className='text-white hover:text-[#ccff00] duration-150'>BLOG</li></Link>
                <Link href={"/"}><li className='text-white hover:text-[#ccff00] duration-150'>COMMUNITY</li></Link>
                <Link href={"/"}><li className='text-white hover:text-[#ccff00] duration-150'>LOG IN</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar