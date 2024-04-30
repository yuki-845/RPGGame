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
	constructor( x, y , text, color, fontsize ,ismouse ,weight) {
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
	} //constructor() 終了
    draw (ctx) {
        
       
        this.x = aspect(this.x)
        this.y = aspect(this.y)
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = this.weight + ' ' + aspect(this.fontsize) +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y + aspect(this.fontsize));
        ctx.fill();
        
        this.h = this.fontsize;
        this.w = ctx.measureText(this.text).width;
        this.x = this.x 
        this.y = this.y

    }
    
    testHit(clickX, clickY) {
        return (this.x <= clickX && clickX <= this.x + this.w) &&
               (this.y <= clickY && clickY <= this.y + this.h);
    }
}

