import { useState, useEffect } from 'react';
import Gallery from './components/Gallery.js';
import './App.css';

function App() {
  const [artId, setArtId] = useState(17);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    // fetch(`https://api.artic.edu/api/v1/artworks/${artId}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
  })
      .catch(error => console.log(error));
      
  } , [artId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Gallery</h1>
      </header>
      <div className="gallery">
        <Gallery data={data} />
      </div>
    </div>
  );
}

export default App;
