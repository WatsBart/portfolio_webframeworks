import { Fragment, useState } from 'react';
import cherry from "./assets/cherry.png";
import lemon from "./assets/lemon.png";
import melon from "./assets/melon.png";
import prune from "./assets/prune.png";
import seven from "./assets/seven.png";
import { Slot } from './Slot';
import { Result } from './Result';

export const SlotMachine = () => {
  const [slots, setSlots] = useState<number[]>([])
  const [money, setMoney] = useState(101)
  const [pulledLever, setPulledLever] = useState(false)
  
  let slotAmount = 3
  let winAmount = 3

  const rollSlots = () => {
    setPulledLever(true)
    let newSlots: number[] = []
    for(let i = 0;i<slotAmount;i++){
      let slot = Math.floor(Math.random()*5)
      newSlots[i] = slot
    }
    setSlots(newSlots)
  }

  const addMoney = (amount:number) => {
    setMoney(prev => prev + amount)
    setPulledLever(false)
  }
  
  if(slots.length <= 0){
    rollSlots()
  }
  
  return (
    <Fragment>
      <img alt="" width="64" height="64" src={GetSlotIcon(0)}></img>
      <img alt="" width="64" height="64" src={GetSlotIcon(1)}></img>
      <img alt="" width="64" height="64" src={GetSlotIcon(2)}></img>
      <img alt="" width="64" height="64" src={GetSlotIcon(3)}></img>
      <img alt="" width="64" height="64" src={GetSlotIcon(4)}></img>
      <br></br>
      <p>Saldo: €{money}</p>
      <Slot slots={slots} pullLever={rollSlots} leverActive={money<=0}></Slot>
      <Result result={GetResult(slots, winAmount, addMoney, pulledLever, money)}></Result>    
    </Fragment>
  );
}

export const GetSlotIcon = (a:number):string => {
  switch(a){
    case 0:
      return cherry;
    case 1:
      return lemon;
    case 2:
      return melon;
    case 3:
      return prune;
    case 4:
      return seven;
    default:
      return "";
  }
}

const GetResult = (result:number[], winAmount:number, addMoney:(amount:number)=>void, pulledLever:boolean, money:number):string => {
  if(money<=0) return "Je hebt geen geld meer"
  let won = false;
    for(let i = 0;i<result.length;i++){
      if(!won){
        let counter = 0;
        for(let j=i;j<result.length;j++){
          if(result[i]===result[j]) counter++;
          else counter = 0;
          if(counter >= winAmount) won = true;
        }
      }
    }
  if(pulledLever){
    if(won){
      addMoney(20)
    }else{
      addMoney(-1)
    }
  }
  if(won){
    return "Je hebt gewonnen";
  }else{
    return "Je hebt verloren";
  }
}