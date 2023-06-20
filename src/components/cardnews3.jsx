import React from "react";
import "../styles/cardnews3.scss";
import {profileHome} from "./filteerdata/profilebox"
import ICONTAG from "./icontag";
function CARDNEWS3(props){
    return(
        <>
           <h1>cardnews3</h1>
            {profileHome.map((x) => (
                <div className="cardnews_3 card  mt-4" key={x.id}>
                <div className="row no-gutters">
                    <div className=" card-top p-0 d-flex align-items-center ">
                        <img className="cardnews_3-img object-fit-cover" src={x.imageUrl} alt="Suresh Dasari Card" />
                        <div className="card-overlay"></div>
                        <ICONTAG icon={x.icon} className="cardnews_3-logo" />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="cardnews_3-title pb-2">{x.title}</h5>
                        <span className="cardnews_3-Date">12/12/20022</span>
                    </div>
                    
                </div>
            </div>
            ))}

        </>
    )
}
export default CARDNEWS3