import '../styles/ColorSchemeToggle.css'


import { ColorSchemeContext } from '../contexts/ColorSchemeContext.tsx';
import { useContext } from 'react';

/**
 * ColorSchemeToggle
 * 
 * Allows user to override system preference and switch between light mode
 * and dark mode
 *
 */
export default function ColorSchemeToggle (){
    const { toggle } = useContext(ColorSchemeContext);
    return (
        <button className="color-toggle" onClick={toggle}></button>
    )
}