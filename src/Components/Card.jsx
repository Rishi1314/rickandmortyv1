import React, { useEffect, useRef, useState } from 'react'
import Firsteps from './Firsteps';

const Card = (props) => {
    const circle=useRef();
    // const [circlecol, setcirclecol] = useState("")
    function circlee(){
        if(props.character.status==="Alive"){
            circle.current.classList.toggle("greenc"); 
        }
        else if(props.character.status==="Dead"){
            circle.current.classList.toggle("redc"); 
        }
    }
    // else if(props.character.status==="Unknown"){
    //     circle.current.classList.remove("redc");
    // }
    
  return (
    <div className="col-xl-4 col-md-6">
        <div className="cardieparent container d-flex justify-content-center mb-5">
        <div className="cardie d-flex flex-column gap-3" >
            

        <img className="imgscale img-fluid" src={props.character.image} alt="" />
        
        {(() => {
          if (props.character.status === "Dead") {
            return <div className="badge bg-danger fs-5">{props.character.status}</div>;
          } else if (props.character.status === "Alive") {
            return <div className=" badge bg-success fs-5">{props.character.status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{props.character.status}</div>;
          }
        })()}
        <div className="content cardContent">
          <div className='text-center'>
          <h1 className="text-center word">{props.character.name}</h1>
          </div>
          <div className="text-center">
          <span className="fw-bold">Species: </span>
          
            {props.character.species}
          </div>
          <div className="text-center">
            <span className="fw-bold">Last Location: </span>
            {props.character.location.name}
          </div>
          <Firsteps link={props.character.episode[0]}/>

        </div>
      </div>
    </div>
    </div>
    
    // <div className='charCard'>
        
    //     <div className='charImg'><img src={props.character.image} alt="character"/></div>
    //     <div className='charDeets'>
    //         <div>
    //             <h1 className='fontName'>{props.character.name}</h1>
    //             <span className='fontStatus'>{props.character.status}-{props.character.species}</span>
    //         </div>
    //         <div className='location'>
                
    //             <h3 className='fontHead'>Last Known Location</h3>
    //             <span className='font'>{props.character.location.name}</span>
              
                
    //         </div>
    //         <div className='location'>
    //         <Firsteps link={props.character.episode[0]}/>
    //         </div>
    //     </div>
        
        
        
        
    // </div>
  )
}

export default Card