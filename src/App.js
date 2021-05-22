import { useEffect, useState } from 'react';
import StarshipCard from './components/StarshipCard/StarshipCard'
import './App.css';


function App() {
  const [ state, setState ] =  useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  //useEffect calls its effect function on initial load
  //we want our data when the apps loads
  useEffect(() => {
    async function getAndSetAppData() {
       const data = await fetch('https://swapi.dev/api/starships/')
      .then(res => res.json());

      setState(data);

      // console.log(data);
    }

    getAndSetAppData();


  }, []);
    

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      {
        state.results.map((starship, idx) => {
          return <StarshipCard starship={starship} />
  })
}
    
    </div>
  );
}

export default App;
