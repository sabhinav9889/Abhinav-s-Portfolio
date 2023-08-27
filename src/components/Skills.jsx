import React from "react";
import './Skills.css';

export default function Skills(){
    return(
        <div class="cntainer">
            <h1>Technical Skills</h1>
            <div class="bar learning" data-skill="C/C++"></div>
            <div class="bar back basic" data-skill="Data Structures"></div>
            <div class="bar back intermediate" data-skill="Algorithms"></div>
            <div class="bar front advanced" data-skill="JavaScript"></div>
            <div class="bar front expert" data-skill="HTML/CSS"></div>
            <div class="bar front expert" data-skill="React.Js"></div>
            <div class="bar front intermediate" data-skill="Node.Js"></div>
            <div class="bar front expert" data-skill="Express.Js"></div>
            <div class="bar front intermediate" data-skill="MongoDB"></div>   
            <div class="bar front expert" data-skill="MySQL"></div>
        </div>
    )
}