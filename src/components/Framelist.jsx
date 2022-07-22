import React from 'react'
import './Framelist.css'

export default function Framelist(props) {
  return (
    <div>
    <h3>frames:</h3><br/>
        <div id='frameDiv'>
        {props.framesList.map((val,index)=>{
          return <div id={`frame${index}`} className='frame'  onClick={()=>{props.setSelectedFrame(val)}}>
            <img id='img' src={val} width={100}/>
          </div>
        })}
        </div>
        
    </div>
  )
}
