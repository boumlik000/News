import React from "react";
import "../styles/cardnews1.scss";
import { Link } from 'react-router-dom';
import {profileHome} from "./filteerdata/profilebox"
import ICONTAG from "./icontag";
function CARDNEWS1(props){
    return(
        <>
            {profileHome.map((x) => (
                <Link to={`/article/${x.id}`} key={x.id}>
                    <div className="cardnews_1 card  mt-4" key={x.id}>
                        <div className="row no-gutters">
                            <div className="col-md-2 p-0 d-flex align-items-center">
                                <img className="cardnews_1-img " src={x.imageUrl} alt="Suresh Dasari Card" />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="cardnews_1-title">{x.title}</h5>
                                    <p className="cardnews_1-deescription">{x.description}</p>
                                    <ICONTAG icon={x.icon} className="cardnews_1-logo" />
                                    <span className="cardnews_1-Date">12/12/20022</span>
                                    <a href="/" className="cardnews_1-Readmore" >raed more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </>
    )
}
export default CARDNEWS1