import React from "react";
import { Link } from "react-router-dom";

function Header(){
    
    //displaying the header
    return(
        <div class="navs">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/add-animal'>Add animal</Link>
            <Link className="nav-link" to='/contacts'>Contacts</Link>
            <Link className="nav-link" to='/about'>About Us</Link> 
        </div>
    )
}

export default Header;