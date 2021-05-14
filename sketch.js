//By Anand Thakur
let particles = [];

function setup() {
  createCanvas(450, 450);
  //The 6 in i<6 is the number of particles so if you wanted you     could change it for more or less particles.
  for (var i = 0; i <6; i++) {
    particles[i] = new Particle(random(20,430),random(20,430), random(0, 200), random(0, 200), random(0, 200))
  }
}

function draw() {
  background(220);
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
    particles[i].bounce();
    for (var j = 0; j < particles.length; j++) {
      if (particles[i].hit(particles[j]) && i!=j) {
        particles[i].Xv *= -1;
        particles[i].Yv *= -1;
        particles[j].Xv *= -1;
        particles[j].Yv *= -1;
      }
    }
  }
text("By Anand Thakur",100,30)
}