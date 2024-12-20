import React,{Component} from "react";
import LivreImg from "./CardComponents/LivreImg";
import LivreTitle from "./CardComponents/LivreTitle";
import LivrePrice from "./CardComponents/LivrePrice";
class CardLivre extends React.Component{
    render(){
        const {title,author,publicationYear,genre,rating}=this.props;
        return(
            <section className="Card">
                <LivreImg/>
                <div className="BookInfo">
                    <LivreTitle title={title} author={author} publicationYear={publicationYear} genre={genre} rating={rating} />
                    <LivrePrice/>
                    <div>
                        <input type="button" value="Read More" />
                    </div>
                </div>
            </section>
        )
    }
}
export default CardLivre;