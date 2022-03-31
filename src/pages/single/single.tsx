import React from 'react'
import SideBar from '../../molecule/sidebar/sidebar'
import NavBar from '../../molecule/navbar/navbar'
import './single.scss'
import Featured from '../../molecule/features/featured'
import List from '../list/list'
import TableList from '../../organisms/table/table'
function Single() {
  return (
    <div className='single '>
      <SideBar/>
      <div className='singleContainer'>
        <NavBar/>
        <div className='chilren flex flex-col flex-grow=1 overflow-scroll'>
          <div className='top'>
            <div className='left'>
              <div className='absolute text-[blue] right-0 top-0 bg-[#cae5f7] p-[2px] text-[13px] rounded-bl-[5px]'>Edit</div>
            <h1 className='title'>Information</h1>
              <div className='item flex mt-[10px] gap-3'>                
                <img   src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                 alt=""  className='w-[100px] h-[100px] object-cover rounded-[50%]'/>
                 <div className='details'>
                   <h1 className='itemTitle'>Miss__Nice</h1>
                    <div className='detailItem'>
                      <span className="itemKey">Email: </span>
                      <span className="itemValue">MissNice@gmail.com</span>
                    </div>
                    <div className='detailItem' >
                      <span className="itemKey">Phone: </span>
                      <span className="itemValue">+225 6534 3984</span>
                    </div>
                    <div className='detailItem'>
                      <span className="itemKey">Address: </span>
                      <span className="itemValue">No 23 Ilesanmi Cresent Ejigbo Osun State </span>
                    </div>
                    <div className='detailItem'>
                      <span className="itemKey">Country: </span>
                      <span className="itemValue">Nigeria</span>
                    </div>
                 </div>
              </div>
            </div>
            <div className='right'>
            <Featured aspect={5/1} title='User Spending'/>
            </div>
          </div>
          <div className='pt-[20px] pb-[20px]'><h1 className='title'>Last Transactions</h1></div>
          <div className='bottom'>          
            <TableList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single