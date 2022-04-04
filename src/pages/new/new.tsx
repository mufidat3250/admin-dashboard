import React from 'react'
import Navbar from '../../molecule/navbar/navbar'
import Sidebar from '../../molecule/sidebar/sidebar'
import {useState} from 'react'

import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.scss'

type newProps = {
  title:String;
  inputs: {id:number, label:string, type:string ,placeholder:string}[]
}


function New({title, inputs}:newProps) {

  const [file, setFile] = useState('')

 
  return (
    <div className='new'>
      <Sidebar/>
      <div className='new-container'>
        <Navbar/>
        <div className='top'>
          <h1 className='title'>{title}</h1>
        </div>
        <div className='bottom_'>
          <div className='left'> 
          <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
          alt=""
           className='itemImg w-[100px] h-[100px] rounded-[50%]'/>
          </div>
          <div className='right'>
            <form action="">
            <div className='formInput'>
                <label htmlFor="inputFile">
                Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type="file" placeholder='file'  id='inputFile' className='hidden' />
              </div>
              
              {inputs.map((input)=> <div className='formInput' key ={input.id}>
                <label htmlFor="userName">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} id='userName' />
              </div>)}

              <button type='submit'>Send</button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default New