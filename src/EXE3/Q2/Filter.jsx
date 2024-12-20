import React, { useState } from "react";
import Select from "./Select";
import Result from "./Result";
import SelectSortBy from "../Q3/SelectYEAR";
import Input from "../Q4/Input";
import Form from "../../EXE4/form";
const Livre = [
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4 },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7 },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1 },
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5 },
  { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Philosophical Fiction", rating: 4.7 },
];
function Filter() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm,setSearchTerm]=useState("")
  let filteredBooks=Livre.filter((item)=>((selectedGenre ? item.genre === selectedGenre : true)&&(searchTerm ? item.title.toLowerCase().includes(searchTerm.toLowerCase()):true)));
  //Sort db
  const [sortedType,setSortedType]=useState("")
  var getSortedBooks=()=>{
      let sortedResult=filteredBooks;
      if(sortedType=="YearAsc"){
        sortedResult=sortedResult.sort((a,b) => a.publicationYear -b.publicationYear)
      }
      else if(sortedType=="YearDesc"){
        sortedResult=sortedResult.sort((a,b)=> b.publicationYear - a.publicationYear)
      }
      else if(sortedType=="RatingAsc"){
        sortedResult=sortedResult.sort((a,b)=>a.rating - b.rating)
      }
      else if(sortedType=="RatingAsc"){
        sortedResult=sortedResult.sort((a,b)=>b.rating - a.rating)
      }
      return sortedResult
    }
    const sortedBooks=getSortedBooks();
    const ItemsPerPage=4;
    const [currentPage,setCurrentPage]=useState(1);
    const TotalPageNumber=Math.ceil(sortedBooks.length/ItemsPerPage);
    const currentBooks=sortedBooks.slice((currentPage-1)*ItemsPerPage,currentPage*ItemsPerPage)
    console.log(currentPage)
  return (
    <div className="Filter">
      <h1>Filter Books</h1>
      <div className="SelectInputGlobal">
        <Select setSelectedGenre={setSelectedGenre} />
        <SelectSortBy setSortedType={setSortedType} />
        <Input setSearchTerm={setSearchTerm} />
      </div>
      <div className="Filtered">
      <Result result={currentBooks} />
      </div>
      <div className="Pagination">
        <input type="button" value="Previous" onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1?true:false} />
        <span>Page{currentPage} of {TotalPageNumber}</span>
        <input type="button" value="Next" onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===TotalPageNumber?true:false} />
      </div>
      <section>
        <h1>Add A Book</h1>
        <Form result={Livre} />
      </section>
    </div>
  );
}
export default Filter;