import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/tag.scss";
function TAG(props){
    const navigate  = useNavigate();

    const handleClick = () => {
        navigate(`/news?category=${props.categorie}`, { replace: true });
      };
    return(
        <>
           <a href="newsPage" className="tag" onClick={handleClick}>
                {props.categorie}
            </a>

        </>
    )
}
export default TAG