import React,{Component} from "react";
class LivreImg extends React.Component{
    render(){
        return(
            <section className="ImageSection">
                <img src={process.env.PUBLIC_URL+"Images/Book.jpg"} width="200px" height="150px" alt="" />
            </section>
        )
    }
}
export default LivreImg;