import React, { Component } from "react";
class EachShelf extends Component {
  updateValue = (book, shelf) => {
    this.props.onShelfUpdate(book, shelf);
  };

  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.availableBooks.map((book) => (
                <li key={book.title} className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          "url(" + book.imageLinks.thumbnail + ")",
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={(e) => this.updateValue(book, e.target.value)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default EachShelf;
