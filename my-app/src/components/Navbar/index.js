import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-primary">
                <li>Clicky Game</li>
                <li>{props.correctly}</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </nav>
    )
}

export default Navbar;