import React from 'react'
import { Icon } from '@iconify/react'
import './change-password.css'

const SettingsChangePassword = () => {
  return (
    <div className='settings-change-password'>
      <h2>Change Password</h2>
      <p>
        Take charge of the security access to your dashboard. Change your{' '}
        <a href='/'>Flow</a> password by filling the form below.
      </p>
      <form>
        <div className='form-group'>
          <label htmlFor='old-password'>Old Password</label>
          <input type='password' id='old-password' placeholder='Type here...' />
          <Icon icon='mdi:eye' className='icon' />
        </div>
        <div className='form-group'>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' placeholder='Type here...' />
          <Icon icon='mdi:eye' className='icon' />
        </div>
        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='password'
            id='confirm-password'
            placeholder='Type here...'
          />
          <Icon icon='mdi:eye' className='icon' />
        </div>
        <button type='submit'>Update Password</button>
      </form>
    </div>
  )
}

export default SettingsChangePassword
