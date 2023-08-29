import React from "react";
import './Skills.css';

export default function Skills(){
    return(
        <div className="cntainer">
            <h1>Technical Skills</h1>
            <i class="fa-sharp fa-solid fa-c"></i><span>5</span><i className="percentage">80</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar learning cpp" data-skill="C / C++"></div>
            <i class="fa-solid fa-code"></i><span>5</span><i className="percentage">90</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar back basic" data-skill="Data Structures and Algorithms"></div>
            <i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i><span>5</span><i className="percentage">80</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar front expert" data-skill="HTML / CSS"></div>
            <i class="fa-brands fa-square-js"></i><span>5</span><i className="percentage">75</i><span>5</span><i class="fa-solid fa-percent"></i><div className="bar front advanced js" data-skill="JavaScript"></div>
            <i class="fa-brands fa-react"></i><span>5</span><i className="percentage">65</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar front expert sql" data-skill="React Js"></div>
            <i class="fa-brands fa-node"></i><span>5</span><i className="percentage">80</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar front expert" data-skill="Node Js / Express Js"></div>
            <i class="fa-solid fa-database"></i><span>5</span><i className="percentage">80</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar front expert" data-skill="MongoDB"></div>   
            <i class="fa-solid fa-database"></i><span>5</span><i className="percentage">65</i><span>5</span><i class="fa-solid fa-percent"></i>
            <div className="bar front advanced sql" data-skill="MySQL"></div>
        </div>
    )
}