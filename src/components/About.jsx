import React from "react";
import sourcei from '../assets/Abhinav_Singh(Profile).jpg';
import './About.css';

export default function About(){
    return(
        <div className="aboutdiv">
            <div className="about">About Me</div>
            <div className="left">
                <img src={sourcei} alt="Abhinav" />
            </div>
            <div className="right">
                <div className="intro1">My name is Abhinav Singh. I'm a 2024 graduate from Galgotias College at Greater Noida with a degree in Information Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. I like to particapte it coding contests and I do projects in my free time.</div>
                <div><button className="butt" type="button">Resume</button></div>
            </div>
        </div>
    )
}