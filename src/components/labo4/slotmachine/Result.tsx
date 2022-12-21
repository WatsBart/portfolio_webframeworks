import React from "react"

interface ResultProps {
    result: string
  }
  
export const Result = ({result}:ResultProps) => {
    return(
      <React.Fragment>
        <p>{result}</p>
      </React.Fragment>
    )
  }
  