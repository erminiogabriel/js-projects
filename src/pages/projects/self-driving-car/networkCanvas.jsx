import { useEffect } from 'react';
import Visualizer from '@/utils/self-driving-car/visualizer.js';

function NetworkCanvas({ data, canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = window.innerHeight - 66;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight - 66;

    if (ctx && data) {
      ctx.lineDashOffset = data.offset;
      Visualizer.drawNetwork(ctx, data.bestCar.brain);
    }
  }, [data]);

  return <canvas style={{ background: 'black' }} ref={canvasRef} />;
}

export default NetworkCanvas;
