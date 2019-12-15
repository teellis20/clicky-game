import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>Clicky Game</li>
                <li>Click an image to begin!</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
}

export default Navbar;