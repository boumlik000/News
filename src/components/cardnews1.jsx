import React from "react";
import "../styles/cardnews1.scss";
import { Link } from 'react-router-dom';
import {profileHome} from "./filteerdata/profilebox"
import ICONTAG from "./icontag";
function CARDNEWS1({ startIndex, endIndex }){
    const cardsToShow = profileHome.slice(startIndex, endIndex);
    return(
        <>          
            {cardsToShow.map((x) => (
                 <Link to={`/article/${x.id}`} key={x.id}>
                    <div className="cardnews_1 mt-4" key={x.id}>
                        <div className="row no-gutters">
                            <div className="col-md-3 p-0 d-flex align-items-center">
                                <img className="cardnews_1-img " src={x.imageUrl} alt="Suresh Dasari Card" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h1 className="cardnews_1-title title-big">{x.title}</h1>
                                    <p className="cardnews_1-deescription">{x.description}</p>
                                </div>
                                <ICONTAG icon={x.icon} className="cardnews_1-logo" />
                                <div className="cardnews_1-info">
                                    <span className="cardnews_1-Date">12/12/20022</span>
                                    <Link to={`/article/${x.id}`} key={x.id}>
                                        <h3 className="cardnews_1-Readmore" >raed more</h3>
                                    </Link>
                                </div>
                                <div className="cardnews_1-filter"></div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </>
    )
}
export default CARDNEWS1