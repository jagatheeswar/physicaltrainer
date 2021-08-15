import React,{useState} from 'react'
import "../styles/editset.css"
import alert from "../javascript/alert";
import badalert from "../javascript/badalert";

function Setform(props,{status,excercise}) {
    
    
    const [reps,setReps] = useState(0)
    const [rest,setRest] = useState(0)
    const [editweight,setEditweight] = useState(props.value)
    const [editreps,setEditreps] = useState(props.valuetwo)
    const [editrest,setEditrest] = useState(props.valuethree)
    const handleChangeeditweight = (e) =>{
        setEditweight(e.target.value);   
    }
    const handleChangeeditreps = (e) =>{
        setEditreps(e.target.value);   
    }
    const handleChangeeditrest = (e) =>{
        setEditrest(e.target.value);   
    }
    const handleChangereps = (e) =>{
        setReps(e.target.value);
    }
    const handleChangerest = (e) =>{
        setRest(e.target.value);
    }
    if(editweight==undefined)
    setEditweight(0)
    if(editreps==undefined)
    setEditreps(0)
    if(editrest==undefined)
    setEditrest(0)
const handleSubmit = (event) =>{

    event.preventDefault();
        if(props.excercise != "Weightlifting" && props.excercise != "Reverse Lunge" && props.excercise != "Dumbles" && props.excercise != undefined )
            {
                console.log(props.excercise + "sdfsdflsdjfj")   
                badalert();
                return;
            }
            alert();    
props.onSubmit({
    id: Math.floor(Math.random()*10000),
    weight:editweight,
    reps:editreps,
    rest:editrest
})

}

var statuss = false
 var statusget = props.status
 if(statusget==true){
     statuss = true
 }
 else
 statuss =false

    return (

        <form className="setform" onSubmit={handleSubmit}>
            { statuss ?    
        <div  className="mydiv">
            <div className="editdiv">
         <p>Edit Weight</p>
            <input id="editinput" min="0" type="number" placeholder="add value" value={editweight} name="text" className="setinput" onChange={handleChangeeditweight} />
        
            </div>

            <div className="editdiv">       
            <p>edit Reps</p>
            <input id="editinput" min="0" type="number" placeholder="add value" value={editreps} name="text" className="setinput" onChange={handleChangeeditreps} />
            </div>

            <div className="editdiv">
            <p>Edit Rest</p>
            <input id="editinput" min="0" type="number" placeholder="add alue" value={editrest} name="text" className="setinput" onChange={handleChangeeditrest} />
            </div>
            </div>   
: null }
<div className="form-group">
  <button  className={`setbutton btn form-control ${statuss ? "btn-primary" : "btn-success"}`} type="submit" style={{width:'90%',marginRight:'5%',marginLeft:'5%'}} >{ statuss ? <span>Submit Edited Set</span> :<span style={{fontWeight:'bold'}}> <i className="fa fa-plus"></i>Add New Set</span>} </button>
                </div>
                <br></br>
                <br></br>
        </form>
    )
}

export default Setform
