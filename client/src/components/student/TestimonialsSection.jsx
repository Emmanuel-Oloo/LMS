import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <section className='py-16 px-6 md:px-12 lg:px-20 bg-gray-50'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold text-gray-900'>Testimonials</h2>
        <p className='text-lg text-gray-600 mt-3 max-w-2xl mx-auto'>
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {dummyTestimonial?.map((testimonial, index) => (
          <div
            key={testimonial.id || index}
            className='border border-gray-200 rounded-lg bg-white shadow-lg overflow-hidden flex flex-col'
          >
            <div className='flex items-center gap-4 px-6 py-4 bg-gray-100'>
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={testimonial.image || assets.defaultProfile}
                alt={testimonial.name || 'User'}
              />
              <div>
                <h3 className='text-lg font-medium text-gray-900'>{testimonial.name}</h3>
                <p className='text-gray-600 text-sm'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-6 flex-1 flex flex-col justify-between'>
              <div>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className='h-5'
                      src={i < Math.floor(testimonial.rating || 0) ? assets.star : assets.star_blank}
                      alt='star'
                    />
                  ))}
                </div>
                <p className='text-gray-700 mt-4 text-sm leading-relaxed'>{testimonial.feedback}</p>
              </div>
              {testimonial.link && (
                <a href={testimonial.link} className='text-blue-600 font-medium text-sm mt-4 hover:underline'>
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
