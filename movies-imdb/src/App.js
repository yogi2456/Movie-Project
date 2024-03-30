import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [endPoints, setEndPoints] = useState('')
  const [container, setContainer] = useState([])

  const [finalPoint, setFinalPoint] = useState('')




  

  useEffect(() => {
    fetchMe()
  }, [finalPoint])

const fetchMe = async () => {
  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoints}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '34a177613dmsh186bfd968ef1dd4p1434aajsnd655501d603d',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    // const result = await response.text();
    // console.log(result);
    const data = await response.json();
    setContainer(data.d);
  } catch (error) {
    console.error(error);
  }
}


const onChangeHandler = (e) => {
  setEndPoints(e.target.value)
}

const submitHandler = e => {
  e.preventDefault()
  setFinalPoint(endPoints)
}




  return (
    <div className="App">

      <h1>Search movies</h1>
      <form onSubmit={submitHandler}>

      <input type='text' value={endPoints} onChange={onChangeHandler}/>
      <button type='submit'>Submit</button>

      </form>
     
     <div className='element'>
     {/* {container.map((item) => (
      // console.log(item)
      <div className='element-div'>
      <img src={item.i.imageUrl}/>
      <p>{item.l}</p>
      <p>{item.y}</p>
      <p>{item.s}</p>
      <p>{item.yr}</p>
      </div>
     ))} */}

     {container.length? <div>
      <h2 style={{textAlign: "center"}}>Your movies</h2>
      {container.map((item) => (
      // console.log(item)
      <div className='element-div'>
      <img src={item.i.imageUrl}/>
      <p>{item.l}</p>
      <p>{item.y}</p>
      <p>{item.s}</p>
      <p>{item.yr}</p>
      </div>
     ))}
     </div> : <h1>Your movies are not Found</h1> }
    </div>
    </div>
  );
}

export default App;
