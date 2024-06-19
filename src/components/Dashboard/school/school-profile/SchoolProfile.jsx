import React, { useState } from 'react'
import Modal from 'react-modal'
import { Icon } from '@iconify/react'
import './school-profile.css'
import logo from '../../../../assets/school-logo.png'

const SchoolProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(null)
  const [selectedMember, setSelectedMember] = useState(null)
  const [selectedTable, setSelectedTable] = useState(null)

  const teamMembersData = [
    {
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      permission: 'Superadmin',
      status: 'Active',
      dateAdded: '22-09-23',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      permission: 'Admin',
      status: 'Inactive',
      dateAdded: '15-10-23',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@gmail.com',
      permission: 'User',
      status: 'Active',
      dateAdded: '30-11-23',
    },
  ]

  const notificationsEmailsData = [
    {
      id: 1,
      name: 'Emily Clark',
      email: 'emilyclark@gmail.com',
      permission: 'Notification',
      status: 'Active',
      dateAdded: '12-05-23',
    },
    {
      id: 2,
      name: 'Michael Brown',
      email: 'michaelbrown@gmail.com',
      permission: 'Notification',
      status: 'Inactive',
      dateAdded: '17-08-23',
    },
    {
      id: 3,
      name: 'Sarah Davis',
      email: 'sarahdavis@gmail.com',
      permission: 'Notification',
      status: 'Active',
      dateAdded: '25-11-23',
    },
  ]

  const [teamMembers, setTeamMembers] = useState(teamMembersData)
  const [notificationsEmails, setNotificationsEmails] = useState(
    notificationsEmailsData
  )

  const openModal = (member, table) => {
    setSelectedMember(member)
    setSelectedTable(table)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedMember(null)
    setSelectedTable(null)
  }

  const handleActionClick = (index) => {
    setShowDropdown(showDropdown === index ? null : index)
  }

  const handleDelete = () => {
    if (selectedTable === 'teamMembers') {
      setTeamMembers(
        teamMembers.filter((member) => member.id !== selectedMember.id)
      )
    } else if (selectedTable === 'notificationsEmails') {
      setNotificationsEmails(
        notificationsEmails.filter((member) => member.id !== selectedMember.id)
      )
    }
    closeModal()
    alert('Successfully deleted')
  }

  return (
    <div className='school-profile'>
      <div className='school-header'>
        <div className='school-logo'>
          <img src={logo} alt='School Logo' />
        </div>
        <div className='school-info'>
          <h1 className='h1'>Greensprings School</h1>
          <p>22, Awolowo Way, Ikoyi</p>
          <p>LGA | STATE</p>
          <p>NIGERIA 🇳🇬</p>
        </div>
      </div>

      <div className='heading banner'>
        <p>
          <span>Contact Person:</span> Mrs. Justina Joe
        </p>
        <p>
          <span>Email:</span> AdeyemiB@greensprings.com
        </p>
        <p>
          <span>Phone Number:</span> +2348123456789
        </p>
      </div>

      <div className='team-members'>
        <p className='heading'>Team Members and Permissions</p>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Permission</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.permission}</td>
                <td>{member.status}</td>
                <td>{member.dateAdded}</td>
                <td>
                  <div className='action-container'>
                    <Icon
                      icon='pepicons-pencil:dots-y'
                      width={30}
                      className='icon'
                      onClick={() => handleActionClick(index)}
                    />
                    {showDropdown === index && (
                      <div className='dropdown'>
                        <button
                          onClick={() => openModal(member, 'teamMembers')}
                        >
                          <span>
                            <Icon icon='fluent:delete-20-regular' />
                          </span>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='team-members'>
        <p className='heading'>Notifications Emails</p>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Permission</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notificationsEmails.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.permission}</td>
                <td>{member.status}</td>
                <td>{member.dateAdded}</td>
                <td>
                  <div className='action-container'>
                    <Icon
                      icon='pepicons-pencil:dots-y'
                      onClick={() => handleActionClick(index)}
                      width={30}
                      className='icon'
                    />
                    {showDropdown === index && (
                      <div className='dropdown'>
                        <button
                          onClick={() =>
                            openModal(member, 'notificationsEmails')
                          }
                        >
                          <span>
                            <Icon icon='fluent:delete-20-regular' />
                          </span>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Delete Modal'
        className='custom-modal-success'
        overlayClassName='custom-overlay'
      >
        <div className='succes-modal-content'>
          <div className='success-icon icon-with-bg'>
            <div class='circle'>
              <div class='checkmark'></div>
            </div>
          </div>
          <h4 className='text-center'>Successfull</h4>
          <p className='text-center'>
            You have successfully deleted this email from the team.
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default SchoolProfile
