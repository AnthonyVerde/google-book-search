import React from "react";

const SavedBookDetail = props => {
    return (
        <span>
            <div className="col-md-6" style={{ float: "left", marginTop: "20px" }}>
                <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
                <p style={{ fontSize: "30px" }}>{props.title}</p>
                <p><strong>Author(s):</strong> {props.authors}</p>
                <p><strong>Date Published:</strong> {props.date}</p>
                <p><strong>View on Google Books:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
                <button onClick={props.handleDeleteBook} className="btn btn-warning delete-btn"
                    style={{
                        marginBottom: "30px",
                        backgroundColor: "red",
                        color: "white"
                    }}>Delete This Book</button>
            </div>
            <div className="col-md-6" style={{ float: "right", marginTop: "20px" }}>
                <p style={{ marginBottom: "30px" }}><strong>Description:</strong> {props.description}</p>
            </div>
            <hr style={{
                clear: "both",
                display: "block",
                height: "1px",
                border: 0,
                borderTop: "1px solid #ccc",
                margin: "1em 0",
                padding: 0
            }} />
        </span>
    );
}

export default SavedBookDetail;