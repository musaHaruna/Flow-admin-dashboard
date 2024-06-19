import React from 'react'
import './individuals.css'
import { useNavigate } from 'react-router-dom'

const Individuals = () => {
  const individualsData = [
    {
      sn: 1,
      fullName: 'Morayo Ojikutu',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Primary',
      email: 'm.ojikutu@gmail.com',
    },
    {
      sn: 2,
      fullName: 'Morayo Oye',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Educator',
      email: 'm.oye@gmail.com',
    },
    {
      sn: 3,
      fullName: 'Morayo Ojikutu',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Secondary',
      email: 'm.ojikutu@gmail.com',
    },
    {
      sn: 4,
      fullName: 'Morayo Oye',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Primary',
      email: 'm.oye@gmail.com',
    },
    {
      sn: 5,
      fullName: 'Morayo Ojikutu',
      country: 'Nigeria',
      state: 'Lagos State',
      grade: 'Educator',
      email: 'm.ojikutu@gmail.com',
    },
  ]

  const navigate = useNavigate()

  return (
    <div className='individuals-container'>
      <div className='header'>
        <input
          type='text'
          placeholder='Search by Name'
          className='search-box'
        />
        <div className='filter-sort'>
          <button className='filter-btn'>Filter by</button>
          <button className='sort-btn'>Sort by</button>
        </div>
      </div>
      <table className='individuals-table'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>State</th>
            <th>Grade</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {individualsData.map((individual) => (
            <tr
              key={individual.sn}
              onClick={() => navigate(`/dashboard/individuals/${individual.sn}`)}
              style={{ cursor: 'pointer' }}
            >
              <td>{individual.sn}</td>
              <td>{individual.fullName}</td>
              <td>
                <span className='flag'>🇳🇬</span> {individual.country}
              </td>
              <td>{individual.state}</td>
              <td>
                <span className={`grade ${individual.grade.toLowerCase()}`}>
                  {individual.grade}
                </span>
              </td>
              <td>{individual.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <span>1 - 4</span>
        <button className='pagination-btn'>❮</button>
        <button className='pagination-btn'>❯</button>
      </div>
    </div>
  )
}

export default Individuals
