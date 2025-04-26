import React, { useEffect, useRef, useState } from 'react';

const constellations = [
    {
        name: 'Orion',
        meaning: 'The Hunter',
        stars: [
            { x: 100, y: 100 },
            { x: 130, y: 140 },
            { x: 160, y: 180 },
            { x: 190, y: 140 },
            { x: 220, y: 100 },
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
    },
    {
        name: 'Lyra',
        meaning: 'The Harp',
        stars: [
            { x: 300, y: 80 },
            { x: 320, y: 110 },
            { x: 340, y: 90 },
        ],
        connections: [[0, 1], [1, 2]],
    },
    {
        name: 'Ursa Major',
        meaning: 'The Great Bear',
        stars: [
            { x: 100, y: 300 },
            { x: 130, y: 320 },
            { x: 160, y: 310 },
            { x: 190, y: 330 },
            { x: 220, y: 350 },
            { x: 250, y: 330 },
            { x: 280, y: 340 },
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
    },
    {
        name: 'Ursa Minor',
        meaning: 'The Small Bear',
        stars: [
            { x: 400, y: 300 },
            { x: 430, y: 320 },
            { x: 460, y: 310 },
            { x: 490, y: 330 },
            { x: 520, y: 350 },
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
    },
    {
        name: 'Canis Major',
        meaning: 'The Greater Dog',
        stars: [
            { x: 100, y: 500 },
            { x: 130, y: 530 },
            { x: 160, y: 510 },
            { x: 190, y: 540 },
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
    },
    {
        name: 'Canis Minor',
        meaning: 'The Smaller Dog',
        stars: [
            { x: 300, y: 500 },
            { x: 330, y: 530 },
        ],
        connections: [[0, 1]],
    },
    {
        name: 'Auriga',
        meaning: 'The Charioteer',
        stars: [
            { x: 500, y: 500 },
            { x: 530, y: 530 },
            { x: 560, y: 510 },
            { x: 590, y: 540 },
        ],
        connections: [[0, 1], [1, 2], [2, 3]],
    },
    {
        name: 'Draco',
        meaning: 'The Dragon',
        stars: [
            { x: 600, y: 100 },
            { x: 620, y: 130 },
            { x: 640, y: 110 },
            { x: 660, y: 140 },
            { x: 680, y: 120 },
        ],
        connections: [[0, 1], [1, 2], [2, 3], [3, 4]],
    },
];

const StarMapCanvas = () => {
    const canvasRef = useRef(null);
    const [nameInput, setNameInput] = useState('');
    const [meaningInput, setMeaningInput] = useState('');
    const [matchedConstellation, setMatchedConstellation] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        drawBackground(context);

        if (matchedConstellation) {
            drawStars(context, matchedConstellation.stars);
            drawLines(context, matchedConstellation.stars, matchedConstellation.connections);
            drawLabel(context, matchedConstellation.stars[0], matchedConstellation.name);
        }
    }, [matchedConstellation]);

    const drawBackground = (context) => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, 800, 700);
    };

    const drawStars = (context, starsArray) => {
        context.fillStyle = 'white';
        starsArray.forEach((star) => {
            context.beginPath();
            context.arc(star.x, star.y, 4, 0, Math.PI * 2);
            context.fill();
        });
    };

    const drawLines = (context, starsArray, connections) => {
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        context.beginPath();
        connections.forEach(([start, end]) => {
            context.moveTo(starsArray[start].x, starsArray[start].y);
            context.lineTo(starsArray[end].x, starsArray[end].y);
        });
        context.stroke();
    };

    const drawLabel = (context, position, text) => {
        context.fillStyle = 'lightblue';
        context.font = '14px Arial';
        context.fillText(text, position.x + 5, position.y - 5);
    };

    const handleSearch = () => {
        const name = nameInput.trim().toLowerCase();
        const meaning = meaningInput.trim().toLowerCase();

        const match = constellations.find(c =>
            c.name.toLowerCase().includes(name) ||
            c.meaning.toLowerCase().includes(meaning)
        );

        setMatchedConstellation(match || null);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <canvas
                ref={canvasRef}
                width={800}
                height={700}
                style={{
                    border: '2px solid gray',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
                    marginBottom: '20px',
                }}
            />
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Constellation Name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px', width: '200px' }}
                />
                <input
                    type="text"
                    placeholder="Meaning"
                    value={meaningInput}
                    onChange={(e) => setMeaningInput(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px', width: '200px' }}
                />
                <button onClick={handleSearch} style={{ padding: '8px 20px', cursor: 'pointer' }}>
                    Show Constellation
                </button>
            </div>
        </div>
    );
};

export default StarMapCanvas;
