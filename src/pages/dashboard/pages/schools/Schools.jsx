import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import './schools.css'

const Schools = () => {
  const initialSchoolData = [
    {
      id: 1,
      name: 'Greensprings Montessori School - Ikoyi',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Primary',
      contact: 'Mrs Adeyemi Bero',
    },
    {
      id: 2,
      name: 'Greensprings Montessori School - Anthony',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Primary',
      contact: 'Mrs Adeyemi Bero',
    },
    {
      id: 3,
      name: 'Greensprings Montessori School - Ikoyi',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Secondary',
      contact: 'Mrs Adeyemi Bero',
    },
    {
      id: 4,
      name: 'Greensprings Montessori School - Ikoyi',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Primary',
      contact: 'Mrs Adeyemi Bero',
    },
    {
      id: 5,
      name: 'Greensprings Montessori School - Ikoyi',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Secondary',
      contact: 'Mrs Adeyemi Bero',
    },
  ]

  const navigate = useNavigate()

  const [schoolData, setSchoolData] = useState(initialSchoolData)
  const [filter, setFilter] = useState('all') // State for filter (e.g., 'all', 'published', 'draft')
  const [sort, setSort] = useState('a-z') // State for sort (e.g., 'a-z', 'z-a')

  const handleSort = (key) => {
    let direction = sort === 'a-z' ? 'asc' : 'desc'

    const sortedData = [...schoolData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1
      }
      return 0
    })

    setSchoolData(sortedData)
    setSort(sort === 'a-z' ? 'z-a' : 'a-z') // Toggle sort direction after sorting
  }

  const filteredData = schoolData.filter((school) => {
    if (filter === 'all') return true
    return school.grade.toLowerCase() === filter
  })

  return (
    <div className='schools-container'>
      <div className='search-filter-sort'>
        <div className='search-box'>
          <Icon icon='iconamoon:search-thin' />
          <input type='text' placeholder='Search by Name' />
        </div>
        <div className='filters'>
          <div className='filter-sort'>
            <span>
              <Icon icon='octicon:filter-16' />
            </span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value='all'>Filter by</option>
              <option value='Primary'>Primary</option>
              <option value='Secondary'>Secondary</option>
            </select>
          </div>

          <div className='filter-sort'>
            <span>
              <Icon icon='mingcute:az-sort-ascending-letters-line' />
            </span>
            <select value={sort} onChange={(e) => handleSort(e.target.value)}>
              <option value='a-z'>Sort by A-Z</option>
              <option value='z-a'>Sort by Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <table className='table '>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name of School</th>
            <th>Country</th>
            <th>State</th>
            <th>Grade</th>
            <th>Contact person</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((school, index) => (
            <tr
              key={school.id}
              onClick={() => navigate(`/dashboard/school/${school.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <td>{index + 1}</td>
              <td>{school.name}</td>
              <td>{school.country}</td>
              <td>{school.state}</td>
              <td>
                <span
                  className={`badge ${
                    school.grade.toLowerCase() === 'primary'
                      ? 'badge-primary'
                      : 'badge-secondary'
                  }`}
                >
                  {school.grade}
                </span>
              </td>
              <td className='
            contact-person'>
                {school.contact}

                <span>
                  <Icon icon='solar:alt-arrow-right-linear' />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Schools
