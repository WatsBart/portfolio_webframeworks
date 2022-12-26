import React, { useState } from 'react';

export const CounterList = () => {
  const [counters,setCounters] = useState<number[]>([])
  return(
    <React.Fragment>
      {
        counters.map((counter, index)=>(
          <div style={{display:'flex'}}>
            <button type="button" value="Omhoog" onClick={(event)=>setCounters(newCounters(counters,index,counter+1))}>Omhoog</button>
            {counter>0?<p style={{color:"green"}}>Count:{counter}</p> : counter<0?<p style={{color:"red"}}>Count:{counter}</p>:<p>Count:{counter}</p>}
            <button type="button" value="Omlaag" onClick={(event)=>setCounters(newCounters(counters,index,counter-1))}>Omlaag</button>
          </div>
        ))
      }
      <button onClick={(event)=>{
        setCounters([...counters,0])
      }}>Add counter</button>
      <p>Sum of counters: {counters.length > 0 ? counters.reduce((prev,curr)=>prev+curr) : 0}</p>
    </React.Fragment>
  )
}

const newCounters = (originalCounters:number[], index:number, newValue:number) => {
  let newCounters = [...originalCounters]
  newCounters[index] = newValue
  return newCounters
}