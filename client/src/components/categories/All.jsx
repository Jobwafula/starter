import React from "react";
import { Route, Switch } from "react-router-dom";
import All from "./All";
import SearchCategory from "../../pages/SearchCategory";

const AllRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/all" component={AllComponent} />
      </Switch>
    </div>
  )
};
export default AllRoutes;

function AllComponent() {
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
    <div className="flex flex-wrap justify-between">
      <h1>All</h1>
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

export { AllComponent };