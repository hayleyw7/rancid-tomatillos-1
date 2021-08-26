import React, { Component } from 'react';
import './App.css';
import movieData from './movieData'
import Posters from './Posters'
import Movie from './Movie'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: movieData.singleMovie
    }
  }

  clickPoster = () => {
    document.querySelector('.posters-container').classList.add('hidden');
    document.querySelector('.App').style.background = `url(${this.state.singleMovie.backdrop_path})`;
  }

  clickBackBtn = () => {
    document.querySelector('.posters-container').classList.remove('hidden');
    document.querySelector('.App').style.background = `white`;
  }

  render() {
    return (
      <main className="App">
        <h1 className="App-header">Rancid Tomatillos</h1>
        <Posters posters={this.state.movies} clickPoster={this.clickPoster}/>
        <Movie movie={this.state.singleMovie} clickBackBtn={this.clickBackBtn} />
      </main>
    );
  }
} 

export default App;
