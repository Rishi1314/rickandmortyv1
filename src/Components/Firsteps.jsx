import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Firsteps = (props) => {
    // console.log(props);
    const [eps, seteps] = useState("");
    const url=props.link
    // console.log(url);
    useEffect(()=>{
        const FetchEp=async()=>{
            try {
                
                const {data}=await axios.get(url);
                seteps(data.name)
            } catch (error) {
                console.log(error);
            }
        }
        FetchEp();
    })
  return (
    <div className="text-center">
            <span className="fw-bold">First Seen in: </span>
            {eps}
          </div>
    
  )
}

export default Firsteps