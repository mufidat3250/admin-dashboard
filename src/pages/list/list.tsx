import React from 'react'
import Navbar from '../../molecule/navbar/navbar'
import Sidebar from '../../molecule/sidebar/sidebar'
import './list.scss'
import Datatable from '../../organisms/datatable/dataTable'
function List() {
  return (
    <div className='list'>
    <Sidebar/>
  <div className='listContainer'>
      <Navbar/>

      <Datatable/>
  </div>
    </div>
  )
}

export default List