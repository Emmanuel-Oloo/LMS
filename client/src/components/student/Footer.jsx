import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        
        {/* Logo & Description */}
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="Company Logo" className="h-10" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, accusantium?
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex flex-col text-sm text-white/80 md:space-y-2 space-y-2 md:w-auto">
            <li><a href="#" aria-label="Home">Home</a></li>
            <li><a href="#" aria-label="About Us">About Us</a></li>
            <li><a href="#" aria-label="Contact Us">Contact Us</a></li>
            <li><a href="#" aria-label="Privacy Policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our Newsletter</h2>
          <p className="text-sm text-white/80 mb-4">
            Get the latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex w-full max-w-xs">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-full text-gray-900 rounded-l-md outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2025 @ Emmanuel. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer;
