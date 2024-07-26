import '../styles/Project.css'
import { ColorSchemeContext } from '../contexts/ColorSchemeContext.tsx';
import { useContext } from 'react';


type ProjectProps = Readonly<{
    name: string;
    description: string;
    link: string;
    shouldDim: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}>;

/**
 * Profile
 * 
 * Displays info pertaining to a single programming project
 * 
 * Props:
 * - `name`         - name of the project
 * - `description`  - description of the project
 * - `link`         - A link to the deployed project
 * - `shouldDim`    -  whether project should be dimmed or not (when other project's being moused over)
 * - 'onMouseEnter' - function to call when mouse enters component area
 * - 'onMouseLeave' - funtion to call when mouse leaves component area
 */
export default function Project ({name, description, link, shouldDim, onMouseEnter, onMouseLeave} : ProjectProps) {
    const { schemeName } = useContext(ColorSchemeContext);

    const imageURL = new URL(`../assets/${name}.png`, import.meta.url).href
    return (
        <a href={link} target="_blank" data-color-scheme={schemeName} className={`project ${shouldDim ? 'dimmed' : ''}`} 
           onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h3 className="project-name"> {name} </h3>
            <div className='project-content'>
                <p> {description} </p>
                <div className='image-container'>
                    <img className="project-image" src={imageURL} alt="Project Screenshot" />
                </div>
            </div>
        </a>
    )
}