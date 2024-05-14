class Circle {
    constructor(x, y, r,color) {
      this.x = x;
      this.y = y
      this.r = r;
      this.color = color
    }
  
    draw(ctx) {
    
      ctx.beginPath();
      ctx.arc(aspect(this.x) + aspect(this.r), aspect(this.y) + aspect(this.r), aspect(this.r), 0, Math.PI * 2, true);
      ctx.fillStyle = this.color;
      ctx.fill();

    }
  
    
    testHit(point) {
      return (
        Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) <=
        Math.pow(this.r, 2)
      );
    }
  }