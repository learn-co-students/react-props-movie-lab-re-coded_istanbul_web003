import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
   return movieData.map((e, ) => (
    <MovieCard   title={e.title} poster={e.poster} IMDBRating={e.IMDBRating} genres={e.genres} />
   ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}