import React from 'react'
import SchoolCourseCard from './SchoolCourseCard'

const SchoolCourseList = ({ courses }) => {
  return (
    <div className='course-list'>
      {courses.map((course) => (
        <SchoolCourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default SchoolCourseList
