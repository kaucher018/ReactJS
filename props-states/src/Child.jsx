import React from 'react'

function child({count, increment}) {
  return (
    <div>
        <h2>Child</h2>
        
    <button onClick={increment}>Increment</button>
       
      {count}
    </div>
  )
}

export default child
