// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   useEffect(() => {
//     async function getData() {
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//       console.log(res.data.name)
//       setName(res.data.name)
//       setMoves(res.data.moves.length)
//     }
//     getData()
//   })

//   const [num, setNum] = useState();
//   const [name, setName] = useState();
//   const [moves, setMoves] = useState();
//   return (
//     <>
//       <h1>we select {num} value </h1>
//       <h1>my name is {name}</h1>
//       <h1>i have {moves} moves </h1>

//       <select value={num} onChange={(e) => { setNum(e.target.value) }}>
//         <option value='1'>1</option>
//         <option value='2'>2</option>
//         <option value='3'>3</option>
//         <option value='4'>4</option>
//         <option value='5'>5</option>
//       </select>

//     </>
//   )
// }

// export default App;
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    const getData = async () => {
      const responce = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(responce.data.name);
      setMoves(responce.data.moves.length)
    }
    getData()
  })

  return (
    <>
      <h1>The current value is <span style={{ color: 'yellow' }}>{num}</span></h1>
      <h1>the name of the pokemin is <span style={{ color: 'red' }}>{name}</span></h1>
      <h1>The {name} has <span style={{ color: 'blue' }}>{moves}</span> moves</h1>
      <select value={num} onChange={(e) => { setNum(e.target.value) }}>
        <option value='25'>25</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </>
  )
}

export default App;