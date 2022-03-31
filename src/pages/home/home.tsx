import Sidebar from '../../molecule/sidebar/sidebar'
import './home.scss'
import Navbar from '../../molecule/navbar/navbar'
import SearchIcon from '@mui/icons-material/Search';
import Widget from '../../atom/widget/widget';
import Chart from '../../molecule/chart/chart';
import Featured from '../../molecule/features/featured';
import TableList from '../../organisms/table/table';

function Home() {
  return (
    <div className='home'>
            <Sidebar/>
           
            <div className='home-container'>
            <Navbar/>
           <div className='flex flex-col flex-grow overflow-auto'> 
           <div className='homeWrapper'>
               <Widget type = 'user'/>
               <Widget type= 'order'/>
               <Widget type= 'earning'/>
               <Widget type= 'balance'/>
            </div>
            <div className='chart-wrapper'>
                <Chart/>
                <Featured aspect={2/1} title=''/>
            </div>
          <div className='listContainer'>
              <div className='listTitle'>Latest Transactions</div>
              <TableList/>
          </div>
           </div>
            </div>
    </div>
  )
}

export default Home