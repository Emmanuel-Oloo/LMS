import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <Link 
      to={'/course/' + course._id} // ✅ Fixed path
      onClick={() => window.scrollTo(0, 0)} // ✅ Fixed scrollTo
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img className='w-full' src={course.courseThumbnail} alt={course.courseTitle} />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>GreatStack</p>
        <div className='flex items-center space-x-2'>
  <p>{calculateRating(course).toFixed(1)}</p> {/* Show rating with 1 decimal */}
  
  <div className='flex'>
    {[...Array(5)].map((_, i) => (
      <img 
        key={i} 
        src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
        alt="star"
        className='w-3.5 h-3.5' 
      />
    ))}
  </div>
  
  <p className='text-gray-500'>{course?.courseRating?.length || 0} reviews</p>
</div>

        <p className='text-base font-semibold text-gray-800'>
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
