import { useState } from 'react'
import './App.scss'
import Home from './pages/home/home'
import {Route, Routes} from 'react-router-dom'
import List from './pages/list/list'
import Login from './pages/login/login'
import Single from './pages/single/single'
import New from './pages/new/new'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/user'>
              <Route  index element={<List/>}/>
              <Route path=':id' element = {< Single/>}/>
              <Route path = 'new' element = {<New/>}/>
            </Route>
            <Route path='/products'>
              <Route  index element={<List/>}/>
              <Route path=':product id' element = {< Single/>}/>
              <Route path = 'new' element = {<New/>}/>
            </Route>
        </Route>      
    </Routes>
    </div>
  )
}

export default App
