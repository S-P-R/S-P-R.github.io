import '../styles/Project.css'

type ProjectProps = Readonly<{
    name: string;
    description: string;
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
 * - `shouldDim`    -  whether project should be dimmed or not (when other project's being moused over)
 * - 'onMouseEnter' - function to call when mouse enters component area
 * - 'onMouseLeave' - funtion to call when mouse leaves component area
 */
export default function Project ({name, description, shouldDim, onMouseEnter, onMouseLeave} : ProjectProps) {
    const imageURL = new URL(`../assets/${name}.png`, import.meta.url).href
    return (
            <div className={`project ${shouldDim ? 'dimmed' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <h3 className="project-name"> {name} </h3>
                <div className='project-content'>
                    <p> {description} </p>
                    <div className='image-container'>
                        <img className="project-image" src={imageURL} alt="Project Screenshot" />
                    </div>
                </div>
            </div>
    )
}