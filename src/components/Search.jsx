import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-beautiful-woman-sitting-under-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search