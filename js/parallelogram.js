'use strict'


class Parallelogram {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor(mx1,my1,mx2,my2,mx3,my3,mx4,my4,alpha,color) {
		//canvas要素を作成

        this.mx1 = mx1
        this.my1 = my1
        this.mx2 = mx2
        this.my2 = my2
        this.mx3 = mx3
        this.my3 = my3
        this.mx4 = mx4;
        this.my4 = my4;
        this.alpha = alpha || 1
        this.color = color
        
	} //constructor() 終了
    draw (ctx) {
        ctx.beginPath();
        ctx.globalAlpha = this.alpha;
        ctx.moveTo(aspect(this.mx1), aspect(this.my1)); // 始点
        ctx.lineTo(aspect(this.mx2), aspect(this.my2)); // 右上
        ctx.lineTo(aspect( this.mx3), aspect(this.my3)); // 右下
        ctx.lineTo(aspect(this.mx4), aspect(this.my4)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = this.color; // 色の指定
        ctx.fill(); // 塗りつぶし

    }
    
    testHit(clickX, clickY) {
        
    }
}

