import { useState } from "react"
import { Link } from "react-router-dom"
// import "./forStyling/Personal.css";
export function Header(){

    return( 
            <>
                <header className="header">
                    <nav>
                        <h1>Chris </h1>
                        <div className="navigation">
                            <ul>
                                <li>
                                    <Link className="Home" to="/" >Home</Link>
                                </li>

                                <li>
                                    <Link className="Project" to="/Project">Projects</Link>

                                </li>

                                <li>
                                    <Link className="Contact" to="/Contact">Contact</Link> 
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                </header>
            </> 
    )
}