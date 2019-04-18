import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
    return (
        <div className="container">
            <div className="row " >
                <div className="col-md-12 searchBox">
                    <form>
                        <div className="form-group formTitle">
                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                name="search"
                                type="text"
                                className="form-control"
                                placeholder="Search For a Book"
                                id="search"
                            />
                            <br/>
                            <button onClick={props.handleFormSubmit} className="btn btn-primary search-btn">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
