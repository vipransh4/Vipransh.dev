import React from "react";
import './link.css';

const Links =({project})=>{
    const linking={
        Riddlix:'https://riddlix-a96p.onrender.com/',
        'Face-detector':'https://face-recognition-es4t.onrender.com',
        'Color-shift':'https://github.com/vipransh4/Background-Genrator',
        Robofriend:'https://vipransh4.github.io/Robotfriends/',
        'Basic-HTML-page':'https://github.com/vipransh4/basic-html-page',
        'Basic-landing-page':'https://vipransh4.github.io/libarious/'
    }
    const github={
        Riddlix:'https://github.com/godfather-creator/Riddlix',
        'Face-detector':'https://github.com/vipransh4/faceRecogition',
        'Color-shift':'https://github.com/vipransh4/Background-Genrator',
        Robofriend:'https://github.com/vipransh4/Robotfriends',
        'Basic-HTML-page':'https://github.com/vipransh4/basic-html-page',
        'Basic-landing-page':'https://github.com/vipransh4/libarious'
    }
    return(
        <div className="container-links">
            <a className="box link" href={linking[project]} target='_blank' rel="noopener noreferrer">{project}</a>
            <a className="box link" href={github[project]} target='_blank' rel="noopener noreferrer">github link</a>
        </div>
    )
}

export default Links;