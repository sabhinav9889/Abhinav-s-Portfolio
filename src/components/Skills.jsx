import React from "react";
import './Skills.css';

export default function Skills(){
    return(
        <div className="cntainer">
            <h1>Technical Skills</h1>
            <div className="bar learning" data-skill="C/C++"></div>
            <div className="bar back basic" data-skill="Data Structures"></div>
            <div className="bar back intermediate" data-skill="Algorithms"></div>
            <div className="bar front advanced" data-skill="JavaScript"></div>
            <div className="bar front expert" data-skill="HTML/CSS"></div>
            <div className="bar front expert" data-skill="React.Js"></div>
            <div className="bar front intermediate" data-skill="Node.Js"></div>
            <div className="bar front expert" data-skill="Express.Js"></div>
            <div className="bar front intermediate" data-skill="MongoDB"></div>   
            <div className="bar front expert" data-skill="MySQL"></div>
        </div>
    )
}