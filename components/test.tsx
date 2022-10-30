'use client'

import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>Click Me</button>
      <p>You clicked {count} times</p>
    </div>
  )
}