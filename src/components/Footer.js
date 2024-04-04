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
            <WhatsAppIcon onClick={() => window.open('https://wa.me/2348033761423', '_blank')} />
             <EmailIcon onClick={() => window.open("mailto:Hawawutitilayo1997@gmail.com", '_blank')}/>
             {/* <GithubIcon onClick={() => window.open('https://github.com/mueezsanwo', '_blank')} /> */}
             <LinkedInIcon  onClick={() => window.open("https://www.linkedin.com/in/adeshola-hawawu-b70a0526b", '_blank')}/> 
            </div>
            <p> &copy; 2024 Portfolio.com</p>
        </div>
    )
}

export default Footer;
