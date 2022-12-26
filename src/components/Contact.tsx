import React, { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface template {
    name: string,
    message: string
}

export const Contact = () => {
  const [input, setInput] = useState<template>({name:"",message:""})
  const [confirmationMessage, setConfirmationMessage] = useState("test")

  useEffect(()=>{
    setConfirmationMessage("")
  },[])

  const sendEmail = (e:FormEvent) => {
    setConfirmationMessage("Email sent")
    e.preventDefault()
    
    let templateParams = {
        name: input.name,
        message: input.message
    }

    emailjs.send('service_he8isti', 'template_vtmmajo', templateParams, '2X6HrNTonUWBPeTgt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setInput({name:"",message:""})
  };

  return (
    <div>
      <form onSubmit={(event)=>sendEmail(event)}>
      <label>Name: </label><br />
      <input value={input.name} onChange={(event)=>setInput({name:event.target.value,message:input.message})} type="text" name="name" /><br />
      <label>Message: </label><br />
      <textarea value={input.message} onChange={(event)=>setInput({name:input.name,message:event.target.value})} name="message" /><br />
      <input type="submit" value="Send" />
    </form>
    <p>{confirmationMessage}</p>
    </div>
    
  );
};
