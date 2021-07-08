import React from 'react'
import {Link} from "react-router-dom";

function Button1({link, text, onClick, type}) {
    return (
        <>
        <Link to={link} style={{textDecoration:"none"}}>
            <button type={type} className="button1Wrapper" onClick={onClick}>
                {text}
            </button>
        </Link>
        </>
    )
}

export default Button1
