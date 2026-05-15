import React from 'react';
import Video from './video.mp4'

const BgVideo =({className=""})=>{
    return(
        <div className= {className}>
            <video
                className="w-100 h-100"
                style={{ objectFit: 'cover',pointerEvents: 'none',objectPosition:'center center' }}
                autoPlay
                loop
                muted
                src={Video}
            />  
        </div>
    )
}

export default BgVideo;