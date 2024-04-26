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
	constructor( x, y , text, color, fontsize ) {
		//canvas要素を作成
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color
        this.fontsize = fontsize;
	} //constructor() 終了
    draw (canvas) {
        var ctx = canvas.getContext("2d");
        this.x = aspect(this.x)
        this.y = aspect(this.y)
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = aspect(this.fontsize) +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = this.color;
        ctx.fillText('Load Game', this.x, this.y + this.fontsize);
        ctx.fill();

    }
}
