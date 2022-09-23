import {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

function Main() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")
    const [episode, setEpisode] = useState("")
    const [pageno, setpageno] = useState(1)
    const pages=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
    const pageset=()=>pages.map(page=>(
        <button className='btn btn-light' onClick={()=>{setpageno(page)}} >{page}</button>
    ))
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                  
                  const {data}=await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageno}`)
                  
                  
                //   const res=await(eps(data.results[0].episode[0]));
                //   setEpisode(res.name);
                  setCharacters(data.results);
                  
        
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [pageno])

    return (
        <div className='container-fluid'>
            <div className='container-fluid '>
                <div className='pages'>
                <div className='row d-flex justify-content-center btn-group' role="group" aria-label="Basic example">
                    <div className='col-xl-6 pagebar'>
                        <h1 className='text-center'>👇Select a Page👇</h1>
                    {pageset()}
                    </div>
                </div>
                </div>
                
            </div>
            <div className='back row'>
           
              
                {characters.map(character => (
                    <Card character={character}/>
                   
                ))}

            </div>
        </div>
    );
}

export default Main;