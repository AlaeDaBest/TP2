import React from "react";
import CardLivre from "./CardLivre";
const ListeCardLivre=()=>{
    const Livre = [ 
        {"title": "1984","author": "George Orwell","publicationYear": 
        1949,"genre": "Dystopian","rating": 4.8}, 
        {"title": "To Kill a Mockingbird","author": "Harper Lee","publicationYear": 1960,"genre": "Classic","rating": 4.9}, 
        {"title": "The Great Gatsby","author": "F. Scott Fitzgerald","publicationYear": 1925,"genre": "Classic","rating": 4.4}, 
        {"title": "Pride and Prejudice","author": "Jane Austen","publicationYear": 
        1813,"genre": "Romance","rating": 4.7}, 
        {"title": "Moby-Dick","author": "Herman Melville","publicationYear": 
        1851,"genre": "Adventure","rating": 4.1}, 
        {"title": "War and Peace","author": "Leo Tolstoy","publicationYear": 
        1869,"genre": "Historical Fiction","rating": 4.5}, 
        {"title": "The Alchemist","author": "Paulo Coelho","publicationYear": 
        1988,"genre": "Philosophical Fiction","rating": 4.7} 
        ] 
    return(
        <div className="CardGlobal">
            <h1>Our Books</h1>
            {Livre.map((item,index)=>(
                <CardLivre key={index} title={item.title} author={item.author} publicationYear={item.publicationYear} genre={item.genre} rating={item.rating} />
            ))}
        </div>
    )
}
export default ListeCardLivre;