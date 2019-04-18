import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import Card from "../components/Card";
import BookDetail from "../components/BookDetail";

class Search extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchBooks("Green Eggs and Ham");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
  };

  handleSaveBook = bookData => {
    // console.log("testing button");
    API.saveBook(bookData)
      .then(res => alert("Book saved!"))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // Search Google API upon form submit
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {

    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container cardBox">
          <div className="row">
            <div className="container mainBox">
              <Card heading="Results">
                {this.state.result.map(book => (
                  <BookDetail
                    key={book.id}
                    src={book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://visualpharm.com/assets/327/Book-595b40b75ba036ed117d566a.svg"}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveBook={() => this.handleSaveBook({
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://visualpharm.com/assets/327/Book-595b40b75ba036ed117d566a.svg",
                      authors: book.volumeInfo.authors,
                      date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink
                    })}
                  />
                ))}
              </Card>

            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default Search;
