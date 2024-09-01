import React from "react";
import "../App.css"; 
import star from "/images/Star 1-1.png"

export default function Card(props){
    let badge;
    if(props.openSlots===0){
        badge="SOLD OUT"
    }
    else if(props.location==="Online"){
        badge="Online";
    }
    else{
        badge=(props.location)
    }
    return(
        <div className="card">
            <div className="card-badge">{badge}</div>
            <img src={`/images/${props.image}`} className="card-photo" />
            <div className="card-stats">
            <img src={star} alt="Star" className="card-star" />
            <span>{props.stats.rating}</span>
            <span> ({props.stats.reviewCount}) • </span>
            <span>{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><strong>{props.price}</strong> / person</p>
       </div>
    )
}