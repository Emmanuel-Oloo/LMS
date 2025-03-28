import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const SideBar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '.', icon: assets.home_icon }, // Default route
    { name: 'Add Course', path: 'add-course', icon: assets.add_icon },
    { name: 'My Courses', path: 'my-courses', icon: assets.my_course_icon },
    { name: 'Students Enrolled', path: 'students-enrolled', icon: assets.person_tick_icon },
  ];

  return isEducator && (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
      {menuItems.map((item) => (
        <NavLink 
          key={item.name} 
          to={item.path} 
          end={item.path === '.'} // Ensures correct active state for Dashboard
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 transition-colors ${
              isActive ? 'bg-indigo-50 border-r-[6px] border-indigo-500/90' : 'hover:bg-gray-200 text-gray-700'
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
          <p className="md:block hidden">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
