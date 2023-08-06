import React from "react";
import { actors, movies } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.id}>
          <h2>{actor.name}</h2>
          <p>Movies:</p>
          <ul>
            {movies
              .filter(movie => movie.actorIds.includes(actor.id))
              .map((movie, index) => (
                <li key={index}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
