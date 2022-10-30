'use client'

import React from 'react';
import { AnotherCounter } from './test2';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => {setCount(count + 1)}}>Click Me {count} </button>
      <AnotherCounter />
    </>
  )
}