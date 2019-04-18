import React, { Component } from "react";
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
      <div className="container">
        <div className="row">
          <div className="container"
            style={{
              margin: "20px"
            }}>
            <Card heading="Your Saved Books">
              {this.state.books.map(book => (
                <SavedBookDetail
                  key={book._id}
                  src={book
                    ? book.src
                    : "https://visualpharm.com/assets/327/Book-595b40b75ba036ed117d566a.svg"}
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