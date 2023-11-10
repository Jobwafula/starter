import React from "react";
import { Route, Switch } from "react-router-dom";
import Hollywood from "./Hollywood";

const HollywoodRoutes = () => {
  return (
    <Switch>
      <Route path="/hollywood">
        <Hollywood />
      </Route>
    </Switch>
  );
};
// export default HollywoodRoutes;

export default function Hollywood() {
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
    {
      id: 2,
      title: "title",
      image: "",
      description: "description",
    },
    {
      id: 3,
      title: "title",
      image: "",
      description: "description",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {movies.map((movie, key) => {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
          </div>
        );
      })}
    </div>
  );
}