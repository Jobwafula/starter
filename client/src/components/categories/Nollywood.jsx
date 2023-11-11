import React from "react";

export default function Nollywood() {
  const movies = [
    {
      id: 0,
      title: "",
      image: "",
      description: "",
    },
    {
      id: 1,
      title: "",
      image: "",
      description: "",
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