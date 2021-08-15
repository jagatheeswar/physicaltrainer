import React, {useState} from "react";
import "../styles/excercise.css"
import defaults from "../images/default.jpg"
import Setlist from "./Setlist";
const Excercise = ()=>{
    const [Excercise,setExcercise] = useState('Select excercise');
    const [Type,setType] = useState('type');
    const [image,setImage] = useState(defaults);
    
    const handleexcercise = (event) =>{
      
    setExcercise(event.target.value)    
    
  }
    
  
    return(
        <div className="excercisecontainer">
            <h1 className="m-5">Add Exercises</h1>
                
<select class="" name="selectexcercise" style={{background:'white'}} id="excercises" onClick = {handleexcercise} >
  
<option id="option1" value="Select Excercises">Select Excercise</option>
  <option id="option1" value="Reverse Lunge">Reverse Lunge</option>
  <option value="Weightlifting" >Weightlifting</option>
  <option value="Dumbles" >Dumbles</option>
  
 
</select>
<br></br> <br></br><br></br>
<select class="" name="selecttype" id="excercises" style={{background:"white"}} onChange = {(event)=>setType(event.target.value)}>
  <option id="option1" value="Reps/Rest/Weight ">Weight/Reps/Rest/Sets</option>
  
</select>
<Setlist setExcercise={setExcercise} excercise={Excercise} type={Type} image={image} setImage={setImage} />
 {/*<Choose excercise={Excercise} type={Type}/> */}
        </div>
    )
}

export default Excercise;

