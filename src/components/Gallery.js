import { useState } from 'react';


const Gallery = (props) => {
   const [artId, setArtId] = useState('');
    if (props.data === null) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="gallery">
                <div className="gallery-item">
                    <img src={props.data.primaryImage} alt={props.data.title} />
                    <div className="gallery-item-info">
                        <h3>{props.data.title}</h3>
                        <p>{props.data.artistDisplayName}</p>
                        <p>{props.data.accessionYear}</p>
                    </div>
                </div>
                <div className="controls">
                    <button onClick={() => setArtId(artId - 1)}>Previous</button>
                    <button onClick={() => setArtId(artId + 1)}>Next</button>
                </div>
            </div> 
        )
    }
}

export default Gallery;