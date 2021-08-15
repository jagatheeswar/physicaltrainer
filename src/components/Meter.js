import React from "react";
import "../styles/Meter.css"

const Meter = ()=>(
    <>
  
    <div className="metermainclass mt-5">
      <div className="divone">
       <div className="green ml-3" style={{background:'rgb(39, 122, 28)'}}>1 </div>

       <span class="line"></span>

       <div className="green ml-3" style={{background:'yellow'}}>2</div>
       
       </div>
       <div className="divtwo" style={{paddingRight:'20px',display:'flex',alignItems:'center'}} >
       <span class="line" style={{marginBottom:'40px',marginTop:'40px',marginRight:'15px'}}></span>
       <span style={{textAlign:'center',verticalAlign:'center',width:'50px',height:'50px',borderRadius:'50%',background:'black',color:'white',paddingTop:'10px'}}>3</span>
           {/* <p style={{textAlign:'center',verticalAlign:'center',marginTop:'20px',width:'50px',float:'right',height:'50px',borderRadius:'50%',background:'black',color:'white',paddingTop:'10px'}}>3</p> */}
       </div>
       
    </div>
    </>
);
export default Meter