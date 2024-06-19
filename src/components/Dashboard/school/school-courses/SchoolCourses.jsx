import { useState } from 'react'
import SchoolCourseFilters from './SchoolCourseFilters'
import SchoolCourseList from './SchoolCourseList'
import draftImg from '../../../../assets/onboarding-individual.png'
import publishedImg from '../../../../assets/onboarding-school.png'
import './single-school-course.css'
import { Icon } from '@iconify/react'
import CreateCourseModal from '../../../../components/modals/courses/CreateCourseModal'
import Modal from 'react-modal'
const coursesData = [
  {
    id: 1,
    title: 'Max the Explorer Monkey: Growth Mindset',
    description: 'The curriculum combines engaging educational content',
    students: 1548,
    rating: 98,
    price: 'N15,000',
    image: publishedImg,
    category: 'Students',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Understanding Your Students: SEL for Educators',
    description: 'The curriculum combines engaging educational content',
    students: 1548,
    rating: 98,
    price: 'N15,000',
    image: draftImg,
    category: 'Educators',
    status: 'Draft',
  },
]

const SchoolCourses = () => {
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('a-z')

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const closeModal = () => setIsCreateModalOpen(false)

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
      <div className='create-course' onClick={() => setIsCreateModalOpen(true)}>
        <span>
          <Icon icon='mdi-light:plus' />
        </span>
        <button>Create New Course</button>
      </div>
      <div className='browse-all-courses-text'>
        <p>Browse through all the courses currently available on FLOW.</p>
      </div>
      <SchoolCourseFilters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <SchoolCourseList courses={sortedCourses} />
      <Modal
        isOpen={isCreateModalOpen}
        onRequestClose={closeModal}
        contentLabel='Edit Course'
        className='edit-course-modal-custom'
        overlayClassName='custom-overlay'
      >
        <CreateCourseModal closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default SchoolCourses
