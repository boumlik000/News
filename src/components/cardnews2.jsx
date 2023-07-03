import React from "react";
import "../styles/cardnews2.scss";
import {profileHome} from "./filteerdata/profilebox"
import ICONTAG from "./icontag";
function CARDNEWS2(props){
    return(
        <>
            {profileHome.map((item) => (
                <a href="/article" key={item.id}>
                    <div className="cardnews_2 mt-4" >
                        <div className="row no-gutters">
                            <div className="col-sm-4 p-0">
                                <img className="cardnews_2-img " src={item.imageUrl} alt="Suresh Dasari Card" />
                            </div>
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="cardnews_2-title">{item.title}</h5>
                                    <ICONTAG icon={item.icon} className="cardnews_2-logo" />
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            ))}

        </>
    )
}
export default CARDNEWS2