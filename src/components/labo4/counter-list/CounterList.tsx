import React, { useState } from 'react';

export const CounterList = () => {
  const [counters,setCounters] = useState<number[]>([])
  return(
    <React.Fragment>
      {
        counters.map((counter, index)=>(
          <div style={{display:'flex'}}>
            <input type="button" value="Down" onClick={(event)=>setCounters(newCounters(counters,index,counter-1))} />
            {counter>0?<p style={{color:"green"}}>Count:{counter}</p> : counter<0?<p style={{color:"red"}}>Count:{counter}</p>:<p>Count:{counter}</p>}
            <input type="button" value="Up" onClick={(event)=>setCounters(newCounters(counters,index,counter+1))} />
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