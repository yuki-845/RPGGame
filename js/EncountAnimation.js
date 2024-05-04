class EncoutAnimation {

    constructor(y) {
        this.linewidth = 0
        this.lineheight = 2
        this.animation = false;
   
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#3405FC'; // 四角形の塗りつぶし色
        
        ctx.fillRect(0, (screenHeight / 2) - this.lineheight / 2, this.linewidth, this.lineheight); // (x, y, width, height)
        ctx.fill();
    }
}