import React,{useState} from 'react'
import Setform from './Setform';
import "../styles/addset.css"

function Set({sets,removeSet,updateSet}) {
    
    const [edit,setEdit] = useState({
        id:null,
        value:'',
        valuetwo:'',
        valuethree:'',
        
        weight:'',
        reps:'',
        rest:'',
        isEdit:false
    })

    const submitUpdate = value => {
        updateSet(edit.id,value);
        setEdit
        (
            {
                id:null,
                value:'',
                valuetwo:'',
                valuethree:'',
                
                isEdit:true
        
            }
        )
    }
    if(edit.id){
        
        return <Setform edit={edit} value={edit.value} valuetwo={edit.valuetwo} valuethree={edit.valuethree} status={true} onSubmit = {submitUpdate} />
    }
    return sets.map((set,index)=>(

        <div  key={index}>
                <div key={set.id} >
                <div id="singleadd" className="ml-5 mt-3">
                    <div id="addcontrols" className="mr-3">
                    
                <i onClick={()=>removeSet(set.id)}  className='fa fa-close fa-3x mr-5 '></i> 
                <p style={{fontWeight:'bolder'}}>set {index+1}</p>
                </div>
                <div className="adddiv">
                    <p>Weight</p>
                <input type="number" value={set.weight} placeholder="weights" className="addinput" id="addweightinput"/>
                </div>
                <div className="adddiv">
                    <p>Reps</p>
            <input type="number"  placeholder="reps" value={set.reps} className="addinput" id="addwrepsinput" />
            </div>
            <div className="adddiv">
                <p>Rest</p>
            <input type="number" value={set.rest} placeholder="rest" className="addinput" id="addrestinput" />
            </div>
            <button id="editbtn" className="btn btn-primary mr-5 mt-5" onClick={()=>setEdit({id:set.id,value:set.weight,valuetwo:set.reps,valuethree:set.rest})}>edit</button>  
                
            </div>
            
                </div>
                <div style={{textAlign:'center'}} className="icons">
                
                
                </div>
        <br></br>
        </div>
        
    ))
}
export default Set
