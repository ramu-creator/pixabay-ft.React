import React from "react";
import {useNavigate} from "react-router-dom" 
function NavBar(){
    const navigate = useNavigate();
    return(
        <div id="nav-container">
            <h1 id="logo">PIXABAY</h1>
            <ul id="nav-cont">
                <li onClick={()=>navigate("/login")}>Login</li>
                <li onClick={()=>navigate("/register")}>Register</li>
                <li><i className="fa-solid fa-bars"></i></li>
            </ul>
        </div>
    )
}
export default NavBar;