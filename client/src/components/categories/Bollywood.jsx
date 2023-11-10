import React from "react";
import { Route, Switch } from "react-router-dom";
import Bollywood from "./Bollywood";

const BollywoodRoutes = () => {
  return (
    <Switch>
      <Route path="/bollywood">
        <Bollywood />
      </Route>
    </Switch>
  );
};
// export default BollywoodRoutes;

export default function Bollywood() {
  const movies = [
    {
      id: 0,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 1,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
    {
      id: 2,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 3,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
    {
      id: 4,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 5,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
    {
      id: 6,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 7,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
    {
      id: 8,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 9,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
    {
      id: 10,
      title: "The Power",
      image: require("../../assets/bollywood/power.jpg"),
    },
    {
      id: 11,
      title: "Bang Bang",
      image: require("../../assets/bollywood/bang.jpg"),
    },
  ];

  return (
    <div className="flex flex-wrap justify-between bg-black">
      {movies.map((movie, key) => {
        <Route exact path="/bollywood" component={Bollywood} />
        return (
          <div key={movie.id} className="border-2 rounded">
            <div className="w-[23rem] h-[20rem] z-[-1]">
              <img
                className="w-[100%] h-[100%] hover:p-2  hover:cursor-pointer"
                src={movie.image}
              />
            </div>
            <div className="mt-[-3rem] bg-black-900   ">
              <h1 className="bg-black text-center text-white">{movie.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}