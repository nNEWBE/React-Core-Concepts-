import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import PlayerCount from './PlayerCount';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick()
  {
    alert('Button Clicked')
  }

  function handleClick02(number)
  {
    alert(number+5);
  }

  const style={
    marginLeft:'10px',
    border:'2px solid aqua'
  }

  return (
    <>
      <h1>React core concepts 02</h1>
      <Friends></Friends>
      <Users></Users>
      <PlayerCount></PlayerCount>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick02(5)} style={style}>
        Click him
      </button>
    </>
  );
}

export default App
