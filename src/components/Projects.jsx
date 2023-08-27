 import React from "react";
 import './Projects.css';

export default function Projects(){
    return (
        <div className="container">
            <div className="pitem">
                <h1>TypeRiders</h1>
                <p>A MERN-based project with Single Player and Multiplayer modes. Users
practice typing with custom difficulty levels, and data tracking shows an average accuracy of X per., impressive
typing speed Y WPM, and top Z percentile rank</p>
    <div className="icon2">
    <li className="list"><a href="https://github.com/sabhinav9889/Typeriders"><i className="fa-brands fa-github fa-2x"></i></a></li>
    </div>
            </div>
            <div className="pitem">
                <h1>URL Shortner with JWT Authentication</h1>   
                <p>This application enables users to easily shorten long URLs into concise, shareable links. With secure JWT
                authentication, user data remains protected. Experience an efficient and secure solution for managing and sharing
                 URLs.</p>
                 <div className="icon1">
                 <li className="list"><a href="https://github.com/sabhinav9889/JWT_Authentication-"><i className="fa-brands fa-github fa-2x"></i></a></li>
                 </div>
                
            </div>
            <div className="pitem">
                <h1>Tic Tac Toe</h1>
                <p>Designed and developed a responsive, two-player Tic Tac Toe web app using React. Implemented real-time results, ensuring an interactive user experience, and highlighting strong problem-solving abilities.</p>
                <div className="icon3">
                <li className="list"><a href="https://github.com/sabhinav9889/tictactoe-React.js-Responsive-"><i className="fa-brands fa-github fa-2x"></i></a></li>
                </div>
            </div>
            <div className="pitem">
                <h1>portfolio</h1>
                <p>A personal website/portfolio of Abhinav Singh. Built using react.js, three.js, html and css</p>
                <div className="icon4">
                <li className="list"><a href="https://github.com/sabhinav9889/-Portfolio"><i className="fa-brands fa-github fa-2x"></i></a></li>
                </div>
            </div>
        </div>
    )
}