import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header(){
   
    }
    //displaying the header
    return(
        <div class="topnav">
            {/* creating the navigation links */}
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/addbook'>Add Book</Link>
            <Link className="nav-link" to='/contact us'>Contact Us</Link>
            {/* creating button that will sort the books by category */}
            <button className="buttonTitle" onClick={sortByTitle} style={{float: 'right'}}><i class="fa fa-sort"></i></button>
            <div class="topnav-right">            
            </div>  
        </div>
    )


export default Header