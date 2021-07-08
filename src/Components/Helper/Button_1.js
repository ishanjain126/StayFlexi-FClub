import React from 'react'
import {Link} from "react-router-dom";

function Button_1({link, text, onClick}) {
    return (
        <>
        <Link to={link} style={{textDecoration:"none"}}>
            <button className="button1Wrapper" onClick={onClick}>
                {text}
            </button>
        </Link>
        </>
    )
}

export default Button_1
