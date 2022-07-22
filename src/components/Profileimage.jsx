import React from 'react'

import './Profileimage.css'

export default function Profileimage(props) {

    

  return (
    <div onClick={()=>{props.setFrameListFlag(!props.frameListFlag)}} id='profileDiv'>
        <img id='profileImage' src={props.profileImage}/>
        <img id='profileFrame' src={props.selectedFrame}/>
    </div>
  )
}
