import '../styles/Hero.css'
import { ColorSchemeContext } from '../contexts/ColorSchemeContext.tsx';
import { useContext } from 'react';

import githubLogoWhite from '../assets/github-mark-white.png'
import githubLogoBlack from '../assets/github-mark-black.png'
import linkedinLogoWhite from '../assets/linkedin-white.png'
import linkedinLogoBlack from '../assets/linkedin-black.png'
import emailWhite from '../assets/email-white.png'
import emailBlack from '../assets/email-black.png'


/**
 * HeroSection
 * 
 * Displays name and links to my github, linkedin and email
 *
 */
export default function HeroSection (){
    const { schemeName } = useContext(ColorSchemeContext);
    const githubLogo = schemeName === 'light' ? githubLogoBlack : githubLogoWhite;
    const linkedinLogo = schemeName === 'light' ? linkedinLogoBlack : linkedinLogoWhite;
    const emailLogo = schemeName === 'light' ? emailBlack : emailWhite;

    return (
        <div>
            <h1 className='name'> <span className='first-name'>Sean</span> <span className='last-name'>Reilly</span> </h1>
            <div className='external-links'>
                <a href="https://github.com/S-P-R" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={githubLogo} alt="Github Logo" />
                </a>
                <a href="https://www.linkedin.com/in/sean-reilly-301176225/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={linkedinLogo} alt="Linkedin Logo"  />
                </a>
                <a href="mailto:sean-p-reilly@outlook.com" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={emailLogo} alt="Email Logo"  />
                </a>
            </div>
        </div>
    )
}