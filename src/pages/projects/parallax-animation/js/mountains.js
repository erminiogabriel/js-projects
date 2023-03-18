class Mountain {
  constructor(color, width, height, step_max, step_change, height_max, height_min, tree_timeout, tree_properties) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.step_max = step_max;
    this.step_change = step_change;
    this.height_max = height_max;
    this.height_min = height_min;
    this.height_map = [];
    this.trees = [];
    this.tree_timeout = tree_timeout;
    this.tree_properties = tree_properties;

    this.generate_mountain();
  }

  generate_mountain() {
    let height = Math.random() * this.height_max;
    this.slope = (Math.random() * this.step_max) * 2 - this.step_max;

    for (let x = 0; x < this.width; x++) {
      this.height_map.push(this.generate_next_height(height));
      height = this.height_map[this.height_map.length - 1];
    }
  }

  generate_next_height(height) {
    let next_height = height + this.slope;
    this.slope += (Math.random() * this.step_change) * 2 - this.step_change;

    if (this.slope > this.step_max) { this.slope = this.step_max; }
    if (this.slope < -this.step_max) { this.slope = -this.step_max; }

    if (next_height > this.height_max) {
      next_height = this.height_max;
      this.slope *= -1;
    }
    if (next_height < this.height_min) {
      next_height = this.height_min;
      this.slope *= -1;
    }
    return next_height;
  }

  update_map() {
    const next_height = this.generate_next_height(this.height_map[this.height_map.length - 1]);

    this.height_map.push(next_height);
    this.height_map.shift();
    this.trees.forEach((tree) => {
      tree.x -= 1;
    });
    const tree_probability = Math.random();
    if (tree_probability < this.tree_properties.tree_probability && this.tree_timeout == 0) {
      this.slope = 0.4;
      const tree_scale = Math.random() * (this.tree_properties.max_scale - this.tree_properties.min_scale) + this.tree_properties.min_scale;
      const tree = {
        x: this.width,
        y: next_height + 0.3 * tree_scale,
        scale: tree_scale,
      };
      this.trees.push(tree);
      this.tree_timeout = this.tree_properties.tree_default_timeout;
    } else if (this.tree_timeout > 0) {
      this.tree_timeout -= 1;
    }
  }

  draw_mountain(ctx) {
    for (let x = 0; x < this.width; x++) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(x, this.height);
      ctx.lineTo(x, this.height_map[x]);
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
  }

  draw_trees(ctx) {
    for (let x = 0; x < this.trees.length; x++) {
      ctx.save();
      ctx.translate(this.trees[x].x, this.trees[x].y);
      ctx.scale(this.trees[x].scale / 3, this.trees[x].scale);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.fillStyle = this.color;
      for (var i = 1; i < 5; i++) {
        ctx.lineTo((i * 0.1), -0.2 * i);
        var jump = -0.2 * i - (0.15 / (i + 0.01));
        var jump2 = -0.2 * i - (0.15 / (i + 0.01)) / 2;
        ctx.lineTo(0.35 + i * 0.03, jump);
        ctx.lineTo((i * 0.1) + (0.04 / (i + 0.01)), jump2);
      }
      ctx.lineTo(0.5, -1);

      for (var i = 4; i > 0; i--) {
        var jump = -0.2 * i - (0.15 / (i + 0.01));
        var jump2 = -0.2 * i - (0.15 / (i + 0.01)) / 2;
        ctx.lineTo(1 - (i * 0.1), jump2);
        ctx.lineTo(0.65 - i * 0.03, jump);
        ctx.lineTo(1 - (i * 0.1) + (0.04 / (i + 0.01)), -0.2 * i);
      }
      ctx.lineTo(1, 0);
      ctx.lineTo(0.65, -0.1);
      ctx.lineTo(0.65, 0.4);
      ctx.lineTo(0.35, 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }
}
