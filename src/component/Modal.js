import React from 'react'

function Modal(props) {
    function confirmHandeler(){
        props.onConfirm()
    }
    function CancelHandeler(){
        props.onCancel()
    }
  return (
    <div className='modal'>
        <p>Are You sure</p>
        <button className='btn btn--alt' onClick={CancelHandeler}>Cancel</button>
        <button className='btn' onClick={confirmHandeler}>Confirm</button>
    </div>
  )
}

export default Modal