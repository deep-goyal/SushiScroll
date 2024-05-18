import React from "react";
import useGenres from "../hooks/useGenres";

const Sidebar = () => {
  const genres = useGenres();

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
