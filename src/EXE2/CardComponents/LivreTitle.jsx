import React,{Component} from "react";
class LivreTitle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section>
                <h3>{this.props.title}</h3>
                <p><span>Author:</span> {this.props.author}</p>
                <p><span>Publication Year:</span> {this.props.publicationYear}</p>
                <p><span>Genre:</span> {this.props.genre}</p>
                <p><span>Rating:</span> {this.props.rating}</p>
            </section>
        )
    }
}
export default LivreTitle;