import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import {Line} from 'rc-progress';
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate} = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 1, totalLectures: 5},
    {lectureCompleted: 3, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 3},
    {lectureCompleted: 5, totalLectures: 7},
    {lectureCompleted: 6, totalLectures: 8},
    {lectureCompleted: 2, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 10},
    {lectureCompleted: 3, totalLectures: 5},
    {lectureCompleted: 7, totalLectures: 7},
    {lectureCompleted: 1, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 2},
    {lectureCompleted: 5, totalLectures: 5},
  ])

  return (
    <>
    <div className="md:px-36 px-4 sm:px-8 pt-10">
      <h1 className="text-2xl font-semibold">My Enrollments</h1>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-900 border-b border-gray-500/20 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Duration</th>
              <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Completed</th>
              <th className="px-4 py-3 font-semibold truncate text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center space-x-3 flex-wrap">
                  <img src={course.courseThumbnail} alt="" className="w-14 sm:w-20 md:w-24 rounded-md" />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.
                    courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ?
                      (progressArray[index].lectureCompleted * 100) / progressArray
                    [index].totalLectures : 0} className='bg-gray-300 rounded-full'/>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[index] && `${progressArray[index].
                    lectureCompleted} / ${progressArray[index].totalLectures}`}
                     <span>Lectures</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="sm:py-2 bg-blue-600 max-sm:text-xs text-white
                   px-3 sm:px-5 py-1.5" onClick={()=> navigate('/player/' +
                    course._id
                   )}>
                    {progressArray[index] && progressArray[index].lectureCompleted /
                    progressArray[index].totalLectures === 1 ? 'completed' : 'On Going'}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MyEnrollments;
