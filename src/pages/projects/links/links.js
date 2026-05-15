import React from "react";
import './link.css';

const Links =({project})=>{
    const linking={
        Riddlix:'https://riddlix-a96p.onrender.com/',
        Face_Detector:'https://face-recognition-es4t.onrender.com',
        Background_generator:'https://github.com/vipransh4/Background-Genrator',
        robot:'https://vipransh4.github.io/Robotfriends/',
        html:'https://github.com/vipransh4/basic-html-page',
        startup:'https://vipransh4.github.io/libarious/'
    }
    const github={
        Riddlix:'https://github.com/godfather-creator/Riddlix',
        Face_Detector:'https://github.com/vipransh4/faceRecogition',
        Background_generator:'https://github.com/vipransh4/Background-Genrator',
        robot:'https://github.com/vipransh4/Robotfriends',
        html:'https://github.com/vipransh4/basic-html-page',
        startup:'https://github.com/vipransh4/libarious'
    }
    return(
        <div className="container-links">
            <a className="box link" href={linking[project]} target='_blank' rel="noopener noreferrer">{project}</a>
            <a className="box link" href={github[project]} target='_blank' rel="noopener noreferrer">github link</a>
        </div>
    )
}

export default Links;