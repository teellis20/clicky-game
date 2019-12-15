import React from "react";
import "./style.css";

function CastCard(props) {
    return(
        <div className="card">
            <div className="img-container" onClick={() => props.markLast(props)}>
                <img id={props.name} alt={props.name} src={props.photo} />
            </div>
        </div>
    );
}

export default CastCard;