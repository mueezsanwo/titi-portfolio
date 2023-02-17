import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import CV from "../assets/CV.pdf";


function Home() {
    

    return (
        <div className='home'>
           <div className='about'>
             <h2>Hi, My Name is Mueez</h2>
             <div className='prompt'>
             <p>A frontend web developer with a passion for learning and creating. </p>
             <WhatsAppIcon onClick={() => window.open('https://wa.me/23481294220', '_blank')} />
             <EmailIcon onClick={() => window.open("mailto:mueezsanwo@gmail.com", '_blank')}/>
             <GithubIcon onClick={() => window.open('https://github.com/mueezsanwo', '_blank')} />
             </div>
             <a href={CV} download><button>Resume</button></a>
           </div> 
           <div className='skills'>
           <h2>About Me</h2>
            <p className='aboutp'> I am a front-end web developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. I enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and for software development, I attended Stutern coding bootcamp to learn new languages while sharpening existing skills.
               I am ready to apply my passion for coding to a talented engineering team to develop quality solutions.</p>
           <h2> Skills</h2>
        <ol className="list">
          <li className="item">
            <span>
              ReactJS,Redux, HTML, CSS, NPM, MaterialUI, TailwindCSS, NodeJS, GitHub
            </span>
          </li>
          <li className="item">
            <span>JavaScript.</span>
          </li>
        </ol>
       </div>
    </div>
    )
}

export default Home;
