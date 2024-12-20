import React from "react";
const Select=({setSelectedGenre})=>{
    return(
        <div className="Select">
            <h4>Filter By Genre :</h4>
            <select onChange={(e)=>setSelectedGenre(e.target.value)}>
                <option value="">Tous</option>
                <option value="Classic">Classic</option>
                <option value="Romance">Romance</option>
                <option value="Adventure">Adventure</option>
            </select>
        </div>
    )
}
export default Select;