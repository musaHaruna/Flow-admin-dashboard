import React, { useState } from 'react'
import './school-payements.css'

const SchoolPayments = () => {
  const initialPayments = [
    {
      id: 1,
      orderId: 'Odfknfjl#',
      amount: '₦4,000,000',
      item: 'Growth Mindset',
      date: '13/09/22',
      time: '9:00AM',
    },
    {
      id: 2,
      orderId: 'Odfknfjl#',
      amount: '₦15,000',
      item: 'Mind & Money',
      date: '13/09/22',
      time: '9:00AM',
    },
    {
      id: 3,
      orderId: 'Odfknfjl#',
      amount: '₦15,000',
      item: 'Course Name',
      date: '13/09/22',
      time: '9:00AM',
    },
    {
      id: 4,
      orderId: 'Odfknfjl#',
      amount: '₦15,000',
      item: 'Course Name',
      date: '13/09/22',
      time: '9:00AM',
    },
    {
      id: 5,
      orderId: 'Odfknfjl#',
      amount: '₦15,000',
      item: 'Course Name',
      date: '13/09/22',
      time: '9:00AM',
    },
    {
      id: 6,
      orderId: 'Odfknfjl#',
      amount: '₦15,000',
      item: 'Course Name',
      date: '13/09/22',
      time: '9:00AM',
    },
    // Add more payments as needed
  ]

  const [payments, setPayments] = useState(initialPayments)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5) // Change this value as needed

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  // Function to filter payments based on search term
  const filteredPayments = payments.filter((payment) =>
    Object.values(payment).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  // Function to handle sorting based on column
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('asc')
    }
    setCurrentPage(1) // Reset to first page when sorting
  }

  // Function to render arrow icon for sorting indication
  const renderSortArrow = (column) => {
    if (sortBy === column) {
      return sortOrder === 'asc' ? '↑' : '↓'
    }
    return null
  }

  // Function to perform sorting of payments array
  const sortedPayments = [...filteredPayments].sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]

    // Check if aValue and bValue are defined
    if (aValue !== undefined && bValue !== undefined) {
      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    }
    return 0 // Return default value if aValue or bValue are undefined
  })

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedPayments.slice(indexOfFirstItem, indexOfLastItem)

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='school-payments'>
      <div className='search-filter'>
        <input
          type='text'
          placeholder='Search by time, date, order ID or Payment Type'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className='filter-sort'>
          <button onClick={() => console.log('Implement filter functionality')}>
            Filter by
          </button>
          <button onClick={() => console.log('Implement sort functionality')}>
            Sort by
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              S/N {renderSortArrow('id')}
            </th>
            <th onClick={() => handleSort('orderId')}>
              Order ID {renderSortArrow('orderId')}
            </th>
            <th onClick={() => handleSort('amount')}>
              Amount {renderSortArrow('amount')}
            </th>
            <th onClick={() => handleSort('item')}>
              Item {renderSortArrow('item')}
            </th>
            <th onClick={() => handleSort('date')}>
              Date {renderSortArrow('date')}
            </th>
            <th onClick={() => handleSort('time')}>
              Time {renderSortArrow('time')}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((payment, index) => (
            <tr key={payment.id}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{payment.orderId}</td>
              <td>{payment.amount}</td>
              <td>{payment.item}</td>
              <td>{payment.date}</td>
              <td>{payment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <span>
          {indexOfFirstItem + 1} -{' '}
          {Math.min(indexOfLastItem, sortedPayments.length)} of{' '}
          {sortedPayments.length}
        </span>
        <div>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= sortedPayments.length}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchoolPayments
