import React from "react"
import { SlotIconRow } from "./SlotIconRow"

interface SlotProps {
    slots: number[],
    pullLever: () => void,
    leverActive: boolean
}  

export const Slot = ({slots, pullLever, leverActive}:SlotProps) => {
    return (
      <React.Fragment>
        <button onClick={pullLever} disabled={leverActive}>Pull lever</button>
        <SlotIconRow slots={slots}></SlotIconRow>
      </React.Fragment>
    )
  }
  