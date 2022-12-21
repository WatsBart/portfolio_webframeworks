import React, { Fragment, useState } from 'react';

export const ColorSelect = () => {
  const [colors, setColors] = useState<string[]>([])
  const [divColors, setDivColors] = useState<string[]>([])

  const setSelectedColors = (colorList:HTMLCollection) => {
    let newList: string[] = [];
    for(let i = 0; i < colorList.length; i++){
      newList.push(colorList.item(i)?.textContent?.toString()!)
    }
    setColors(newList)
  }

  const updateColors = () => {
    setDivColors(colors)
  }
  
  return(
    <React.Fragment>
      <select id="select" multiple onChange={(event)=>setSelectedColors(event.target.selectedOptions)}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="orange">orange</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <input type="button" onClick={updateColors} value="Add Colors"></input>
      <div style={{display:"flex", flexDirection:"column", width:"100vw",height:"40vw"}}>
        {divColors.map((color) => (
          <div style={{width:"50%", height:"50%",backgroundColor:color}}></div>
        ))}
      </div>
    </React.Fragment>
  )
}