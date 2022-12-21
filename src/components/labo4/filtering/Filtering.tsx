import React, { Fragment, useState } from 'react';

let studenten:Student[] = [
  {name:"jacob",age:21,year:2},
  {name:"jan",age:20,year:1},
  {name:"jacob2",age:22,year:3},
  {name:"jacob3",age:23,year:4},
  {name:"jacob4",age:24,year:6},
  {name:"jacob5",age:25,year:5}
]

interface Student {
  name:string,
  age:number,
  year:number
}

export const Filtering = () => {
  const [sortField, setSortField] = useState("Name")
  const [searchText, setSearchText] = useState("")
  return(
    <React.Fragment>
      <label htmlFor="search">Search: </label>
      <input type="search" name="search" onChange={(event) => setSearchText(event.target.value)}></input>
      <table>
        <thead>
          <th onClick={()=>setSortField("Name")}>Name</th>
          <th onClick={()=>setSortField("Age")}>Age</th>
          <th onClick={()=>setSortField("Year")}>Year</th>
        </thead>
        <tbody>
          {studenten.filter((student)=>student.name.includes(searchText)).sort((a,b)=>{
            switch(sortField){
              case "Name" :
                if(a.name > b.name) return 1
                return 0
              case "Age" :
                if(a.age > b.age) return 1
                return 0
              case "Year" :
                if(a.year > b.year) return 1
                return 0
              default :
                return 1
            }
          }).map((student)=>(
            <tr>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}