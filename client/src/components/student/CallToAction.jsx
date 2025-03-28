import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">Learn anything, anytime, anywhere</h1>
      <p className="text-gray-500 sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque. 
        Doloribus nihil mollitia nisi voluptate necessitatibus eos quia aliquam
      </p>

      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
        <button className="bg-gray-300 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-400"><img src={assets.arrow_icon} alt="arrow_icon" />
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
