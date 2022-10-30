'use client'

import React from 'react';

export const AnotherCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
       <button onClick={() => {setCount(count + 1)}}>Click Me {count} </button>
    </>
  )
}