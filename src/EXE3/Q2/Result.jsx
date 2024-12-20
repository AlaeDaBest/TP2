import React from "react";
import CardLivre from "../../EXE2/CardLivre";
const Result=(props)=>{
    console.log(props.result)
    return(
        <div className="CardGlobal">
            {props.result.map((item,index)=>(
                <CardLivre key={index} title={item.title} author={item.author} publicationYear={item.publicationYear} genre={item.genre} rating={item.rating} />
            ))}
        </div>
    )
}
export default Result;