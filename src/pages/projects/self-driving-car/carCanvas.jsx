import { useEffect } from 'react';

function CarCanvas({ data, canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 300;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;

    if (ctx && data) {
      if (data.cars && data.road && data.traffic) {
        const bestCar = data.cars.find((c) => c.y === Math.min(...data.cars.map((d) => d.y)));
        ctx.save();
        ctx.translate(0, -bestCar.y + canvas.height * 0.7);
        data.road.draw(ctx);

        for (let i = 0; i < data.traffic.length; i += 1) {
          if (Math.abs(bestCar.y - data.traffic[i].y) < 1500) {
            data.traffic[i].draw(ctx, 'red');
          }
        }
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < data.cars.length; i += 1) {
          data.cars[i].draw(ctx, 'blue');
          if (Math.abs(bestCar.y - data.cars[i].y) > 800) {
            data.cars.splice(i, 1);
          } else if (data.cars[i].damaged && data.cars.length > 500) {
            data.cars.splice(i, 1);
          }
        }
        ctx.globalAlpha = 1;
        bestCar.draw(ctx, 'blue', true);
        ctx.restore();
      }
    }
  }, [data]);

  return <canvas style={{ background: 'lightgray' }} ref={canvasRef} />;
}

export default CarCanvas;
