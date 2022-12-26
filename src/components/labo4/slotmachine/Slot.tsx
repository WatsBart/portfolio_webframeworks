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
        <input type="button" onClick={pullLever} disabled={leverActive} value="Pull lever" />
      </React.Fragment>
    )
  }
  