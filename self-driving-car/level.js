export default class Level {
  constructor(inputCount, outputCount) {
    this.inputs = new Array(inputCount);
    this.outputs = new Array(outputCount);
    this.biases = new Array(outputCount);

    this.weights = [];
    for (let i = 0; i < inputCount; i += 1) {
      this.weights[i] = new Array(outputCount);
    }

    const { weights, biases } = (Level.#randomize(this));
    this.weights = weights;
    this.biases = biases;
  }

  static #randomize(level) {
    const weights = [];
    const biases = [];
    for (let i = 0; i < level.inputs.length; i += 1) {
      weights[i] = [];
      for (let j = 0; j < level.outputs.length; j += 1) {
        weights[i][j] = Math.random() * 2 - 1;
      }
    }
    for (let i = 0; i < level.biases.length; i += 1) {
      biases[i] = Math.random() * 2 - 1;
    }
    return { weights, biases };
  }

  static feedForward(givenInputs, level) {
    for (let i = 0; i < level.inputs.length; i += 1) {
      level.inputs[i] = givenInputs[i];
    }
    for (let i = 0; i < level.outputs.length; i += 1) {
      let sum = 0;
      for (let j = 0; j < level.inputs.length; j += 1) {
        sum += level.inputs[j] * level.weights[j][i];
      }
      if (sum > level.biases[i]) {
        level.outputs[i] = 1;
      } else {
        level.outputs[i] = 0;
      }
    }
    return level.outputs;
  }
}
