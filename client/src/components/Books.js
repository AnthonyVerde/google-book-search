import React from "react";

function Books(props) {
    return (
        <div className="col-md-12 bookCard">
            <h3 className="bookTitle">Title: {props.title}</h3>
            <img className="images" alt={props.title} src={props.image} />
            <h5 className="bookAuthor">Author(s): {props.authors}</h5>
            <h6 className="bookDescription">Description: {props.description}</h6>
            <br></br>
            <a className="bookLink" href={props.link}>Read More</a>
            <button type="button" className="btn btn-success save-btn" onClick={props.handlingSavedBook}>Save Book</button>
        </div>
    );
}

export default Books;
