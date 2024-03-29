import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios'

function App() {

  const [movies, setMovies] = useState('')
  const [picture, setPicture] = useState([])

  const [resulted, setResulted] = useState('')




  

  useEffect(() => {
    getMovies();
  }, [resulted])

  // const axios = require('axios');
const getMovies = async () => {
  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${movies}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '34a177613dmsh186bfd968ef1dd4p1434aajsnd655501d603d',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    setPicture()
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  // fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movies}`, {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "imdb8.p.rapidapi.com",
  //     "x-rapidapi=key": "58fc7b578dmshc11b7b6d9715625p12f7aajsn223266f08fae"
  //   }
  // })
  // .then(response => {
  //   console.log(response.json());
  // })
  // .then(data => {
  //   setPicture(data.d)
  // })

  // .catch(err => {
  //   console.error(err);
  // })

}

const handleChange = (event) => {
  setMovies(event.target.value)
}

const handleSubmit = e => {
  e.PreventDefault()
  setResulted(movies)
}




  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

      <input type='text' value={movies} onChange={handleChange}/>
      <button type='submit'>Submit</button>

      </form>

      {picture.map((data) => (
        <div>
          <img src={data.i.imageUrl} alt=''/>
          <p>{data.l}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
