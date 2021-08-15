import React,{useState} from 'react'
import "../styles/setlist.css"
import Choose from './choose';

function Setlist({excercise,type,setExcercise,image,setImage}) {
    const[sets, setSets] = useState([])
    const addset = set=>{
    const newSets = [...sets,set]
    setSets(newSets)
    
    }
const removeSet = (id)=>{
    
    const removeArr =[...sets].filter(set => set.id!==id)
    setSets(removeArr)
}
const updateSet = (SetId,newvalue)=>{
    
setSets(prev=>prev.map(item=>(item.id === SetId ? newvalue:item)))
}
    return (
        
        <div className="mt-5" id="setlistdiv"> 
            <Choose excercise={excercise} setExcercise={setExcercise} type={type} sets={sets} image={image} setImage={setImage} />
           
        </div>
    )
}

export default Setlist
