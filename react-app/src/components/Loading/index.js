import React from "react";
import ReactLoading from "react-loading";
// import "./LoadingScreen.css"
 
export default function Loading() {
    return (
        <div>
            <ReactLoading 
            className="hello"
            type="spin" 
            color="blue"
            height={250} 
            width={250} />
        </div>
    );
}