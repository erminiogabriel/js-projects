import Level from './level.js';
import { lerp } from './utils.js';

export default class NeuralNetwork {
  constructor(neuronCounts) {
    this.levels = [];
    for (let i = 0; i < neuronCounts.length - 1; i += 1) {
      this.levels.push(new Level(neuronCounts[i], neuronCounts[i + 1]));
    }
  }

  static feedForward(givenInputs, network) {
    let outputs = Level.feedForward(givenInputs, network.levels[0]);
    for (let i = 1; i < network.levels.length; i += 1) {
      outputs = Level.feedForward(outputs, network.levels[i]);
    }
    return outputs;
  }

  static mutate(network, amount = 1) {
    network.levels.forEach((level) => {
      for (let i = 0; i < level.biases.length; i += 1) {
        level.biases[i] = lerp(
          level.biases[i],
          Math.random() * 2 - 1,
          amount,
        );
      }

      for (let i = 0; i < level.weights.length; i += 1) {
        for (let j = 0; j < level.weights[i].length; j += 1) {
          level.weights[i][j] = lerp(
            level.weights[i][j],
            Math.random() * 2 - 1,
            amount,
          );
        }
      }
    });
  }
}
