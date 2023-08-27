import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export default function Nav(){
    let nm = "<Abhinav/>";
    const [drop, setDrop] = useState(0);
    function myfunc(){
      setDrop(drop^1);
    }
    return(
        <>
        <div className="mobileNav">
        {(drop)?<i className="fa-solid fa-xmark fa-2x"onClick={myfunc}></i>:<i className="fa-solid fa-bars fa-2x" onClick={myfunc}></i>}
          {(drop)?
          <ul className="lism">
            <div className="lim"><li ><Link className="lim" to="/">{nm}</Link></li></div>
            <div className="lim"><li ><Link className="lim" to="/projects">Projects</Link></li></div>
            <div className="lim"><li><Link  className="lim" to="https://drive.google.com/file/d/1uMkQUw3XsqsKiTlhPD0zAwx49qSiN-Ty/view?usp=sharing">Resume</Link></li></div>
            <div className="lim"><li><Link className="lim" to="/about">About</Link></li></div>
            <div className="lim"><li><Link className="lim" to="/skills">Skills</Link></li></div>
          </ul>:<></>}
        </div>
        <div className="navbar">
            <ul>
                <li className="lli" ><Link className="lli" to="/">{nm}</Link></li>
                <li className="lli"><Link className="lli" to="/projects">Projects</Link></li>
                <li className="lli"><Link className="lli" to="https://drive.google.com/file/d/1uMkQUw3XsqsKiTlhPD0zAwx49qSiN-Ty/view?usp=sharing">Resume</Link></li>
                <li className="lli"><Link className="lli"to="/about">About</Link></li>
                <li className="lli"><Link className="lli" to="/skills">Skills</Link></li>
            </ul>
        </div>
        </>
    )
}