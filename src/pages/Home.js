import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Resume from "../assets/resume.pdf";
import Projects from './Projects';
import CV from "../assets/CV.pdf"


function Home() {
    

    return (
        <div className='home'>
           <div className='about'>
             <h2>Hi, My Name is Hawawu Titilayo Adeshola</h2>
             <div className='prompt'>
             <p>A Data Analyst with a passion for learning and creating. </p>
             <WhatsAppIcon onClick={() => window.open('https://wa.me/2348033761423', '_blank')} />
             <EmailIcon onClick={() => window.open("mailto:hawawutitilayo1997@gmail.com", '_blank')}/>
             {/* <GithubIcon onClick={() => window.open('https://github.com/mueezsanwo', '_blank')} /> */}
             </div>
             <a href={CV} download><button>Resume</button></a>
           </div> 
           <div className='skills'>
           <h2>About Me</h2>
            <p className='aboutp'>I am a data analyst with a proven ability to collaborate effectively with senior Data analyst while spending extra time to be mentored .I enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary.With a passion for both personal growth and for data analysis development,I attended Innkeeper and New Horizon data analysis boot camp to new skill such as Excel,Powerbi,Tabluea,SQL.I am ready to apply my passion for data analysis to a talented analyst team to develop quality solutions.</p>
       </div>
       <h2 className='skills'>Projects</h2>
       <Projects />
    </div>
    )
}

export default Home;
