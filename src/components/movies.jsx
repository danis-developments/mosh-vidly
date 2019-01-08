import { getMovies } from "./../services/fakeMovieService";
import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    return <div>{this.renderMovieTable()}</div>;
  }

  handleDelete = id => {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  };

  renderMovieList() {
    return (
      <React.Fragment>
        {this.state.movies.map(movie => {
          return (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }

  renderMovieTable() {
    const { length: count } = this.state.movies;
    if (count) {
      return (
        <div>
          <h2>Showing {count} movies in the database.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.renderMovieList()}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h2>There are no movies in the database.</h2>
        </div>
      );
    }
  }
}

export default Movies;
