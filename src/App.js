import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListOfBooks from "./components/ListOfBooks";
import SearchBook from "./components/SearchBook";
import EachShelf from "./components/EachShelf";

class App extends Component {
  state = {
    allBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        allBooks: data,
      });
      console.log(this.state.allBooks);
    });
  }

  handleBookChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getUpdatedBooks();
    });
  };

  getUpdatedBooks() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        allBooks: data,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Route
            exact
            path="/"
            render={() => <ListOfBooks books={this.state.allBooks} />}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBook
                onChangeShelf={this.handleChangeShelf}
                books={this.state.allBooks}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
