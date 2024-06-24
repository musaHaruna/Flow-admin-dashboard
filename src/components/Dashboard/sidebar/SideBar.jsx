import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './sidebar.css'

function Sidebar() {
  const location = useLocation()
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen)
  }

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <div className='sidebar-user'>
      <div className='sidebar-user-content'>
        <ul className='sidebar-user-menu mt-3 desktop'>
          <li>
            <Link
              to='/'
              className={`link ${isActiveLink('/') ? 'active' : ''}`}
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
                    to='courses/all'
                    className={`link ${
                      isActiveLink('courses/all') ? 'active-inner' : 'inner'
                    }`}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    to='courses/draft'
                    className={`link ${
                      isActiveLink('courses/draft') ? 'active-inner' : 'inner'
                    }`}
                  >
                    Draft
                  </Link>
                </li>
                <li>
                  <Link
                    to='courses/published'
                    className={`link ${
                      isActiveLink('courses/published')
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
              to='schools'
              className={`link ${isActiveLink('schools') ? 'active' : ''}`}
            >
              <Icon icon='mdi:school' className='sidebar-icon' />
              Schools
            </Link>
          </li>

          <li>
            <Link
              to='individuals'
              className={`link ${isActiveLink('individuals') ? 'active' : ''}`}
            >
              <Icon icon='mdi:account' className='sidebar-icon' />
              Individuals
            </Link>
          </li>

          <li>
            <Link
              to='support'
              className={`link ${isActiveLink('support') ? 'active' : ''}`}
            >
              <Icon icon='mdi:lifebuoy' className='sidebar-icon' />
              Support
            </Link>
          </li>

          <li>
            <Link
              to='payment-history'
              className={`link ${
                isActiveLink('payment-history') ? 'active' : ''
              }`}
            >
              <Icon icon='mdi:credit-card-outline' className='sidebar-icon' />
              Payment History
            </Link>
          </li>

          <li>
            <div className='link' onClick={toggleSettings}>
              <Icon icon='mdi:cog' className='sidebar-icon' />
              Settings
              <Icon
                icon={isSettingsOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                className='chevron-icon'
              />
            </div>
            {isSettingsOpen && (
              <ul className='nested-menu'>
                <li>
                  <Link
                    to='settings/profile'
                    className={`link ${
                      isActiveLink('dashboard/settings/profile')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to='settings/teams'
                    className={`link ${
                      isActiveLink('/dashboard/settings/teams')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    to='settings/change-password'
                    className={`link ${
                      isActiveLink('settings/change-password')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Change Password
                  </Link>
                </li>
                <li>
                  <Link
                    to='settings/email-notifications'
                    className={`link ${
                      isActiveLink('/settings/email-notifications')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Email Notifications
                  </Link>
                </li>
                <li>
                  <Link
                    to='settings/deactivate-account'
                    className={`link ${
                      isActiveLink('settings/deactivate-account')
                        ? 'active-inner'
                        : 'inner'
                    }`}
                  >
                    Deactivate Account
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
