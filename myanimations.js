let animations = [
  // ... other animations ...


  {
    title: "Custom Wave Animation",
    description: "Your custom wave animation description here.",
    isActive: true,

    setup(p) {
      this.numWaves = 5;
      this.waves = [];

      for (let i = 0; i < this.numWaves; i++) {
        let wave = {
          xspacing: 16,
          w: p.width + 16,
          theta: p.random(p.TWO_PI),
          amplitude: p.random(50, 230),
          period: p.random(200, 800),
          dx: 0,
          yvalues: [],
        };

        wave.dx = (p.TWO_PI / wave.period) * wave.xspacing;
        wave.yvalues = new Array(p.floor(wave.w / wave.xspacing));

        this.waves.push(wave);
      }
    },

    draw(p) {
      p.background("white");
      for (let i = 0; i < this.waves.length; i++) {
        this.calcWave(this.waves[i], p);
        this.renderWave(p.height / 2, this.waves[i], i, p);
      }
    },

    calcWave(wave, p) {
      wave.theta += 0.02;
      let x = wave.theta * p.noise(0.1);
      for (let i = 0; i < wave.yvalues.length; i++) {
        wave.yvalues[i] = p.sin(x) * wave.amplitude * p.noise(0.1);
        x += wave.dx * p.noise(0.01);
      }
    },

    renderWave(baseHeight, wave, i, p) {
      p.noStroke();
      let colorRatio = i / this.numWaves;
      let c = p.lerpColor(p.color("#C2DBDF"), p.color("#068D9D"), colorRatio);
      c.setAlpha(128 + 128 * p.noise(p.millis() / 750));
      p.fill(c);

      // Begin the rectangle shape for the water wave
      p.beginShape();

      // Start from the left edge of the canvas
      p.vertex(0, baseHeight);

      // Iterate through the yvalues and create vertices for the top of the wave
      for (let x = 0; x < wave.yvalues.length; x++) {
        p.vertex(x * wave.xspacing, baseHeight + wave.yvalues[x]);
      }

      // Continue to the right edge of the canvas
      p.vertex(p.width, baseHeight);

      // End the shape for the water wave
      p.endShape(p.CLOSE);
      p.noStroke();

      // p.rect(0, baseHeight, p.windowWidth, 350);
    },
  },
  

  // ... other animations ...

  
];
