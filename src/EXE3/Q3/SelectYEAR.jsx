import React from "react";
const SelectSortBy=({setSortedType})=>{
    return(
        <div className="Select">
            <h4>Sort By :</h4>
            <select onChange={(e)=>setSortedType(e.target.value)}>
                <option value="">Tous</option>
                <option value="YearAsc">Year Asc</option>
                <option value="YearDesc">Year Desc</option>
                <option value="RatingAsc">Rating Asc</option>
                <option value="RatingDesc">Rating Desc</option>
            </select>
        </div>
    )
}
export default SelectSortBy;