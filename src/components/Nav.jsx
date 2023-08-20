import React from "react";
import './Nav.css';

export default function Nav(){
    let nm = "<Abhinav/>";
    return(
        <div className="navbar">
            <ul>
                <li>{nm}</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>About</li>
                <li>Skills</li>
            </ul>
        </div>
    )
}