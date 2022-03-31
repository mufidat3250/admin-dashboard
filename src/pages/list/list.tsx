import React from 'react'
import Navbar from '../../layout/navbar/navbar'
import Sidebar from '../../layout/sidebar/sidebar'
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