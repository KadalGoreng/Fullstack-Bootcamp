import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true,
    };
  }

  async fetchMovieList() {
    const respone = await fetch("https://api.jikan.moe/v3/top/anime");
    const result = await respone.json();
    this.setState({
      movieList: result,
    });
    // console.log(this.state.movieList);
  }

  componentDidMount() {
    setTimeout(() => this.fetchMovieList(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.movieList.length);
    if (prevState.movieList.length === 0) {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {this.state.isLoading ? <h2>Loading...</h2> : animeList.map((movie) => <MovieCard key={movie.mal_id} movie={movie} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
