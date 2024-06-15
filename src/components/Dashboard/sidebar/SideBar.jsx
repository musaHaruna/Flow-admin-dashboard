import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './sidebar.css'

function Sidebar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen)
  }

  return (
    <div className='sidebar-user'>
      <div className='mt-5 sidebar-user-content'>
        <ul className='sidebar-user-menu mt-5 desktop'>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard'
            >
              <Icon icon='mdi:view-dashboard' className='sidebar-icon' />
              Overview
            </NavLink>
          </li>

          <li>
            <div className='link' onClick={toggleCourses}>
              <Icon icon='mdi:book-open-variant' className='sidebar-icon' />
              Courses
              <Icon
                icon={isCoursesOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                className='chevron-icon'
              />
            </div>
            {isCoursesOpen && (
              <ul className='nested-menu'>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'link active' : 'link'
                    }
                    to='/dashboard/courses/all'
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'link active' : 'link'
                    }
                    to='/dashboard/courses/draft'
                  >
                    Draft
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'link active' : 'link'
                    }
                    to='/dashboard/courses/published'
                  >
                    Published
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard/schools'
            >
              <Icon icon='mdi:school' className='sidebar-icon' />
              Schools
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard/individuals'
            >
              <Icon icon='mdi:account' className='sidebar-icon' />
              Individuals
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard/support'
            >
              <Icon icon='mdi:lifebuoy' className='sidebar-icon' />
              Support
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard/payment-history'
            >
              <Icon icon='mdi:credit-card-outline' className='sidebar-icon' />
              Payment History
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              to='/dashboard/settings'
            >
              <Icon icon='mdi:cog' className='sidebar-icon' />
              Settings
              <Icon icon='mdi:chevron-down' className='chevron-icon' />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
