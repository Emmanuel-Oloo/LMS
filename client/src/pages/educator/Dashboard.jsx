import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setDashboardData(dummyDashboardData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0 bg-gray-100">
      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-6 space-y-5 md:space-y-0 w-full">
        {/* Total Enrollments */}
        <div className="flex items-center gap-3 shadow-lg border border-blue-500 p-4 w-full md:w-1/3 rounded-lg bg-white">
          <img src={assets.patients_icon} alt="Total Enrollments Icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">{dashboardData?.enrolledStudentsData?.length || 0}</p>
            <p className="text-base text-gray-500">Total Enrollments</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="flex items-center gap-3 shadow-lg border border-blue-500 p-4 w-full md:w-1/3 rounded-lg bg-white">
          <img src={assets.appointments_icon} alt="Total Courses Icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">{dashboardData?.totalCourses || 0}</p>
            <p className="text-base text-gray-500">Total Courses</p>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="flex items-center gap-3 shadow-lg border border-blue-500 p-4 w-full md:w-1/3 rounded-lg bg-white">
          <img src={assets.earning_icon} alt="Total Earnings Icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">
              {currency} {dashboardData?.totalEarning || 0}
            </p>
            <p className="text-base text-gray-500">Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2 className='pb-4 text-lg font-semibold text-gray-700'>Latest Enrollments</h2>
        <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-lg bg-white border border-gray-300 shadow-lg'>
          <table className='table-fixed md:table-auto w-full overflow-hidden'>
            <thead className='text-gray-900 border-b border-gray-300 text-sm text-left bg-gray-200'>
              <tr>
                <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                <th className='px-4 py-3 font-semibold'>Student Name</th>
                <th className='px-4 py-3 font-semibold'>Course Title</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-600'>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='border-b border-gray-300 hover:bg-gray-100'>
                  <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                  <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                    <img src={item.student.imageUrl} alt="profile" 
                    className='w-9 h-9 rounded-full
                     border border-gray-300' />
                    <span className='truncate font-medium'>{item.student.name}</span>
                  </td>
                  <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;