import React from "react";
import { Route, Switch } from "react-router-dom";
import Nollywood from "./Nollywood";

const NollywoodRoutes = (
  <Switch>
    <Route path="/nollywood">
      <Nollywood />
    </Route>
  </Switch>
);

// export default NollywoodRoutes;

export default function Nollywood() {
  const movies = [
    {
      id: 0,
      title: "title",
      image: "",
      description: "description",
    },
    {
      id: 1,
      title: "title",
      image: "",
      description: "description",
    },
  ];
  return (
    <div>
      <h1>Nollywood</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}