import React from 'react'

const Message = ({msg,type}) => {
  
  return (
    <div className='alert alert-danger' role='alert'>
      {msg}
    </div>
  )
}

export default Message