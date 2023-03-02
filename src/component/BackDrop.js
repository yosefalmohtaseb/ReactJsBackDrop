import React from 'react'

function BackDrop(props) {
  return (
    <div className='backdrop' onClick={props.onClick}/>
  )
}

export default BackDrop