import React from "react";
// import Video  from "./Video";
import './Home.css';
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="homediv">
          {/* <div className="vdo">
           <Video/>
          </div> */}
         <div className="content"> 
               <div className="hd item"><p>Abhinav Singh</p></div>
               <p className="par item">Developer  |  Competitive Programmer <span> | Tech Enthusiast</span></p>
               <ul className="item">
                   <li className="lii"><a href="https://github.com/sabhinav9889"><i className="fa-brands fa-github fa-2x"></i></a></li>
                   <li className="lii"><a href="https://www.linkedin.com/in/abhinav-singh-50aa74200/"><i className="fa-brands fa-linkedin fa-2x"></i></a></li>
                  <li className="lii"><a href="https://www.instagram.com/abhi_9nav/"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
                  <li className="lii"><a href="https://twitter.com/sabhi9nav"><i className="fa-brands fa-twitter fa-2x"></i></a></li>
                  <li className="lii"><a href="https://leetcode.com/CamLot_9889e/"><i className="fa-sharp fa-solid fa-code fa-2x"></i></a></li>
               </ul>
               <Link to="/about"><button className="par1 item">More about me</button></Link>
        </div>
        </div>
    )
}