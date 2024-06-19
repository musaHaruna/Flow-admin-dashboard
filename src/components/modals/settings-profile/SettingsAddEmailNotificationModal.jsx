import { useState, useEffect } from 'react'
import './settings-modal.css'
import { Icon } from '@iconify/react'
const SettingsAddEmailNotificationModal = ({ closeModal }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [status, setStatus] = useState('')
  const [access, setAccess] = useState('')
  const [image, setImage] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.map((country) => ({
          name: country.name.common,
          flag: country.flags[0],
        }))
        setCountries(countriesData)
      })
      .catch((error) => console.error('Error fetching countries:', error))
  }, [])

  const handleUpdate = () => {
    console.log('Updated course details:', {
      title,
      description,
      cost,
      status,
      access,
      image,
    })
    closeModal()
  }

  return (
    <div className='edit-course-container'>
      <div className='header'>
        <h2>Add New Team</h2>
        <span onClick={closeModal}>
          <Icon icon='bitcoin-icons:cross-outline' width={30} />
        </span>
      </div>
      <p>Input teammate’s details below</p>
      <div className='flex-row'>
        <div>
          <label>First Name *</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name *</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='flex-row'>
        <div>
          <label>Work Email Address *</label>
          <input
            type='text'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label>Position *</label>
          <select value={access} onChange={(e) => setAccess(e.target.value)}>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name} <img src={country.flag} alt={country.name} />
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className='update' onClick={handleUpdate}>
        Send Inivite
      </button>
    </div>
  )
}

export default SettingsAddEmailNotificationModal
