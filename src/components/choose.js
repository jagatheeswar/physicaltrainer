import React, {useState} from "react";
import "../styles/choose.css"
import reverse from "../images/reverse.jpg"
import weight from "../images/weight.jpg"
import dumbles from "../images/dumbles.jpg"
import Setform from './Setform'
import Set from './Set'
import Weightloop from "./Weightloop";
import Restloop from "./Restloop";
import Repsloop from "./Repsloop";
import defaults from "../images/default.jpg"

const Choose = ({excercise,type,setExcercise,image,setImage})=>{

        const[toggle,setToggle] = useState(true);    
        const[sets, setSets] = useState([])
        const[isSet,setIsset] = useState(false)
        
        const addset = set=>{
        const newSets = [set,...sets]
        setSets(newSets)
      
        if(sets.length+1 >0)
        setIsset(true)
    
        }

    const removeSet = (id)=>{
      
        const removeArr =[...sets].filter(set => set.id!==id)
        setSets(removeArr)
     
        if(sets.length-1 == 0)
        setIsset(false)
    
      }
    const updateSet = (SetId,newvalue)=>{
        
    setSets(prev=>prev.map(item=>(item.id === SetId ? newvalue:item)))
    }     
    const handleClearexcercise = () =>{
      setSets([])
      setExcercise('')
      setIsset(false)
      
    }
    if(excercise == "Weightlifting"){
      setImage(weight)
    }
    if(excercise == "Reverse Lunge"){
      setImage(reverse)
    }
    if(excercise == "Dumbles"){
      setImage(dumbles)
    }
    if(excercise!="Dumbles" && excercise!="Weightlifting" && excercise!="Reverse Lunge"){
      setImage(defaults)
    }
    const newset = sets.reverse()
    
        return(
          <>
        
        <div className="choosecontainer">
          
      <div className="flexcontainer">
      <div className="image">
      <img  src= {image} id="onlyimage" width="100%" height="100%" />
      </div>
      <div className="number">
      <h1 style={{textAlign:'start'}}>{excercise}</h1>
      <p className="" id="">Weight:&nbsp; <span><Weightloop sets={newset} /> </span></p>
    <p className="" id=""> Reps: &nbsp;&nbsp;&nbsp; <span><Repsloop sets={newset} /> </span></p>
    <p id="" className="" id="">Rest: &nbsp;&nbsp;&nbsp;&nbsp;  <span><Restloop sets={newset} /></span></p>
    
      </div>
      <div className="excercisecontrol">
      <div id="tdthree" >
      <div id="clearexcercise" >
        <span onClick={() => setToggle(!toggle)} className="editbtn">Edit
        <br>
        </br>
        <span onClick={() => setToggle(!toggle)} id="editicon"> { toggle ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i> }</span>
        </span>
        <i onClick={handleClearexcercise} className="fa fa-close fa-2x closebtn"></i>
    </div>
      </div>
      </div>
      </div>
        </div>
        
        
        { toggle ? (<div className="togglediv">
        <div id="alert" className="hideblock alert alert-success">
       <p id="alertpara" style={{textAlign:'center' , fontWeight:'bolder',fontSize:'larger'}}> successfully added!!</p>
    </div>
    <div id="badalert" className="hideblock alert alert-danger">
       <p id="badalertpara" style={{textAlign:'center' , fontWeight:'bolder',fontSize:'larger'}}>Please select A Excercise to Add Sets!</p>
    </div>
          {isSet? <h1 style={{textAlign:'center'}}>Your planned sets</h1> :<h1 style={{textAlign:'center'}}>NO planned sets</h1>}
            
            
            <Setform onSubmit={addset} excercise={excercise} />
            <Set 
            sets={sets} 
            removeSet = {removeSet}
            updateSet ={updateSet}
            />
           </div>)  : null }
        </>
    )
}
export default Choose;