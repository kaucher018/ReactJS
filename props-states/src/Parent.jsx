import React from 'react'
import Child from './child'
import { useState } from 'react' 

function Parent() {
    const [count, setCount] = useState(0);

   function increment() {
    setCount(count + 1);
  }

  return (
    <>
    <div>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          increment();}}
        >Increment</button>
        </div>
        <Child count={count} increment={increment}/>
    </>
  )
}

export default Parent
