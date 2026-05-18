import React from "react";
import './projects.css';
import Logo from '../logo/logo';
import Images from '../images/images';

import Riddlix from '../photos/library.jpg';
import face from '../photos/face.jpg';
import color from '../photos/color.jpg';
import robot from '../photos/robot.jpg';
import html from '../photos/html.jpg';
import nature from '../photos/nature.jpg';
import nature2 from '../photos/nature2.jpg';


const Projects =({setRoute})=>{

    const joining=[
        {name:'Riddlix',image:Riddlix}, 
        {name:'Face-detector',image:face},
        {name:'Color-shift',image:color},
        {name:'Robofriend',image:robot},
        {name:'Basic-HTML-page',image:html},
        {name:'Basic-landing-page',image:nature},
        {name:'Nature',image:nature2},
    ]
    
    return(
        <div className="decorate2">
            <p className='box object grow ttu' onClick={()=>setRoute('home')}>home</p>
            <Logo />
            <h1 className="white center aligning">
                Projects That Started As Curiosity
            </h1>

            <div className="container">
                {joining.map((p, i) => (
                    <Images key={i} name={p.name} image={p.image} />
                ))}
            </div>
        </div>
    )
}

export default Projects; 