import React,{useState} from "react";
import Book from "./Book";
const Form=(props)=>{
    const [Title,setTitle]=useState("");
    const [Author,setAuthor]=useState("");
    const [PublicationYear,setPublicationYear]=useState();
    const [Genre,setGenre]=useState("");
    const [Rating,setRating]=useState();
    const[books,setBooks]=useState(props.result)
    const HandleSubmit=(e)=>{
        e.preventDefault()
        if(Title==="" || Author===""){
            alert("All Fiels Are Required!")
        }
        else if(PublicationYear<=1500){
            alert("Publication Year Must Be Greater Than 1500!")
        }
        else if(Rating<1 || Rating>5){
            alert("The Rating Must Be Between 1 And 5!")
        }
        else{
            const newBook={
                title:Title,
                author:Author,
                publicationYear:PublicationYear,
                genre:Genre,
                rating:Rating
            }
            setBooks([...books,newBook])
        }
    }
    return(
        <article className="FormGlobal">
            <form action="" onSubmit={HandleSubmit} >
                <label htmlFor="">Title :</label>
                <input type="text" name="" id="" value={Title} onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="">Author :</label>
                <input type="text" name="" id="" value={Author} onChange={(e)=>setAuthor(e.target.value)} />
                <label htmlFor="">Publication Year :</label>
                <input type="text" name="" id="" value={PublicationYear} onChange={(e)=>setPublicationYear(e.target.value)} />
                <label htmlFor="">Genre :</label>
                <select name="" id="" value={Genre} onChange={(e)=>setGenre(e.target.value)}>
                    <option value="Classic">Classic</option>
                    <option value="Romance">Romance</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Fiction">Fiction</option>
                </select>
                <label htmlFor="">Rating :</label>
                <input type="text" name="" id="" value={Rating} onChange={(e)=>setRating(e.target.value)} />
                <input type="submit" value="Submit" />
                <input type="button" value="Reset" />
            </form>
            <section className="CardGlobal">
                {books.map((book,index)=>(
                    <Book key={index} book={book} />
                ))}
            </section>
        </article>
    )
}
export default Form;