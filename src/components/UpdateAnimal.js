import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function UpdateAnimal(updateAnimal){
  //declare param functions
  // const params=useParams()
  const {id}=useParams()
  //declare navigation function
  const navigate=useNavigate()

  //declare our object variables

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [personality, setPersonality] = useState("")
    const [healthStatus, setHealthStatus] = useState("")
    const [availabilityStatus, setaAvailabilityStatus] = useState("")
    const [image, setImage] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
        
    //create object to hold data
    const updateanimal = {
      name:name,
      breed:breed,
      age:age,
      gender:gender,
      size:size,
      weight:weight,
      personality:personality,
      healthStatus:healthStatus,
      availabilityStatus:availabilityStatus,
      image:image
    }

    fetch(`http://localhost:3000/animals/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateanimal),
    })
      .then((response) => response.json())
      .then((data) => updateAnimal(data))

      //clearing input fields
      setInputClear()
      //navigate to home page
      navigate("/");
  }

  function setInputClear() {
    setName("")
    setBreed("")
    setAge("")
    setGender("")
    setSize("")
    setWeight("")
    setPersonality("")
    setHealthStatus("")
    setaAvailabilityStatus("")
    setImage("")
  }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center"}}>UPDATE ANIMAL</h1>
        <label for="name">Name</label>
          <input type="text" className="form-name" id="name" value={name} placeholder="Enter Animal Name" onChange={e => setName(e.target.value)}/>

          <label for="breed">Breed</label>
          <input type="text" id="breed" value={breed} placeholder="Enter Breed" onChange={e => setBreed(e.target.value)}/>

          <label for="age">Age</label>
          <input type="text" id="age" value={age} placeholder="Enter Age" onChange={e => setAge(e.target.value)}/>

          <label for="gender">Gender</label>
          <input type="text" id="gender" value={gender} placeholder="Enter Gender" onChange={e => setGender(e.target.value)}/>

          <label for="size">Size</label>
          <input type="text" id="size" value={size} placeholder="Enter size" onChange={e => setSize(e.target.value)}/>

          <label for="weight">Weight</label>
          <input type="text" id="weight" value={weight} placeholder="Enter Weight" onChange={e => setWeight(e.target.value)}/>

          <label for="personality">Personality</label>
          <input type="text" id="personality" value={personality} placeholder="Enter Personality" onChange={e => setPersonality(e.target.value)}/>

          <label for="healthStatus">Health Status</label>
          <input type="text" id="healthstatus" value={healthStatus} placeholder="Enter Breed" onChange={e => setHealthStatus(e.target.value)}/>

          <label for="image">Image Url</label>
          <input type={<img/>} id="image" value={image} alt="images" placeholder="Enter Image URL" onChange={e => setImage(e.target.value)}/>

       <button className="submit" type="submit">ENTER</button>
      </form>
  );

}
export default UpdateAnimal;
