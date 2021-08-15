import React from 'react'
import "../styles/weightloop.css"
function repsloop({sets}) {
    
    return sets.map((set,index)=>(

                <span id="weightspan" key={index} >{set.reps} - </span>
    ))
}
export default repsloop