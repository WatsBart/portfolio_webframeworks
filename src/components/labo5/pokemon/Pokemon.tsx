import React, { Fragment, useState } from 'react';
import { Pokedex } from './Pokedex';

export const  Labo5Pokemon = () => {
  const [limit, setLimit] = useState(10)
  const [activeLimit, setActiveLimit] = useState(10)

  return (
    <Fragment>
      <Pokedex limit={activeLimit}></Pokedex>
      <input type="number" value={limit} onChange={(event)=>setLimit(Number(event.target.value))}></input>
      <button onClick={()=>{
        setActiveLimit(limit)
      }}>Set Limit</button>
    </Fragment>
  );
}