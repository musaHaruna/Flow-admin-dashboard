import React, { useState } from 'react'
import SchoolCourses from '../../../../../components/Dashboard/school/school-courses/SchoolCourses'
import SchoolProfile from '../../../../../components/Dashboard/school/school-profile/SchoolProfile'
import SchoolPayements from '../../../../../components/Dashboard/school/school-payements/SchoolPayements'
import SchoolDashboard from '../../../../../components/Dashboard/school/school-dashboard/SchoolDashboard'
import SchoolIndividualClasses from '../../../../../components/Dashboard/school/school-individual-classes/SchoolIndividualClasses'
import './school-detail.css'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

const SchoolDetail = () => {
  const [selectedComponent, setSelectedComponent] = useState('profile')

  const handleChange = (event) => {
    const selectedOption = event.target.value
    setSelectedComponent(selectedOption)
  }

  // Helper function to render selected component
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'profile':
        return <SchoolProfile />
      case 'dashboard':
        return <SchoolDashboard />
      case 'courses':
        return <SchoolCourses />
      case 'payment':
        return <SchoolPayements />
      case 'individual-classes':
        return <SchoolIndividualClasses />
      default:
        return null
    }
  }

  const navigate = useNavigate()

  return (
    <div className='school-detail'>
      <div className='nav-dropdown'>
        <h2 onClick={() => navigate('/dashboard/schools')}>
          <span>
            <Icon icon='ic:outline-arrow-back' />
          </span>
          Back to school
        </h2>
        <div className='filter-sort'>
          <span>
            <Icon icon='octicon:filter-24' />
          </span>
          <select id='navDropdown' onChange={handleChange}>
            <option value='profile'>Profile</option>
            <option value='dashboard'>Dashboard</option>
            <option value='courses'>Courses</option>
            <option value='payment'>Payment</option>
            <option value='individual-classes'>Individual Classes</option>
          </select>
        </div>
      </div>

      <hr />
      {renderComponent()}
    </div>
  )
}

export default SchoolDetail
