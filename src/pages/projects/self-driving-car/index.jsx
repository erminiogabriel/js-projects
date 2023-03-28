import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { permute } from '@/utils/self-driving-car/utils';
import Car from '@/utils/self-driving-car/car.js';
import NeuralNetwork from '@/utils/self-driving-car/network.js';
import Road from '@/utils/self-driving-car/road.js';
import Navbar from '@/components/navbar';
import CarCanvas from './carCanvas';
import NetworkCanvas from './networkCanvas';
import StyledSelfDrivingCar from './style';

export default function SelfDrivingCarPage() {
  const [carCanvasData, setCarCanvasData] = useState(null);
  const [networkCanvasData, setNetworkCanvasData] = useState(null);
  const [bestCar, setBestCar] = useState(null);
  let road = [];
  let cars = [];
  const traffic = [];
  const carCanvasRef = useRef(null);
  const networkCanvasRef = useRef(null);
  const frameIdRef = useRef(null);
  const [carValue, setCarValue] = useState(1);
  const [mutationValue, setMutationValue] = useState(0.1);
  const [difficultyValue, setDifficultyValue] = useState('normal');
  const [isRunning, setIsRunning] = useState(false);
  const [reload, setReload] = useState(false);

  const handleCarChange = (event) => {
    setCarValue(event.target.value);
  };

  const handleMutationChange = (event) => {
    setMutationValue(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficultyValue(event.target.value);
  };

  const updateCanvases = (data) => {
    setBestCar(cars.find((c) => c.y === Math.min(...cars.map((d) => d.y))));
    setCarCanvasData({ road, cars, traffic });

    setNetworkCanvasData(data);
  };

  async function fetchData() {
    const response = await fetch('/bestbrain.json');
    const defaultBrain = await response.json();

    for (let i = 0; i < cars.length; i += 1) {
      cars[i].brain = JSON.parse(JSON.stringify(defaultBrain));
      if (i !== 0) {
        NeuralNetwork.mutate(cars[i].brain, parseFloat(mutationValue));
      }
    }
  }

  const startAnimate = () => {
    if (isRunning) {
      setIsRunning(false);
      cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = null;
    }

    const animate = (time) => {
      const bestVehicle = cars.find((c) => c.y === Math.min(...cars.map((d) => d.y)));
      const bestTraffic = traffic.find((c) => c.y === Math.min(...traffic.map((d) => d.y)));
      if ((bestTraffic.y - bestVehicle.y) > -1000) {
        const lanes = [];
        if (difficultyValue === 'easy') {
          lanes.push(...permute([-1, -1, -1, -1, -1, 1]));
          lanes.push(...permute([-1, -1, -1, -1, 1, 1]));
        }
        if (difficultyValue === 'easy' || difficultyValue === 'normal') {
          lanes.push(...permute([-1, -1, -1, 1, 1, 1]));
        }
        if (difficultyValue === 'normal' || difficultyValue === 'hard') {
          lanes.push(...permute([-1, -1, 1, 1, 1, 1]));
        }
        if (difficultyValue === 'hard' || difficultyValue === 'very-hard') {
          lanes.push(...permute([-1, 1, 1, 1, 1, 1]));
        }

        const layout = lanes[Math.floor(Math.random() * lanes.length)];
        for (let j = 0; j < layout.length; j += 1) {
          if (layout[j] > 0) {
            traffic.push(new Car(road.getLaneCenter(j), -200 + bestTraffic.y, 30, 50, 'DUMMY', 2));
          }
        }
      }

      for (let i = 0; i < traffic.length; i += 1) {
        traffic[i].update(road.borders, []);
      }

      for (let i = 0; i < cars.length; i += 1) {
        cars[i].update(road.borders, traffic);
      }

      updateCanvases({ offset: -time / 50, bestCar: bestVehicle });
      frameIdRef.current = requestAnimationFrame(animate);
    };
    setIsRunning(true);
    frameIdRef.current = requestAnimationFrame(animate);
  };

  const save = () => {
    localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain));
  };

  const discard = () => {
    localStorage.removeItem('bestBrain', JSON.stringify(bestCar.brain));
  };

  const handleReload = () => {
    setReload(!reload);
  };

  const generateCars = (n) => {
    const vehicles = [];
    for (let i = 1; i <= n; i += 1) {
      vehicles.push(new Car(road.getLaneCenter(2), 100, 30, 50, 'AI'));
    }
    return vehicles;
  };

  useEffect(() => {
    road = new Road(carCanvasRef.current.width / 2, carCanvasRef.current.width * 0.9, 6);
    cars = generateCars(carValue);
    if (localStorage.getItem('bestBrain')) {
      for (let i = 0; i < cars.length; i += 1) {
        cars[i].brain = JSON.parse(localStorage.getItem('bestBrain'));
        if (i !== 0) {
          console.log(cars[i].brain);
          NeuralNetwork.mutate(cars[i].brain, parseFloat(mutationValue));
        }
      }
    } else {
      fetchData();
    }

    const lanes = [];
    if (difficultyValue === 'easy') {
      lanes.push(...permute([-1, -1, -1, -1, -1, 1]));
      lanes.push(...permute([-1, -1, -1, -1, 1, 1]));
    }
    if (difficultyValue === 'easy' || difficultyValue === 'normal') {
      lanes.push(...permute([-1, -1, -1, 1, 1, 1]));
    }
    if (difficultyValue === 'normal' || difficultyValue === 'hard') {
      lanes.push(...permute([-1, -1, 1, 1, 1, 1]));
    }
    if (difficultyValue === 'hard' || difficultyValue === 'very-hard') {
      lanes.push(...permute([-1, 1, 1, 1, 1, 1]));
    }

    for (let i = 1; i < 4; i += 1) {
      const layout = lanes[Math.floor(Math.random() * lanes.length)];
      for (let j = 0; j < layout.length; j += 1) {
        if (layout[j] > 0) {
          traffic.push(new Car(road.getLaneCenter(j), -200 * i, 30, 50, 'DUMMY', 2));
        }
      }
    }
    startAnimate();
  }, [carValue, mutationValue, difficultyValue, reload]);

  return (
        <StyledSelfDrivingCar>
            <Head>
            <title>Self-driving car</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar></Navbar>

            <CarCanvas
            data={carCanvasData}
            id="carCanvas"
            canvasRef={carCanvasRef}/>
            <div id="verticalButtons">
                <button onClick={save} id="save">💾</button>
                <button onClick={discard} id="discard">🗑️</button>
                <div className="dropdown">
                    <span>🚗</span>
                    <select name="carCount" id="carCount" value={carValue} onChange={handleCarChange}>
                        <option value="1">1</option>
                        <option value="10">10</option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="1500">1500</option>
                        <option value="2000">2000</option>
                    </select>
                </div>
                <div className="dropdown">
                    <span>🧬</span>
                    <select name="mutationAmount" id="mutationAmount" value={mutationValue} onChange={handleMutationChange}>
                    <option value="0.01">0.01</option>
                    <option value="0.03">0.03</option>
                    <option value="0.05">0.05</option>
                    <option value="0.1">0.10</option>
                    <option value="0.2">0.20</option>
                    <option value="0.3">0.30</option>
                    <option value="0.5">0.50</option>
                    <option value="0.75">0.75</option>
                    <option value="1.0">1.00</option>
                </select>
                </div>
                <div className="dropdown">
                    <span>🎯</span>
                    <select name="difficulty" id="difficulty" value={difficultyValue} onChange={handleDifficultyChange}>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        <option value="very-hard">Very Hard</option>
                    </select>
                </div>
                <button onClick={handleReload} id="reload">🔄Reload</button>

            </div>
            <NetworkCanvas
            data={networkCanvasData}
            id="networkCanvas"
            canvasRef={networkCanvasRef}/>
        </StyledSelfDrivingCar>
  );
}
