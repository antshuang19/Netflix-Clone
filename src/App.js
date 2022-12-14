import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner'

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title ="NETFLIX ORIGINAL" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending }/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated }/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies }/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies }/>
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
