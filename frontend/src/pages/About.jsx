import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At EverCare Health, we are dedicated to transforming the way you access healthcare. Our platform bridges the gap between patients and healthcare providers, enabling seamless doctor appointment bookings with just a few clicks. We aim to make healthcare more accessible, reliable, and user-friendly for everyone.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower individuals by offering a streamlined and personalized healthcare experience. Whether it’s connecting with trusted professionals or managing your appointments effortlessly, EverCare Health is here to support you every step of the way. Your well-being is our priority, and we strive to ensure quality care at your convenience.</p>
          <p>With a focus on innovation and simplicity, EverCare Health continuously evolves to meet the demands of modern healthcare. We believe in making a positive impact on your health journey by offering tools and solutions that cater to your unique needs. Join us as we redefine healthcare accessibility for a better tomorrow.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>EverCare Health ensures quick and seamless appointment bookings, saving you time and effort while providing reliable healthcare solutions.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access healthcare anytime, anywhere with our user-friendly platform, designed to fit into your busy lifestyle effortlessly.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Experience tailored healthcare solutions that cater to your unique needs, connecting you with the right professionals for your well-being.</p>
        </div>
      </div>
    </div>
  )
}

export default About
