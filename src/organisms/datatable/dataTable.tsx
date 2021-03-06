import React, { useState } from 'react'
import { DataGrid} from '@mui/x-data-grid'
import './datatable.scss'
import {userColumns, userRows} from '../../dataSource'
import {Link} from 'react-router-dom'



function Datatable() {

    const [data, setData] = useState(userRows)
    function handleDelete(id:number){
      setData(data.filter((data)=> data.id !==id))
    }



    const actionColumn  = {field:'action', headerName:'Action', width:230, renderCell: (params:any)=>{
      return (
        <div className='flex gap-3'>
          <Link to='/users/123'>
          <div  className='viewAction text-[darkblue] border-[1px] p-[3px] rounded-[4px] border-[rgba(0,0,139,0.2)] cursor-pointer'>View</div>
          </Link>
          <div onClick={()=>handleDelete(params.row.id)} className='deleteAction text-[crimson] border-[1px] p-[3px] rounded-[4px] border-[rgba(220,20,60, 0.6)] cursor-pointer'>Delete</div>
        </div>
      )
    }}

  return (
    <div className='dataTable'>
      <div className='title'>
      <p>Add New User</p>
     <Link to='new'> <p className='addbutton'>Add New</p></Link>
      </div>
       <DataGrid
       className='data-grid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable

function handleDelete(id: any): void {
  throw new Error('Function not implemented.')
}
