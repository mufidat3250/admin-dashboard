import { useState } from 'react'
import './App.scss'
import Home from './organisms/home/home'
import {Route, Routes} from 'react-router-dom'
import List from './organisms/list/list'
import Login from './organisms/login/login'
import Single from './organisms/single/single'
import New from './organisms/new/new'

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
