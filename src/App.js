import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />

      <Row title="TopRated" fetchUrl={request.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
