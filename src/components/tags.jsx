import React from "react";
import "../styles/tag.scss";
function TAG(props){
    return(
        <>
            <span className="tag">
                {props.name}    
            </span>

        </>
    )
}
export default TAG