import React from 'react'
import './chart.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const value= 70
function Chart() {
  return (
    <div className='chart'>
        <div className='top'>
        <h1>Total Revenue</h1>
            <MoreVertOutlinedIcon className='icon'/>
        </div>
        <div className='bottom' >
        <div className='featuredChart'>
                <CircularProgressbar value={value} text={`${value}%`} strokeWidth={5} />
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>
                Previous transactions processing. Last payments may not be included. 
            </p>
            <div className='summary'>
                <div className='item'>
                    <p className='itemTitle'>Target</p>
                    <div className='itemResult negative'> 
                    <KeyboardArrowDownOutlinedIcon />
                    <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>

                <div className='item'>
                    <p className='itemTitle'>Last Week</p>
                    <div className='itemResult positive'> 
                    <KeyboardArrowDownOutlinedIcon />
                    <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>

                <div className='item'>
                    <p className='itemTitle'>Last Month</p>
                    <div className='itemResult positive '> 
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                    <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Chart