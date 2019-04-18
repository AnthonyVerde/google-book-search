import React, { Component } from "react";
import "../styles/Saved.css";
import API from "../utils/API";
import Card from "../components/Card";
import SavedBookDetail from "../components/SavedBookDetail";

class SavedBooks extends Component {
  state = {
    books: []
  };

  // grab the books from /api/books
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState(
        {
          books: res.data
        },
        console.log(res.data)
      )
      )
      .catch(err => console.log(err));
  }

  // loads all books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // deletes a book
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container cardBox">
        <div className="row">
          <div className="container mainBox2"
            style={{
              borderRadius: "20px",
              marginBottom: "20px",
              background: "rgb(36, 150, 216)"
            }}> <i className="fas fa-book" id="bookIcon"></i>
            <Card heading="Saved Books">
              {this.state.books.map(book => (
                <SavedBookDetail
                  key={book._id}
                  src={book
                    ? book.src
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/450px-Book_stub_img.svg.png"}
                  title={book.title}
                  authors={book.authors.join(", ")}
                  date={book.date}
                  description={book.description}
                  link={book.link}
                  handleDeleteBook={() => this.handleDeleteBook(book._id)}
                />
              ))}
            </Card>
          </div>
        </div>
      </div >
    );
  }
}

export default SavedBooks;