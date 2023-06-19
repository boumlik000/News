import React from "react";
import "../styles/cardnews2.scss";
import {profileHome} from "./filteerdata/profilebox"
function CARDNEWS2(props){
    return(
        <>
           <h1>cardnews2</h1>
            {profileHome.map((item) => (
                <div className="cardnews_2 card  mt-4" key={item.id}>
                <div className="row no-gutters">
                    <div className="col-sm-4 p-0">
                        <img className="cardnews_2-img " src={item.imageUrl} alt="Suresh Dasari Card" />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="cardnews_2-title">{item.title}</h5>
                            <span className="cardnews_2-logo">{item.icon}</span>
                        </div>
                    </div>
                </div>
            </div>
            ))}

        </>
    )
}
export default CARDNEWS2