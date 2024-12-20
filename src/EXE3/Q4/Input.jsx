import React, { useState } from "react";
const Input=({setSearchTerm})=>{
    return(
        <div className="Select">
            <h4>Search :</h4>
            <input type="text" name="" id="" onChange={(e)=>setSearchTerm(e.target.value)} />
        </div>
    )
}
export default Input;