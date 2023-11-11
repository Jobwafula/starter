import React from "react";

export default function Hollywood() {
  const movies = [
    {
      id: 0,
      title: "title",
      image: "",
      description: "",
    },
    {
      id: 1,
      title: "title",
      image: "",
      description: "",
    },
    {
      id: 2,
      title: "title",
      image: "",
      description: "",
    },
    {
      id: 3,
      title: "title",
      image: "",
      description: "",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}