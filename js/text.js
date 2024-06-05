'use strict'


class Text {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(x, y, text, color, fontsize, ismouse, weight, fontweight, isRect, alpha) {
        //canvas要素を作成

        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color
        this.fontsize = fontsize;
        this.w = 0;
        this.h = 0;
        this.ismouse = ismouse
        this.weight = weight || 'normal'

        this.fontweight = fontweight || 700;

        this.isRect = isRect
        this.alpha = alpha || 1.0
        


    } //constructor() 終了
    draw(ctx) {
        if (this.isRect) {
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#11B1F4'; // 四角形の塗りつぶし色
            ctx.fillRect(aspect(this.x), aspect(this.y) + aspect(35), aspect(587.62), aspect(80)); // (x, y, width, height)
            ctx.fill();

        }


        ctx.beginPath();
        // let angleInRadians = this.angle * Math.PI / 180; // 45度の角度をラジアンに変換


        // ctx.rotate(angleInRadians); // 角度を回転
        ctx.globalAlpha = this.alpha;
        // ctx.font = this.weight + ' ' + aspect(this.fontsize) +'px "Aktiv.Grotesk", sans-serif';
        ctx.font = this.fontweight + ' ' + this.weight + ' ' + aspect(this.fontsize) + 'px "aktiv-grotesk", sans-serif'
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, aspect(this.x), aspect(this.y) + aspect(this.fontsize));
        ctx.fill();

        this.h = aspect(this.fontsize);
        this.w = ctx.measureText(this.text).width;

        



    }
    drawText(ctx,XC) {
        // Split the text at every newline character
        
        
        
        var lines = this.text.split('\n');
        ctx.globalAlpha = this.alpha;
        ctx.font = 400 + ' ' + this.weight + ' ' + aspect(this.fontsize) + 'px "Noto Serif JP", sans-serif'
        ctx.fillStyle = this.color;
        

        

        this.y -= (aspect(this.fontsize) * lines.length) - aspect(25)


        let maxwidth = -1;
        for (let i = 0; i < lines.length; i++) {
            let width = ctx.measureText(lines[i]).width;
            if(maxwidth < width) {
                maxwidth = width
            }

        }
        // Draw each line separately
        for (var i = 0; i < lines.length; i++) {
            console.log((293 + XC) - (maxwidth / 2))
            ctx.fillText(lines[i], (aspect(293) + aspect(XC)) - (maxwidth / 2), aspect(this.y));
            this.y += (aspect(this.fontsize) * 2) + aspect(25); // Move down by line height for the next line
        }
    }


    testHit(clickX, clickY) {
        return (aspect(this.x) <= clickX && clickX <= aspect(this.x) + this.w) &&
            (aspect(this.y) <= clickY && clickY <= aspect(this.y) + this.h);
    }
}

