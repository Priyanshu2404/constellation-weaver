import React from 'react';
import ConstellationGallery from '../components/Gallery/ConstellationGallery';
import '../styles/Gallery.css';

const Gallery1 = () => {
    <div className='header'>
        <h1>The Constellation Gallery</h1>
    </div>
    const dummyConstellations = [
        { _id: 1, name: 'Orion', meaning: 'The Hunter' },
        { _id: 2, name: "Lyra", meaning: "The Harp" },
        { _id: 3, name: "Ursa Major", meaning: "The Great Bear" },
        { _id: 4, name: "Ursa Minor", meaning: "The Small Bear" },
        { _id: 5, name: "Canis Major", meaning: "The Greater Dog" },
        { _id: 6, name: "Canis Minor", meaning: "The Smaller Dog" },
        { _id: 7, name: "Auriga", meaning: "The Charioteer" },
        { _id: 6, name: "Draco", meaning: "The Dragon" },
    ];

    return <ConstellationGallery constellations={dummyConstellations} />;
};

export default Gallery1;
