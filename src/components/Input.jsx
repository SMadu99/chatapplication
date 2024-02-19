import React from 'react'
import Img from '../images/Img.png'
import Attach from '../images/Attach.png'

function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something..' />
      <div className='send'>
        <img src={Attach} alt='' />
        <input type='file' style={{display:"none"}} id="file" />
        <label htmlForm="file">
          <img src={Img} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input