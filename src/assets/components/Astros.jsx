import {useState,useEffect} from "react";
import { Typography } from "@mui/material";
import{useState,}

import "./Astros.css";

function Astro (props)
{
    return
    (
    <div className="card">
    <h2>{props.astro.name}</h2>
    <p>{props.astro.craft}</p>
    </div>
    );
}



/*function Astro()
{
const astro={
    name: "name lastname"
    craft: "ISS",
};

return
(
    <div className="card">
        <h2>{astro.name}</h2>
        <p>{astro.craft}</p>
    </div>

);

}*/

function Astros()
{
    const [astros,setAstros]= userState();
    const URL = "http://api.open-notify.org/astros.json";

    useEffect(() => 
        {
            async function fetchData ()
            {
                const response =await fetch(URL);
                const data=await response.json();
                setAstros(data.people);
                console.log(astros);
        
            }
            fetchData();
        },[]):
        console.log(astros);
      
    
    
    return
    (<>
        <Typography variant="h2" className="Astros">ASTROS</Typography>
        <div className="card-container">
        {astros ? 
            (
                astros.map((astro, index ) => <Astro astro={astro} key={index}/>)):
                (
                    <CircularProgress/>
                )}
          
            </div>
        
        </>

    );
}

export default Astros;