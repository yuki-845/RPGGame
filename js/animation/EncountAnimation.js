class EncoutAnimation {

    constructor(y1,y2,y3,y4,screenWidth) {
        this.linewidth = 0
        this.lineheight = 3
        this.animation = false;
        this.whiteRec = false;

        this.y1 = y1
        this.y2 = y2
        this.y3 = y3 
        this.y4 = y4

        this.alpha = 1;
        this.isblue = true

        this.screenWidth = screenWidth
    }

    draw(ctx) {

        if (this.isblue) {
            ctx.beginPath()
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = '#3405FC'; // 四角形の塗りつぶし色
            ctx.fillRect(0, (screenHeight / 2) - this.lineheight / 2, this.linewidth, this.lineheight); // (x, y, width, height)
            ctx.fill();

        }


        if (this.whiteRec) {


            ctx.beginPath();
            ctx.globalAlpha = this.alpha;
            ctx.moveTo(0, aspect(this.y1)); // 始点
            ctx.lineTo(this.screenWidth, aspect(this.y2)); // 右上
            ctx.lineTo(this.screenWidth, aspect(this.y3)); // 右下
            ctx.lineTo(0, aspect(this.y4)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = 'white'; // 色の指定
            ctx.fill(); // 塗りつぶし
        }


    }
}