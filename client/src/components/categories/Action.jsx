import React from "react";
import { Route, Switch } from "react-router-dom";

const ActionRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/action" component={Action} />
      </Switch>
    </div>
  );
};

function Action() {
  const movies = [
    {
      id: 0,
      title: " ",
      image: " ",
      description: "",
    },
    {
      id: 1,
      title: "",
      image: "",
      description: " ",
    },
    {
      id: 2,
      title: " ",
      image: " ",
      description: " ",
    },
    {
      id: 3,
      title: " ",
      image: " ",
      description: " ",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      <h1>Action</h1>
      {movies.map((movie, key) => (
        <div key={movie.id} className="flex flex-col items-center justify-between p-4">
          <img src={movie.image} alt={movie.title} className="w-40 h-40 rounded" />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ActionRoutes;