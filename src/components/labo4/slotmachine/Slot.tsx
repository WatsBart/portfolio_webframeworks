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
        <SlotIconRow slots={slots}></SlotIconRow><br />
        <button onClick={pullLever} disabled={leverActive}>Pull lever</button>
      </React.Fragment>
    )
  }
  