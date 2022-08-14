import { useState, useEffect } from 'react';
import Gallery from './components/Gallery.js';
import './App.css';

function App() {
  const [artId, setArtId] = useState(1);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
      
  } , [artId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Gallery</h1>
      </header>
      <Gallery data={data} />
    </div>
  );
}

export default App;
