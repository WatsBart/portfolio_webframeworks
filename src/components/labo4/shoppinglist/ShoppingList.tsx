import React, { Fragment, useState } from 'react';

interface shoppingListItem {
  name: string,
  quantity: number
}

export const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<shoppingListItem[]>([]);
  const [name, setName] = useState("");
  const [quantity,setQuantity] = useState(0);
  const [nameError,setNameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [removeItem, setRemoveItem] = useState(false)
 
  const removeItemAtIndex = (givenIndex:number) => {
    setShoppingList(shoppingList.filter((item,index)=>index!==givenIndex))
    setRemoveItem(true)
    setConfirmation(false)
    setNameError(false)
    setQuantityError(false)
  }

  return(
    <div>
      <div>
      {removeItem && <div style={{backgroundColor:"lightgray",color:"green"}}>Item removed from shopping list</div>}
      {quantityError && <div style={{backgroundColor:"lightgray", color:"red"}}>Quantity must be greater than 0</div>}
      {nameError && <div style={{backgroundColor:"lightgray", color:"red"}}>Name must not be empty</div>}
      {confirmation && <div style={{backgroundColor:"lightgray", color:"green"}}>Item added to shopping list</div>}
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)}></input>
      <label htmlFor="quantity">Quantity: </label>
      <input type="number" id="quantity" name="quantity" value={quantity} onChange={(event)=>setQuantity(parseInt(event.target.value))}></input>
      <input type="button" value="Add" onClick={()=>{
        setConfirmation(false)
        setRemoveItem(false)
        if(quantity<=0) setQuantityError(true)
        else {
          setQuantityError(false)
          if(name==="") setNameError(true)
          else {
            setNameError(false)
            let item:shoppingListItem = {name:name,quantity:quantity}
            setShoppingList([...shoppingList,item])
            setConfirmation(true)
            setQuantity(0)
            setName("")
          }
        }
      }}></input>
      </div>
      <div>
      <React.Fragment>
      <table>
        <thead>
          <th>Name</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {shoppingList.map((item,index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td><button type="submit" onClick={()=>{
                removeItemAtIndex(index)
              }}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </React.Fragment>
      </div>
    </div>
  )
}