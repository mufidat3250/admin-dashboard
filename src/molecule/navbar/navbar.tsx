import React, { useContext } from 'react'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import {DarkmodeContext} from '../../context/darkmodeContext'

function Navbar() {

   const {dispatch}= useContext(DarkmodeContext)
  return (
    <div className='navBar'>
    <div className='navContainer'>
    <div className='input-wraper'>
        <input type="text" placeholder='search...'/>
        <SearchIcon className='search-icon'/>
      </div>
      <div className='itemWrapper'>
        <div className='item'>
           <LanguageOutlinedIcon className='icon'/> <span>English</span>
            </div>
        <div className='item cursor-pointer' onClick={()=>dispatch({type:'TOGGLE'})} > 
        <DarkModeOutlinedIcon className='icon'/>
        
        </div>
        <div className='item'> 
        < FullscreenExitOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
           <NotificationsNoneOutlinedIcon className='icon'/>
           <div className='counter'>3</div>
           </div>
        <div className='item'>
           <ChatBubbleOutlineOutlinedIcon className='icon'/>
           <div className='counter'>1</div>
           </div>
        <div className='item'>
           <ListOutlinedIcon className='icon' />
           </div>
        <div className='item'>
           <img src="https://images.pexels.com/photos/10585864/pexels-photo-10585864.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='avata' />
           </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar