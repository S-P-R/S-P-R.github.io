import { useContext } from 'react'
import { ColorSchemeContext } from '../contexts/ColorSchemeContext.tsx';
import '../styles/SkillsList.css'

/**
 * SkillsList
 * 
 * Displays a list of some of my software-engineering related skills
 *
 */
export default function SkillsList() {
    const { schemeName } = useContext(ColorSchemeContext);

    const languages = ["Python", "Typescript", "C", "C++", "OCaml"]
    const technologies = ["SQL", "MongoDB", "React", "Flask", "Terraform", "Docker", "Git"]

    return (
    <div>
        
        <p> Languages: {languages.map((language : string) => <span data-color-scheme={schemeName} 
                                                                   className='skill-tag' 
                                                                   key={language}> 
                                                                   {language}
                                                             </span>)} </p>
        
        <p> Technologies: {technologies.map((technology : string) => <span data-color-scheme={schemeName} 
                                                                           className='skill-tag' 
                                                                           key={technology}> 
                                                                           {technology}
                                                                     </span>)} </p>
    </div>
    )
}