import React from 'react';
import { useNavigate } from 'react-router-dom';
import CV from "../assets/CV.pdf"; 

function ProjectItem({ image, name, id, git, data, skills}) {
    const navigate = useNavigate();

    return (
        <div
         className='projectItem'
         onClick={() => {navigate("/projects")}}
          
          >
           <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
           <h1> {name} </h1>
           <p>Skills: {skills}</p>
            <div className='pbuttons'>
             <a href={git} ><button className='button-13'>View GitHub</button></a>
             {/* <a href={CV} download ><button className='button-14'>Live Demo</button></a> */}
           </div>
        </div>
    )
}

export default ProjectItem;
