import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './sidebar.css'

function Sidebar() {
  const location = useLocation()
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen)
  }

  // Function to determine if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <div className='sidebar-user'>
      <div className='mt-5 sidebar-user-content'>
        <ul className='sidebar-user-menu mt-5 desktop'>
          <li>
            <Link
              to='/dashboard'
              className={`link ${isActiveLink('/dashboard') ? 'active' : ''}`}
            >
              <Icon icon='mdi:view-dashboard' className='sidebar-icon' />
              Overview
            </Link>
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
                  <Link
                    to='/dashboard/courses/all'
                    className={`link ${
                      isActiveLink('/dashboard/courses/all') ? 'active-inner' : 'inner'
                    }`}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/courses/draft'
                    className={`link ${
                      isActiveLink('/dashboard/courses/draft') ? 'active-inner' : 'inner'
                    }`}
                  >
                    Draft
                  </Link>
                </li>
                <li>
                  <Link
                    to='/dashboard/courses/published'
                    className={`link ${
                      isActiveLink('/dashboard/courses/published')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Published
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to='/dashboard/schools'
              className={`link ${
                isActiveLink('/dashboard/schools') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:school' className='sidebar-icon' />
              Schools
            </Link>
          </li>

          <li>
            <Link
              to='/dashboard/individuals'
              className={`link ${
                isActiveLink('/dashboard/individuals') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:account' className='sidebar-icon' />
              Individuals
            </Link>
          </li>

          <li>
            <Link
              to='/dashboard/support'
              className={`link ${
                isActiveLink('/dashboard/support') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:lifebuoy' className='sidebar-icon' />
              Support
            </Link>
          </li>

          <li>
            <Link
              to='/dashboard/payment-history'
              className={`link ${
                isActiveLink('/dashboard/payment-history') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:credit-card-outline' className='sidebar-icon' />
              Payment History
            </Link>
          </li>

          <li>
            <Link
              to='/dashboard/settings'
              className={`link ${
                isActiveLink('/dashboard/settings') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:cog' className='sidebar-icon' />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
