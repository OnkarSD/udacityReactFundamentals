import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class SearchBook extends Component {
  state = {
    searchQuery: "",
    result: [],
  };

  inputHandle = (e) => {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery,
    });
    console.log(this.state.searchQuery);
    this.searchBooks(searchQuery);
  };

  searchBooks = (query) => {
    BooksAPI.search(query).then((result) => {
      this.setState({ result });
    });
    console.log(this.state.result);
  };

  updateValue = (book, shelf) => {
    this.props.onShelfUpdate(book, shelf);
  };

  showBookList = () => {
    if (this.state.result.length > 0) {
      //   return this.state.result.map((book) => (
      //     <SearchedShelf book={book} updateValue={this.updateValue} /> //Scrapped component ,was trying to render searchedshelf in different component
      //   ));
      return this.state.result.map((book) => (
        <li key={book.title}>
          <div className="book">
            <div className="book-top">
              {book.imageLinks ? (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                  }}
                />
              ) : (
                ""
              )}
              <div className="book-shelf-changer">
                <select
                  onChange={(event) => this.update(book, event.target.value)}
                  value={book.shelf}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="none">None</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      ));
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={this.state.searchQuery}
              onChange={this.inputHandle}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{this.showBookList()}</ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
