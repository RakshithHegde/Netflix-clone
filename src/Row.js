import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  //A snippet that runs based on a specific conditions
  useEffect(() => {
    //if [], run once the row loads and dont run again
  }, [movies]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
