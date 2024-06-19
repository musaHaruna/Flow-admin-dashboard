import React from 'react'
import { Icon } from '@iconify/react'

const SchoolCourseFilters = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className='course-filters'>
      <div className='search-bar'>
        <Icon icon='iconamoon:search-thin' />
        <input
          type='text'
          placeholder='Search by Name, Age, Email, Phone Number'
          className='search-input'
        />
      </div>
      <div className='filter-sort'>
        <span>
          <Icon icon='octicon:filter-16' />
        </span>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>Filter by</option>
          <option value='published'>Published</option>
          <option value='draft'>Draft</option>
        </select>
      </div>

      <div className='filter-sort'>
        <span>
          <Icon icon='mingcute:az-sort-ascending-letters-line' />
        </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value='a-z'>Sort by A-Z</option>
          <option value='z-a'>Sort by Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default SchoolCourseFilters
