import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar() {
  return (
    <div className='side-bar'>
        <div className='logo'>Miss_Nice</div>
       <div className='center'>
           <p className='title'>MAIN</p>
           <ul className=''>
               <li>  <DashboardIcon className='icon'/><span>Dashboard</span></li>
           </ul>
           <p className='title'>LISTS</p>
           <ul>
               <li>  <PersonOutlineIcon className='icon'/> <span>User</span></li>
           </ul>
           <ul>
               <li> <CategoryOutlinedIcon className='icon'/><span> Products</span></li>
           </ul>
           <ul>
               <li> <PaymentOutlinedIcon className='icon'/> <span>Orders</span></li>
           </ul>
           <p className='title'>USEFUL</p>
           <ul>
               <li> <LocalShippingIcon className='icon'/> <span>Delivery</span></li>
           </ul>
           <ul>
               <li> <InsertChartIcon className='icon'/><span>Stats</span></li>
           </ul>
           <ul>
               <li>  <NotificationsNoneIcon className='icon'/> <span>Notifications</span></li>
           </ul>
            <p className='title'>SERVICES</p>
           <ul>
               <li> <SettingsSystemDaydreamIcon className='icon'/> <span>  System Health</span></li>
           </ul>
           <ul>
               <li> <PsychologyOutlinedIcon className='icon'/> <span> Logs</span></li>
           </ul>
           <ul>
               <li> <SettingsIcon className='icon'/><span> Settings</span></li>
           </ul>
           <p className='title'>USER</p>
           <ul>
               <li>  <AccountCircleOutlinedIcon className='icon'/><span>  Profile</span></li>
           </ul>
           <ul>
               <li> <ExitToAppOutlinedIcon className='icon'/><span>  Logout</span></li>
           </ul>
       </div> 
       <div className='bottom'>
           <div className='color-option'></div>
           <div className='color-option'></div>
        </div>   
    </div>
  )
}

export default Sidebar