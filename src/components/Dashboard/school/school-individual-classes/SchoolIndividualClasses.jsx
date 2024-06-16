import React, { useState } from 'react'
import Modal from 'react-modal'
import { Icon } from '@iconify/react'

import './school-individual-classes.css' // Make sure to import the CSS file

Modal.setAppElement('#root') // Adjust the selector according to your app structure

const SchoolIndividualClasses = () => {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleCreateClick = () => {
    setShowCreateModal(true)
  }

  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  }

  const closeModals = () => {
    setShowCreateModal(false)
    setShowDeleteModal(false)
  }

  return (
    <div>
      <header className='class-header'>
        <button onClick={handleCreateClick} className='add-student-btn'>
          + Add New Student
        </button>
      </header>

      <table className='table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>John Doe</td>
              <td>Johndoe@gmail.com</td>
              <td>+2348112345678</td>
              <td>{index % 2 === 0 ? 'M' : 'F'}</td>
              <td>10</td>
              <td>10%</td>
              <td>
                <button onClick={handleDeleteClick} className='delete-icon'>
                  <Icon icon='fluent:delete-20-regular' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={showCreateModal}
        onRequestClose={closeModals}
        contentLabel='Add New Student Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <h2>Add New Student(s)</h2>
        <input
          type='text'
          placeholder='Enter email addresses here'
          className='modal-input'
        />
        <input type='file' className='modal-input' />
        <button onClick={closeModals} className='modal-button'>
          Send Invite
        </button>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onRequestClose={closeModals}
        contentLabel='Delete User Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <h2>Delete</h2>
        <p>Do you want to delete this user?</p>
        <button onClick={closeModals} className='modal-button'>
          No
        </button>
        <button onClick={closeModals} className='modal-button'>
          Yes
        </button>
      </Modal>
    </div>
  )
}

export default SchoolIndividualClasses
