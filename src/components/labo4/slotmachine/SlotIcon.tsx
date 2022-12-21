import React from "react"
import { GetSlotIcon } from "./SlotMachine"

interface SlotIconProp {
  id: number
}

export const SlotIcon = ({id}: SlotIconProp) => {
    return(
      <React.Fragment>
        <img alt="" width="64" height="64" src={GetSlotIcon(id)}></img>
      </React.Fragment>
    )
  }
  