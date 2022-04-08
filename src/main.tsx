
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {DarkmodeProvider} from '../src/context/darkmodeContext'

ReactDOM.render(
  
  <BrowserRouter>
   <DarkmodeProvider>
        <App/>
   </DarkmodeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
