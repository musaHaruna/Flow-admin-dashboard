import React, { useState } from 'react'
import Modal from 'react-modal'
import { Icon } from '@iconify/react'

const SchoolCourseCard = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='course-card'>
      <div className='card-img-container'>
        <img src={course.image} alt={course.title} className='course-image' />
        <span className='category'>{course.category}</span>
      </div>

      <div className='course-info'>
        <h3 className='course-title'>{course.title}</h3>
        <p className='course-description'>
          {course.description}{' '}
          <button className='see-more' onClick={openModal}>
            ...
          </button>
        </p>
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
          <div className='progress-course'>
            <p className='green'>10%</p>
            <p>Done</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Growth Mindset Course Guide'
        className='see-more-modal'
        overlayClassName='custom-overlay'
      >
        <div className='see-more-content'>
          <div>
            <h2 className='heading-content'>
              Growth Mindset Course Guide{' '}
              <button onClick={closeModal} className='close-modal-button'>
                &times;
              </button>
            </h2>
            <div className='see-more-text'>
              <h3>Course Overview</h3>
              <p>
                The "Growth Mindset Course" is a 10-week program designed to
                introduce and instill the principles of a growth mindset in
                children. The curriculum combines engaging educational content,
                interactive activities, and reflective discussions to create an
                environment that nurtures resilience, creativity, and a lifelong
                love for learning. From understanding the power of "yet" to
                exploring the potential of the human brain, each week's session
                delves into different aspects of the growth mindset.
              </p>
              <h3>Course Objectives</h3>
              <ul>
                <li>
                  <strong>Understanding the Growth Mindset:</strong> Students
                  will develop a deep understanding of the growth mindset and
                  how it contrasts with a fixed mindset. They will learn to
                  identify characteristics and examples of each mindset in
                  various contexts.
                </li>
                <li>
                  <strong>Applying the Growth Mindset:</strong> Students will
                  learn to apply the principles of a growth mindset in real-life
                  situations and understand the importance of embracing
                  challenges, persevering in the face of setbacks, and viewing
                  effort as a path to mastery.
                </li>
                <li>
                  <strong>Exploring the Human Brain:</strong> Students will gain
                  a basic understanding of the human brain, its capacity for
                  growth and change (neuroplasticity), and how this ties in with
                  the growth mindset concept.
                </li>
                <li>
                  <strong>Developing Self-awareness:</strong> Students will
                  reflect on their personal strengths, interests, and
                  aspirations, recognize their potential for growth, and
                  understand what they can and cannot control.
                </li>
                <li>
                  <strong>Encouraging Collaboration:</strong> Through group
                  activities, students will develop their teamwork,
                  communication, and problem-solving skills, reinforcing the
                  social aspects of a growth mindset.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SchoolCourseCard
