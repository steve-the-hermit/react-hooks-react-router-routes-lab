import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <p>Movies:</p>
          <ul>
            {movies
              .filter(movie => movie.directorId === director.id)
              .map((movie, index) => (
                <li key={index}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
