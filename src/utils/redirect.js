import React from "react";
import {Redirect} from "react-router-dom"


const mRedirect = (props) => {
    console.log("Calls")
    return <>
        <Redirect to={props.to}/>
    </>
}

const redirect = (path) => {
    console.log({path});
    return <mRedirect to={path}/>
}

export default redirect;