import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    

    return (
        <div className='footer'>
            <div className='socialMedia'>
            <WhatsAppIcon onClick={() => window.open('https://wa.me/23481294220', '_blank')} />
             <EmailIcon onClick={() => window.open("mailto:mueezsanwo@gmail.com", '_blank')}/>
             <GithubIcon onClick={() => window.open('https://github.com/mueezsanwo', '_blank')} />
             <LinkedInIcon  onClick={() => window.open("https://www.linkedin.com/in/mueez-sanwo-5a1918266/", '_blank')}/> 
            </div>
            <p> &copy; 2022 MueezPortfolio.com</p>
        </div>
    )
}

export default Footer;
