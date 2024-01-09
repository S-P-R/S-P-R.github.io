import '../styles/Hero.css'
import githubLogoWhite from '../assets/github-mark-white.png'
import linkedinLogoWhite from '../assets/linkedin-white.png'
import emailWhite from '../assets/email-white.png'

/**
 * HeroSection
 * 
 * Displays name and links to my github, linkedin and email
 *
 */
export default function HeroSection (){
    return (
        <div className='hero-text'>
            <h1 className='name'> <span className='first-name'>Sean</span> <span className='last-name'>Reilly</span> </h1>
            <div className='external-links'>
                <a href="https://github.com/S-P-R" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogoWhite} alt="Github Logo" style={{ width: 50, height: 50 }} />
                </a>
                <a href="https://www.linkedin.com/in/sean-reilly-301176225/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogoWhite} alt="Linkedin Logo" style={{ width: 50, height: 50 }} />
                </a>
                <a href="mailto:Sean.Reilly@tufts.edu" target="_blank" rel="noopener noreferrer">
                    <img src={emailWhite} alt="Email Logo" style={{ width: 50, height: 50 }} />
                </a>
            </div>
        </div>
    )
}