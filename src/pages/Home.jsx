import React from 'react';
import StarMapCanvas from '../components/Canvas/StarMapCanvas';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">The Interactive Constellation Weaver</h1>

            <div className="canvas-wrapper">
                <StarMapCanvas />
            </div>
        </div>
    );
};

export default Home;
