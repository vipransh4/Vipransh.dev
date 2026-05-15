import React from "react";
import BgVideo from "./video";
import './text.css';

const Text =()=>{
    return(
        <div className="center">
            <div className="fixed top-0 white ttu fw5 lh-solid">
                <h1 className="ma0 tc center decorate" >
                    Designing 
                </h1>
                <div className="flex justify-center items-center">
                    <h1 className="ma0 decorate" >
                        idea
                    </h1>
                    <div className="relative br-pill overflow-hidden mh4 video">  
                        <BgVideo className="w-100 h-100 simul"/>
                    </div>
                    <h1 className="ma0 decorate" >
                        into
                    </h1>
                </div>
                <h1 className="ma0 tc decorate" >reality</h1>
            </div>
        </div>
    )
};

export default Text;