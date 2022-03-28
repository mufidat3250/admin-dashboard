import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './widget.scss'

type widgetType ={
  type:String;
}

function Widget({type}:widgetType) {
  let data:any
  let amount = 4500;
  let diff =20
   type==='user'
   ? 
   (data={
      title:'USERS',
      ismoney:false,
      link:'See all users',
      icon:<PersonOutlineIcon className='p-[5px] rounded-[5px] bg-[#fd9292c6] text-[#a20b0b]'/>

   })
   : type==='order'
   ? data={
     title:'ORDER',
     ismoney:true,
     link:'See all orders',
     icon: <ShoppingCartOutlinedIcon className='p-[5px] rounded-[5px] bg-[#f8e6b7c6] text-[#fcbb2f] ' />
   }
   :type === 'earning'
    ?  data={
      title:'EARNINGS',
      ismoney:true,
      link:'View net earnings',
      icon: <MonetizationOnOutlinedIcon className='p-[5px] rounded-[5px] bg-[#bdfa9ac6] text-[#47990c]' />
    }
    :type === 'balance'
    ? data={
      title:'BALANCE',
      ismoney:true,
      link:'See details',
      icon: <AccountBalanceWalletOutlinedIcon className='p-[5px] rounded-[5px] bg-[#edd4e9c6] text-[#a20b0b]' />
    }
    :null


     
    
  




  return (
    <div className='widgetWrapper'>
        <div className='left'> 
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && '$'} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right '>
             <div className='percentage positive'>
                 <KeyboardArrowUpOutlinedIcon/> {diff} %
             </div>
             <div className='icon-wrapper flex justify-end'>
               {data.icon}               
             </div>
        </div>
    </div>
  )
}

export default Widget