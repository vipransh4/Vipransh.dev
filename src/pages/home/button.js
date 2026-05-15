import React from "react";

const Buttons =({setRoute})=>{
    return (
        <div className="fixed bottom-0 w-100 flex justify-center mb4">
        <div className="box mr4 grow">
          <p onClick={()=>setRoute('projects')}>PROJECTS</p>
        </div>
        <div className="box grow">
          <p onClick={()=>setRoute('resume')}>RESUME</p>
        </div>
      </div>
    )
};

export default Buttons;