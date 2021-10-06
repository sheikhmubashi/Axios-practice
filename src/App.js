import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [change, setChange] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData()
  })
  return (
    <>
      <input value={change} onChange={(a) => { setChange(a.target.value) }}></input>
      <h1>{change}</h1>
      <h1>the current number is <span style={{ color: 'red' }}> {num}</span></h1>
      <h1>the name of pokemon is <span style={{ color: 'blue' }}>{name}</span></h1>
      <h1>{name} has <span style={{ color: 'green' }}>{moves}</span> moves</h1>
      <select value={num} onChange={(e) => { setNum(e.target.value) }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </>
  )
}

export default App;