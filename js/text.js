'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Text {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( x, y , text, color, fontsize ,ismouse ) {
		//canvas要素を作成
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color
        this.fontsize = fontsize;
        this.w = 0;
        this.h = 0;
        this.ismouse = ismouse
	} //constructor() 終了
    draw (canvas) {
        
        var ctx = canvas.getContext("2d");
        this.x = aspect(this.x)
        this.y = aspect(this.y)
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = aspect(this.fontsize) +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y + this.fontsize);
        ctx.fill();
        const scale = window.devicePixelRatio || 1;
        this.h = this.fontsize / scale;
        this.w = ctx.measureText(this.text).width / scale;
        this.x = this.x / scale;
        this.y = this.y / scale;
           
    }
    
    testHit(clickX, clickY) {
        return (this.x <= clickX && clickX <= this.x + this.w) &&
               (this.y <= clickY && clickY <= this.y + this.h);
    }
}

