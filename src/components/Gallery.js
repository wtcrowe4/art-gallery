import { useState } from 'react';

const Gallery = (props) => {
   const [artId, setArtId] = useState(1);
    
    return (
        <div className="gallery">
            <div className="gallery-item">
                <img src={props.objectURL} alt={props.title} />
                <div className="gallery-item-info">
                    <h3>{props.title}</h3>
                    <p>{props.artist}</p>
                </div>
            </div>
            <div className="controls">
                <button onClick={() => setArtId(artId - 1)}>Previous</button>
                <button onClick={() => setArtId(artId + 1)}>Next</button>
            </div>
        </div> 
        
        
    );
}

export default Gallery;