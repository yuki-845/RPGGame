'use strict'


class Text {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( x, y , text, color, fontsize ,ismouse ,weight,w) {
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
        
        this.w = w || 700;
	} //constructor() 終了
    draw (ctx) {
        
       
        this.x = aspect(this.x)
        this.y = aspect(this.y)
        ctx.beginPath();
        // let angleInRadians = this.angle * Math.PI / 180; // 45度の角度をラジアンに変換
        

        // ctx.rotate(angleInRadians); // 角度を回転
        ctx.globalAlpha = 1.0;
        // ctx.font = this.weight + ' ' + aspect(this.fontsize) +'px "Aktiv.Grotesk", sans-serif';
        ctx.font = this.w +' ' + this.weight+ ' '+ aspect(this.fontsize) + 'px "aktiv-grotesk", sans-serif'
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y + aspect(this.fontsize));
        ctx.fill();
        
        this.h = aspect(this.fontsize);
        this.w = ctx.measureText(this.text).width;
        
        
        
    }
    
    testHit(clickX, clickY) {
        return (this.x <= clickX && clickX <= this.x + this.w) &&
               (this.y <= clickY && clickY <= this.y + this.h);
    }
}

