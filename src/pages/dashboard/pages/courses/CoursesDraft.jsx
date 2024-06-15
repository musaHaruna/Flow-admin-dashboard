import { useState } from 'react'
import CourseList from '../../../../components/Dashboard/courses/CourseList'
import CourseFilters from '../../../../components/Dashboard/courses/CourseFilters'
// import './course.css'

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

const CoursesDraft = () => {
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('a-z')

  const filteredCourses = coursesData.filter((course) => {
    if (filter === 'all') return true
    return course.status.toLowerCase() === filter
  })

  const sortedCourses = filteredCourses.sort((a, b) => {
    if (sort === 'a-z') return a.title.localeCompare(b.title)
    return b.title.localeCompare(a.title)
  })

  return (
    <div className='courses-page'>
      <div className='browse-all-courses-text container-fluid'>
        <p>Browse through all the courses currently available on FLOW.</p>
      </div>
      <CourseFilters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <CourseList courses={sortedCourses} />
    </div>
  )
}

export default CoursesDraft