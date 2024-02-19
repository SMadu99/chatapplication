import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' /> 
      </div>
    </div>
  )
}

export default Message