import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // ✅ Fixed setter name

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Fetch User Enrolled Courses
  const fetchUserEnrolledCourses = async () => {
    console.log("Fetching enrolled courses..."); // ✅ Debugging
    setEnrolledCourses(dummyCourses); // ✅ Ensures courses are set
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  // Function to calculate the average rating of a course
  const calculateRating = (course) => {
    if (!course?.courseRating?.length) return 0;

    let totalRating = course.courseRating.reduce((acc, rating) => acc + rating.rating, 0);
    return totalRating / course.courseRating.length;
  };

  // Function to calculate chapter time
  const calculateChapterTime = (chapter) => {
    if (!chapter?.chapterContent) return "0m";

    let totalTime = chapter.chapterContent.reduce((acc, lecture) => acc + (lecture.lectureDuration || 0), 0);
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"], round: true });
  };

  // Function to calculate total course duration
  const calculateCourseDuration = (course) => {
    if (!course?.courseChapters) return "0m";

    let totalTime = course.courseChapters.reduce((acc, chapter) => {
      if (!chapter?.chapterContent) return acc; // ✅ Prevent errors

      return acc + chapter.chapterContent.reduce((innerAcc, lecture) => {
        return innerAcc + (lecture.lectureDuration || 0); // ✅ Ensures a number
      }, 0);
    }, 0);

    return totalTime > 0
      ? humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"], round: true })
      : "0m"; // ✅ Handles empty duration properly
  };

  // Function to calculate total number of lectures in a course
  const calculateTotalLectures = (course) => {
    if (!course?.courseChapters) return 0;

    return course.courseChapters.reduce((totalLectures, chapter) => 
      totalLectures + (chapter?.chapterContent?.length || 0), 0);
  };

  // Debugging: Log course data
  useEffect(() => {
    console.log("Dummy Courses Data:", dummyCourses); // ✅ Check if lectureDuration exists
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateTotalLectures,
    fetchUserEnrolledCourses,
    isEducator,
    enrolledCourses,
    setIsEducator,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
