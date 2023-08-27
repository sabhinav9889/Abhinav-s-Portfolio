import React from "react";
// import Video  from "./Video";
import './Home.css';

export default function Home(){
    return (
        <div className="homediv">
          {/* <div className="vdo">
           <Video/>
          </div> */}
         <div className="content"> 
               <div className="hd item"><p>Abhinav Singh</p></div>
               <p className="par item">Passionate about changing the world with tech...</p>
               <ul className="item">
                   <li className="lii"><a href="https://github.com/sabhinav9889"><i class="fa-brands fa-github fa-2x"></i></a></li>
                   <li className="lii"><a href="https://www.linkedin.com/in/abhinav-singh-50aa74200/"><i class="fa-brands fa-linkedin fa-2x"></i></a></li>
                  <li className="lii"><a href="https://www.instagram.com/abhi_9nav/"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
                  <li className="lii"><a href="https://twitter.com/sabhi9nav"><i class="fa-brands fa-twitter fa-2x"></i></a></li>
                  <li className="lii"><a href="https://www.facebook.com/profile.php?id=100008865942179"><i class="fa-brands fa-facebook fa-2x" ></i></a></li>
               </ul>
               <a href="https://drive.google.com/file/d/1uMkQUw3XsqsKiTlhPD0zAwx49qSiN-Ty/view?usp=sharing"><button className="par1 item">More about me</button></a>
        </div>
        </div>
    )
}