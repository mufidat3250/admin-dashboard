import React from 'react'
import { DataGrid} from '@mui/x-data-grid'
import './datatable.scss'
import {userColumns, userRows} from '../../dataSource'

const actionColumn  = {field:'action', headerName:'Action', width:230, renderCell: ()=>{
  return (
    <div className='flex gap-3'>
      <div className='viewAction text-[darkblue] border-[1px] p-[3px] rounded-[4px] border-[rgba(0,0,139,0.2)] cursor-pointer'>View</div>
      <div className='deleteAction text-[crimson] border-[1px] p-[3px] rounded-[4px] border-[rgba(220,20,60, 0.6)] cursor-pointer'>Delete</div>
    </div>
  )
}}

function Datatable() {
  return (
    <div className='dataTable'>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable