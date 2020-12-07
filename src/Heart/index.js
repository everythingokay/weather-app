import React, { useState } from "react";
import "./images/black-heart.svg";
import "./images/red-heart.svg";

const Heart = () => {

    const [faved, setFaved] = useState(false);

    let imgsrc;
    faved ? imgsrc = "./images/red-heart.svg" : imgsrc = "./images/black-heart.svg";

    return (
            <button className="heart-button" onClick={() => setFaved(!faved)}><img className="heart" src={imgsrc} /></button>
    )
}

export default Heart;