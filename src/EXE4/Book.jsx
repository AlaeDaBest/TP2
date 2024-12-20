import React from "react";
function Book({book}){
    return(
        <div className="BookSectionGlobal Card">
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <h5>{book.publivationYear}</h5>
            <h5>{book.genre}</h5>
            <h5>{book.rating}</h5>
        </div>
    )
}
export default Book;