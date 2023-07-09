import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                    <li>
                        <Link>
                           Home 
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}