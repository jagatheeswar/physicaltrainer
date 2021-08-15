import React,{useState} from 'react'

function Editset(props) {
    const [weight,setWeight] = useState(0)
    const [reps,setReps] = useState(0)
    const [rest,setRest] = useState(0)
    
    const handleChangeweight = (e) =>{
        setWeight(e.target.value);
    }
    const handleChangereps = (e) =>{
        setReps(e.target.value);
    } 
    const handleChangerest = (e) =>{
        setRest(e.target.value);
    }
    
const handleSubmit = (event) =>{
event.preventDefault();
props.onSubmit({
    id: Math.floor(Math.random()*10000),
    weight:weight,
    reps:reps,
    rest:rest
})
}
    return (
        <form className="setform" onSubmit={handleSubmit}>
            <input type="number" placeholder="add value"  min="0" value={weight} name="text" className="setinput" onChange={handleChangeweight} />
            <input type="number" placeholder="add value" min="0" value={reps} name="text" className="setinput" onChange={handleChangereps} />
            <input type="number" placeholder="add alue" min="0" value={rest} name="text" className="setinput" onChange={handleChangerest} />
                

                <button className="setbutton" > Add Set </button>
                <br></br>
                <br></br>
        </form>
    )
}

export default Editset
