import React from 'react'
import "../styles/weightloop.css"
function Restloop({sets}) {
    return sets.map((set,index)=>(

                <span id="weightspan" key={index} >{set.rest} - </span>
    ))
}
export default Restloop