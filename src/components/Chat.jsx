import React from 'react'
import cam from "../images/cam.png"
import add from "../images/add.png"
import more from "../images/more.png"
import Messages from './Messages'
import Input from "./Input"

function Chat() {
  return (
    <div className='chat'>
    <div className="chatInfo">
<span>Jane</span>
<div className='chatIcons'>
  <img src={cam} alt=''/>
  <img src={add} alt=''/>
  <img src={more} alt=''/>
</div>

    </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat