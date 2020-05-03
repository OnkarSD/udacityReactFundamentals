import React, { Component } from "react";
import { Link } from "react-router-dom";
import EachShelf from "./EachShelf";

class ListOfBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <EachShelf
            availableBooks={this.props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            key="currentlyReading"
            title="Currently Reading"
            onShelfUpdate={this.props.onChangeOfBook}
          />
          <EachShelf
            availableBooks={this.props.books.filter(
              (book) => book.shelf === "wantToRead"
            )}
            key="wantToRead"
            title="Want To Read"
            onShelfUpdate={this.props.onChangeOfBook}
          />
          <EachShelf
            availableBooks={this.props.books.filter(
              (book) => book.shelf === "read"
            )}
            key="read"
            title="read"
            onShelfUpdate={this.props.onChangeOfBook}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListOfBooks;
