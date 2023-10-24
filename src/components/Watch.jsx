import React from "react";

export const Watch=({title,category,price,desc})=>{
    return(
        
        <div className="sub">
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h3>{price}</h3>
            <h5>{desc}</h5>

        </div>
    )
}