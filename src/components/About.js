import React from "react"
import "./About.css"
import ranch from "./ranch.jpg" 

function About(){
  return(
    <div className="about">
   
    <h4 text align="center">The Pet Kingdom Ltd company started in 2007 under Sir Jacob Black.<br></br>
    A great and ambitious leader. Much significant progress has been seen and made over the years. <br></br>
    We are an excellent company that houses a variety of pets for sale. Buy a pet today..!</h4>

<img src={ranch} alt=" "/>

    </div>
  )
}
export default About;