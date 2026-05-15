import React from "react";
import './images.css';
import Links from "../links/links";


const Images=({name,image})=>{
    return(        
        <div className="card">
            <img src={image} alt='try later on' className="beauty" />
            <div className="overlay">
                <Links project={name}/>
            </div>
        </div>
    )
}
export default Images;