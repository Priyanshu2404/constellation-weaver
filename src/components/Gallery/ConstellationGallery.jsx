import axios from 'axios';
import React, { useState } from 'react';

const ConstellationGallery = ({ constellations }) => {
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async (name) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8001/api/constellation/story/${encodeURIComponent(name)}`);
            setStory(response.data.story);
        } catch (error) {
            setStory("Sorry, Error fetching story.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <header className="header">
                <h1>The Constellation Gallery</h1>
            </header>

            <div className="gallery-container">
                {constellations.map((c) => (
                    <div key={c._id} className="constellation-card">
                        <h3>{c.name}</h3>
                        <p>{c.meaning}</p>
                        <button id="story-button" onClick={() => handleClick(c.name)}>
                            Get Story
                        </button>
                    </div>
                ))}
            </div>

            {/* Story Section */}
            {loading && (
                <div className="story-container">
                    <p>Loading story...</p>
                </div>
            )}

            {story && !loading && (
                <div className="story-container">
                    <h3>Story:</h3>
                    <p>{story}</p>
                </div>
            )}
        </div>
    );
};

export default ConstellationGallery;









