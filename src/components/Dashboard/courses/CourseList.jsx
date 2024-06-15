import React from 'react'
import CourseCard from './CourseCard'
import './course.css'

const CourseList = ({ courses }) => {
  const coursesData = [
  {
    id: 1,
    title: 'Max the Explorer Monkey: Growth Mindset',
    description: 'The curriculum combines engaging educational content...',
    students: 1548,
    rating: 98,
    price: 'N15,000',
    image: 'https://via.placeholder.com/150',
    category: 'Students',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Understanding Your Students: SEL for Educators',
    description: 'The curriculum combines engaging educational content...',
    students: 1548,
    rating: 98,
    price: 'N15,000',
    image: 'https://via.placeholder.com/150',
    category: 'Educators',
    status: 'Draft',
  },
]
  return (
    <div className='course-list'>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

export default CourseList
