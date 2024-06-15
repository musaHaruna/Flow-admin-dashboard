import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Modal from 'react-modal'
import EditCourseModal from '../../modals/courses/EditCourseModal'
import DeleteCourseModal from '../../modals/courses/DeleteCourseModal'
import DraftCourseModal from '../../modals/courses/DraftCourseModal'

const CourseCard = ({ course }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [modalIsEditOpen, setModalIsEditOpen] = useState(false)
  const [modalIsDeleteOpen, setModalIsDeleteOpen] = useState(false)
  const [modalIsDraftOpen, setModalIsDraftOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleOptionClick = (option) => {
    if (option === 'Edit') {
      setModalIsEditOpen(true)
    } else if (option === 'Delete') {
      setModalIsDeleteOpen(true)
    } else if (option === 'Move to Draft') {
      setModalIsDraftOpen(true)
    }
    setDropdownVisible(false)
  }

  const closeEditModal = () => {
    setModalIsEditOpen(false)
  }
  const closeDeleteModal = () => {
    setModalIsDeleteOpen(false)
  }
  const closeDraftModal = () => {
    setModalIsDraftOpen(false)
  }

  return (
    <div className='course-card'>
      <div className='card-img-container'>
        <img src={course.image} alt={course.title} className='course-image' />
        <span className='category'>{course.category}</span>
        <span className='status'>{course.status}</span>
      </div>

      <div className='course-info'>
        <h3 className='course-title'>{course.title}</h3>
        <p className='course-description'>{course.description}</p>
        <div className='course-meta'>
          <span className='students'>
            <Icon icon='solar:user-linear' /> {course.students} Students
          </span>
          <span className='ratings'>
            <Icon icon='simple-line-icons:like' /> {course.rating}%
          </span>
        </div>
        <div className='course-footer'>
          <span className='course-price'>
            <Icon icon='ion:cash-sharp' /> {course.price}
          </span>
          <button className='details-button'>
            <Icon icon='gg:menu-right-alt' /> View Details
          </button>
          <Icon
            icon='pepicons-pencil:dots-y'
            width={30}
            onClick={toggleDropdown}
          />
          <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
            <div
              className='dropdown-item'
              onClick={() => handleOptionClick('Edit')}
            >
              Edit
            </div>
            <div
              className='dropdown-item'
              onClick={() => handleOptionClick('Delete')}
            >
              Delete
            </div>
            <div
              className='dropdown-item'
              onClick={() => handleOptionClick('Move to Draft')}
            >
              Move to Draft
            </div>
          </div>
        </div>
      </div>
      <div className={`course-status ${course.status.toLowerCase()}`}>
        {/* {course.status} */}
      </div>
      <Modal
        isOpen={modalIsEditOpen}
        onRequestClose={closeEditModal}
        contentLabel='Edit Course'
        className='edit-course-modal'
        overlayClassName='custom-overlay'
      >
        <EditCourseModal course={course} closeModal={closeEditModal} />
      </Modal>
      <Modal
        isOpen={modalIsDeleteOpen}
        onRequestClose={closeDeleteModal}
        contentLabel='Delete Course'
        className='edit-course-modal'
        overlayClassName='custom-overlay'
      >
        <DeleteCourseModal closeModal={closeDeleteModal} />
      </Modal>
      <Modal
        isOpen={modalIsDraftOpen}
        onRequestClose={closeDraftModal}
        contentLabel='Edit Course'
        className='edit-course-modal'
        overlayClassName='custom-overlay'
      >
        <DraftCourseModal closeModal={closeDraftModal} />
      </Modal>
    </div>
  )
}

export default CourseCard
