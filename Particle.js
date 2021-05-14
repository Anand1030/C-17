class Particle {
  constructor(x, y, col1, col2, col3) {
    this.x = x;
    this.y = y;
    this.r = 22;
    this.Xv = random(3, 6);
    this.Yv = random(3, 6);
    this.col1 = col1
    this.col2 = col2
    this.col3 = col3
  }
  display() {
    fill(this.col1, this.col2, this.col3)
    ellipse(this.x, this.y, this.r);
  }
  move() {
    this.x += this.Xv
    this.y += this.Yv
  }
  bounce() {
    if (this.x > width) {
      this.Xv = random(-3,-6)
    } else if (this.x < length) {
      this.Xv = random(3,6);
    } else if (this.y > height) {
      this.Yv = random(-3, -6);
    } else if (this.y < length) {
      this.Yv = random(3, 6);
    }

  }
  hit(particle) {
    let d = dist(this.x, this.y, particle.x, particle.y);
    if (d < this.r / 2 + particle.r / 2) {
      return true;
    } else {
      return false;
    }
  }
}