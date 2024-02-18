import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='Logo'>SM Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''  />
        <span>John</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar