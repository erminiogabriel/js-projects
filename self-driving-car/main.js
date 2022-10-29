import Car from './car.js';
import NeuralNetwork from './network.js';
import Road from './road.js';
import Visualizer from './visualizer.js';
import { permute } from './utils.js';

const carCanvas = document.getElementById('carCanvas');
carCanvas.width = 300;

const networkCanvas = document.getElementById('networkCanvas');
networkCanvas.width = 700;
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9, 6);

function generateCars(n) {
  const vehicles = [];
  for (let i = 1; i <= n; i += 1) {
    vehicles.push(new Car(road.getLaneCenter(1), 100, 30, 50, 'AI'));
  }
  return vehicles;
}

const carCtx = carCanvas.getContext('2d');
const networkCtx = networkCanvas.getContext('2d');

const cars = generateCars(2000);
let bestCar = cars[0];
if (localStorage.getItem('bestBrain')) {
  for (let i = 0; i < cars.length; i += 1) {
    cars[i].brain = JSON.parse(localStorage.getItem('bestBrain'));
    if (i !== 0) {
      NeuralNetwork.mutate(cars[i].brain, 0.3);
    }
  }
}

const traffic = [];
const lanes = [];
lanes.push(...permute([-1, -1, -1, -1, -1, 1]));
lanes.push(...permute([-1, -1, -1, -1, 1, 1]));
lanes.push(...permute([-1, -1, -1, 1, 1, 1]));
lanes.push(...permute([-1, -1, 1, 1, 1, 1]));
lanes.push(...permute([-1, 1, 1, 1, 1, 1]));
for (let i = 0; i < 100; i += 1) {
  const layout = lanes[Math.floor(Math.random() * lanes.length)];
  for (let j = 0; j < layout.length; j += 1) {
    if (layout[j] > 0) {
      traffic.push(new Car(road.getLaneCenter(j), -200 * i, 30, 50, 'DUMMY', 2));
    }
  }
}

function save() {
  localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain));
}

function discard() {
  localStorage.removeItem('bestBrain', JSON.stringify(bestCar.brain));
}

function animate(time) {
  for (let i = 0; i < traffic.length; i += 1) {
    traffic[i].update(road.borders, []);
  }

  for (let i = 0; i < cars.length; i += 1) {
    cars[i].update(road.borders, traffic);
  }

  bestCar = cars.find((c) => c.y === Math.min(...cars.map((d) => d.y)));

  carCanvas.height = window.innerHeight;
  networkCanvas.height = window.innerHeight;

  carCtx.save();
  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);
  road.draw(carCtx);

  for (let i = 0; i < traffic.length; i += 1) {
    if (Math.abs(bestCar.y - traffic[i].y) < 1500) {
      traffic[i].draw(carCtx, 'red');
    }
  }

  carCtx.globalAlpha = 0.2;
  for (let i = 0; i < cars.length; i += 1) {
    cars[i].draw(carCtx, 'blue');
    if (Math.abs(bestCar.y - cars[i].y) > 500) {
      cars.splice(i, 1);
    } else if (cars[i].damaged && cars.length > 5) {
      cars.splice(i, 1);
    }
  }
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, 'blue', true);
  carCtx.restore();

  networkCtx.lineDashOffset = -time / 50;
  Visualizer.drawNetwork(networkCtx, bestCar.brain);

  requestAnimationFrame(animate);
}
animate();

document.getElementById('save').addEventListener('click', save);
document.getElementById('discard').addEventListener('click', discard);
