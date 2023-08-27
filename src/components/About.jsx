import React from "react";
import sourcei from '../assets/Abhinav_Singh(Profile).jpg';
import './About.css';

export default function About(){
    function reloc(){
        window.location.href=('https://drive.google.com/file/d/1uMkQUw3XsqsKiTlhPD0zAwx49qSiN-Ty/view?usp=sharing');
    }
    return(
        <div className="mainAbout">
        <div className="aboutdiv">
            <div className="left">
                <img src={sourcei} alt="Abhinav" />
            </div>
            <div className="right">
                <p className="about">About Me</p>
                <div className="intro1">My name is Abhinav Singh. I'm a 2024 graduate from Galgotias College at Greater Noida with a degree in Information Technology. I'm most passionate about programming and giving back to the community, and my goal is to pursue this passion within the field of software engineering. I do projects on MERN stack and I like to particapte in coding contests on weekends.</div>
                <div className="buttdiv"><button className="butt" type="button" onClick={reloc}>Resume</button></div>
            </div>
        </div>
        </div>
    )
}