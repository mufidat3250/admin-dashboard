import React, {createContext, useReducer} from 'react'
import {darkmodeReducer} from './darkmodeReducer'

type DarkmodeProps = {
    children : React.ReactNode
}

const initialState ={
    darkmode:false
}

export const DarkmodeContext = createContext<{state:{darkmode:boolean}, dispatch:Function}>({state:initialState, dispatch:()=>null})
console.log(DarkmodeContext)

export const DarkmodeProvider = ({children}:DarkmodeProps)=>{
        const [state, dispatch] = useReducer(darkmodeReducer, initialState)
        return <DarkmodeContext.Provider value ={{state, dispatch}}>{children}</DarkmodeContext.Provider>
}
