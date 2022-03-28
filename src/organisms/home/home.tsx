import Sidebar from '../../layout/sidebar/sidebar'
import './home.scss'
import Navbar from '../../layout/navbar/navbar'
import SearchIcon from '@mui/icons-material/Search';
import Widget from '../../atom/widget/widget';
import Chart from '../../molecule/chart/chart';
import Featured from '../../molecule/features/featured';

function Home() {
  return (
    <div className='home'>
            <Sidebar/>
           
            <div className='home-container'>
            <Navbar/>
            <div className='homeWrapper'>
               <Widget type = 'user'/>
               <Widget type= 'order'/>
               <Widget type= 'earning'/>
               <Widget type= 'balance'/>
            </div>
            <div className='chart-wrapper'>
                <Chart/>
                <Featured/>
            </div>
            </div>
    </div>
  )
}

export default Home