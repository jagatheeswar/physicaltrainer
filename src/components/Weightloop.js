import "../styles/weightloop.css"
function Weightloop({sets}) {
    
    return sets.map((set,index)=>(

                <span id="weightspan" key={index} >{set.weight} - </span>
    ))
}
export default Weightloop