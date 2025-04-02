import React from 'react'
import Featured from './featured'


function Bookrow({name,author}) {
  return (
    <>
      <h1>{name}</h1>
      <p>{author}</p>
<Featured/>
    </>
  )
}

export default Bookrow
