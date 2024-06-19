import React from 'react'
import './individual-info.css'
import profileImage from '../../../../../assets/user-profile-image.png'

const IndividualInfo = () => {
  return (
    <div className='individual-info-container'>
      <button className='back-btn'>← Back</button>
      <div className='card'>
        <div className='profile'>
          <img src={profileImage} alt='Profile' className='profile-img' />
          <div className='details'>
            <h2 className='name'>Morayo Ojikutu</h2>
            <p className='grade primary'>Primary</p>
            <p className='location'>LGA | STATE</p>
            <p className='country'>
              NIGERIA <span className='flag'>🇳🇬</span>
            </p>
            <div className='tags'>
              <span className='tag individual'>Individual</span>
              <span className='tag student'>Student</span>
            </div>
          </div>
        </div>
        <div className='additional-info'>
          <p>
            Email: <span>Hannahade@gmail.com</span>
          </p>
          <p>
            D.O.B: <span>22/08/2000</span>
          </p>
          <p>
            Phone Number: <span>+2348123456789</span>
          </p>
          <p>
            Gender: <span>Female</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndividualInfo
