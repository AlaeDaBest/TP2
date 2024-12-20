import React from "react";
const TableauLivre=()=>{
    const Livre = [ 
        {"title": "1984","author": "George Orwell","publicationYear": 1949,"genre": "Dystopian","rating": 4.8}, 
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
        <section className="TableSection">
            <h2>Books Table:(<i>Question2</i>)</h2>
            <div className="Tab">
                <table rules="all" border="1px">
                    <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publication Year</th>
                            <th>Genre</th>
                            <th>Rating</th>
                        </tr>
                    {Livre.map((item,index)=>(
                        <tr key={index} >
                            <td>{item.title}</td>
                            <td>{item.author} </td>
                            <td>{item.publicationYear} </td>
                            <td>{item.genre} </td>
                            <td>{item.rating} </td>
                        </tr>
                    ))}
                </table>
            </div>
        </section>
    )
}
export default TableauLivre;