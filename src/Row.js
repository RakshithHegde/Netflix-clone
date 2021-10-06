import React, { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //A snippet that runs based on a specific conditions
  useEffect(() => {
    //if [], run once the row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
