import { useState } from 'react'
import './App.scss'
import Home from './pages/home/home'
import {Route, Routes} from 'react-router-dom'
import List from './pages/list/list'
import Login from './pages/login/login'
import Single from './pages/single/single'
import New from './pages/new/new'
import {userInputs, productInputs} from './formSource'
import './styles/dark.scss'
import {useContext} from 'react'
import {DarkmodeContext} from './context/darkmodeContext'

function App() {

  const {state} = useContext(DarkmodeContext)
  const darkmode = state.darkmode
  console.log(state)

  return (
    <div className={darkmode? 'app dark':'app'}>
     
    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/users'>
              <Route  index element={<List/>}/>
              <Route path=':id' element = {< Single/>}/>
              <Route path = 'new' element = {<New inputs ={userInputs} title='Add New User'/>}/>
            </Route>
            <Route path='/products'>
              <Route  index element={<List/>}/>
              <Route path=':product id' element = {< Single/>}/>
              <Route path = 'new' element = {<New inputs = {productInputs} title='Add New Product'/>}/>
            </Route>
        </Route>      
    </Routes>
    </div>
  )
}

export default App
