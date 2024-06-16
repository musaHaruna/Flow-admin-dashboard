import React, { useState, useEffect } from 'react'

const EditCourseModal = ({ course, closeModal }) => {
  const [title, setTitle] = useState(course.title)
  const [description, setDescription] = useState(course.description)
  const [cost, setCost] = useState(course.price)
  const [status, setStatus] = useState(course.status)
  const [access, setAccess] = useState(course.access)
  const [image, setImage] = useState(course.image)
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
      <h2>Edit Course</h2>
      <div className='flex-row'>
        <div>
          <label>Course Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='flex-row'>
        <div>
          <label>Cost</label>
          <input
            type='number'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value='Published'>Published</option>
            <option value='Draft'>Draft</option>
          </select>
        </div>
      </div>
      <div className='flex-row'>
        <div>
          <label>Course Access</label>
          <select value={access} onChange={(e) => setAccess(e.target.value)}>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name} <img src={country.flag} alt={country.name} />
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Profile Image</label>
          <input
            type='file'
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
      </div>

      <label>Course URL</label>
      <input type='text' value={course.url} disabled />

      <button onClick={handleUpdate}>Update</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  )
}

export default EditCourseModal
