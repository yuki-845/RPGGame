class EncoutAnimation {

    constructor(y) {
        this.linewidth = 0
        this.lineheight = 2
        this.animation = false;
        this.whiteRec = false;


        this.whiteLineHeight = 10;

        this.alpha = 1;
        this.isblue = true
    }

    draw(ctx) {

        if (this.isblue) {
            ctx.beginPath()
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#3405FC'; // 四角形の塗りつぶし色
            ctx.fillRect(0, (screenHeight / 2) - this.lineheight / 2, this.linewidth, this.lineheight); // (x, y, width, height)
            ctx.fill();

        }


        if (this.whiteRec) {


            ctx.beginPath()
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = 'white'; // 四角形の塗りつぶし色
            ctx.fillRect(0, (screenHeight / 2) - this.whiteLineHeight / 2, this.linewidth, this.whiteLineHeight); // (x, y, width, height)
            ctx.fill();
        }


    }
}