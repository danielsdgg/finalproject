import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

function Contacts(addMessage){
  //declare navigation variable
  const navigate = useNavigate()

  //declare form variables
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    //object that will hold data
    const newMessage = {
      name:name,
      email:email,
      message:message,
    }

    //fetch request
    fetch("http://localhost:3000/messages",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newMessage)
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
    setInputClear()

    navigate("/");
  }

  function setInputClear(){
    setName("")
    setMessage("")
    setEmail("")
  }
  return(
    <form className="addanimals" onSubmit={handleSubmit}>
      <h2 style={{textAlign:"center"}}>Contacts Page</h2>
      <p style={{textAlign:"center"}}>Reach out to us by filling the form</p>

      <label for="name">Name</label>
      <input type="text" id="name" value={name} placeholder="Enter name" onChange={e => setName(e.target.value)}/>

      <label for="email">Email Address</label>
      <input type="text" id="email" value={email} placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>

      <label for="name">Comments</label>
      <input type="text" id="message" value={message} placeholder="Comments" onChange={e => setMessage(e.target.value)}/>

      <button className="submit-message" type="submit">Submit</button>

    </form>
  )
}
export default Contacts;