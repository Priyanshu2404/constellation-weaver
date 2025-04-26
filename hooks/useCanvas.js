import { useEffect, useRef } from 'react';

export const usecanvas=(draw)=>{
    const canvasRef=useRef(null);

    useEffect(()=>{
        const canvas=canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    },[draw]);

    return canvasRef;
};