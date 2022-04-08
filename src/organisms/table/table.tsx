import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'
function TableList() {

    const row = [
        {
            id: Math.random().toString(36).substring(3,7),
            product:'ASUS ROG STrix',
            img:'https://images.unsplash.com/photo-1608403890614-ec62cb35b46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'approved'
        },
        {
            id: Math.random().toString(36).substring(3,7),
            product:'Mango',
            img:'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'pending'
        },
        {
            id: Math.random().toString(36).substring(3,7),
            product:'Shirt',
            img:'https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'approved'
        },
        {
            id: Math.random().toString(36).substring(3,7),
            product:'Toys R Us',
            img:'https://images.unsplash.com/photo-1608403890614-ec62cb35b46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'pending'
        },
        {
            id: Math.random().toString(36).substring(3,7),
            product:'E*Trade',
            img:'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'pending'
        },
        {
            id: Math.random().toString(36).substring(3,7),
            product:'General Motors',
            img:'https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
            customer:'john Smith',
            date:'1 March',
            amount: 789,
            method:'Cash on Delivery',
            status:'approved'
        }
    ]
  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {row.map((row) => (
          <TableRow    
            key={row.id}
          >
            <TableCell className='tableCell'>
              {row.id}
            </TableCell>
            <TableCell className='tableCell'>
              <div className='cellWrapper'>
                <img src={row.img} alt=""  className='image' />
                {row.product}
              </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className={`tableCell ${row.status}`} >
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableList