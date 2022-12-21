import React from "react"
import { SlotIcon } from "./SlotIcon"

interface SlotIconRowProps {
    slots: number[]
  }  

export const SlotIconRow = ({slots}: SlotIconRowProps) => {
    return (
      <React.Fragment>
        {slots.map((slot:number) => <SlotIcon id={slot}></SlotIcon>)}
      </React.Fragment>
    )
  }
  