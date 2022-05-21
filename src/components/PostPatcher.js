import React from 'react'

export default function PostPatcher() {

  return (
    <button className='btn btn-warning' onClick={(e)=>{
        e.preventDefault();
    }}>Update Post</button>
  )
}
