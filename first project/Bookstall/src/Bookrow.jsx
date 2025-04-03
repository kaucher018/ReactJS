import React from 'react'
import Featured from './featured'


function Bookrow({name,author}) {
  return (
    <>
    <div>
      <h1 className='font-bold'>{name}</h1>
      <p className='text-gray-600'>{author}</p>
      </div>
<Featured/>
    </>
  )
}

export default Bookrow
