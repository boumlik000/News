import React from "react";
import "../styles/cardnews2.scss";
import { Link } from 'react-router-dom';
import {profileHome} from "./filteerdata/profilebox"
import ICONTAG from "./icontag";
function CARDNEWS2({ startIndex, endIndex }){
    const cardsToShow = profileHome.slice(startIndex, endIndex);
    
    return(
        <>
            {cardsToShow.map((item) => (
                <Link to={`/article/${item.id}`} key={item.id}>
                    <div className="cardnews_2 mt-4">
                        <div className="row no-gutters">
                        <div className="col-sm-4 p-0">
                            <img className="cardnews_2-img" src={item.imageUrl} alt="Suresh Dasari Card" />
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                            <h2 className="cardnews_2-title">{item.title}</h2>
                            <ICONTAG icon={item.icon} className="cardnews_2-logo" />
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </Link>
            ))}

        </>
    )
}
export default CARDNEWS2