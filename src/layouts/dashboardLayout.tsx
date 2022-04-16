import React from 'react'
import Navbar from '../molecule/navbar/navbar'
import Sidebar from '../molecule/sidebar/sidebar'

function DashbordLayout() {
  return (
    <div className='dashBoard'>
            <Navbar/>
            <Sidebar/>
    </div>
  )
}

export default DashbordLayout