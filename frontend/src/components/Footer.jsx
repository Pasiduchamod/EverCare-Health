import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---------Left Side--------*/}
            <div>
                <img className='mb-5 w-40'src={assets.logo}></img>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>EverCare Health is your trusted partner for seamless doctor appointment bookings.Experience reliable healthcare, reimagined with EverCare.</p>
            </div>
            {/*----------center----------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*----------Right Side------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94-71234567</li>
                    <li>EverCaredev@gmail.com</li>
                </ul>
            </div>
        </div>
            {/*-------------CopyrigtText---------*/}
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2024@ EverCare - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer