import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <p>Sir  I believe that I am great fite for this role and I am self motivated person and give my 100 percent to any task that is given to me that is why I am been able to do good with my academics and surely I will do the same for any project that is given to me in the company.</p>
          <p>Sir  I believe that I am great fite for this role and I am self motivated person and give my 100 percent to any task that is given to me that is why I am been able to do good with my academics and surely I will do the same for any project that is given to me in the company. I also worked so well in both as an individual contributer and team member that is why I have multiple solo and team project. Overall I can contribute alot to the organization with my skills and will.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision, Founded in the 1950s as a division of Arthur Andersen, Accenture became an independent company in 2001. It offers services such as strategy and consulting, digital transformation, technology implementation, and operations management. The company is also recognized for its focus on innovation and digital solutions, particularly in areas like artificial intelligence, cloud computing, and cybersecurity.</p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you to stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
