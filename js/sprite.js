'use strict'

/**
 * スプライトに関してのクラス
 */
class Sprite {

	/**
	 * 引数
	 * img : 画像ファイルまでのパス
	 * width : 画像の表示する範囲（横幅）
	 * height : 画像の表示する範囲（縦幅）
	 */
	constructor( img, width, height ) {
		//this.imgに、あなたは画像ですよ、と教える
		this.img = new Image();
		//this.img.srcに画像ファイルまでのパスを代入
		this.img.src = img;
		//画像の初期位置
		this.x = this.y = 200;
		//画像を表示する範囲の横幅。引数widthが指定されていない場合、this.widthに32を代入
		this.width = width || 32;
		//画像を表示する範囲の縦幅。引数heightが指定されていない場合、this.heightに32を代入
		this.height = height || 32;
		//何番目の画像を表示するか
		this.frame = 0;
	} //constructor() 終了

	
	/**
	 * 画像などを画面に表示するためのメソッド
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	draw(ctx ) {
		
		//X,Y方向に、何番目の画像か
		const _frameX = this.frame % ( this.img.width / this.width );
		const _frameY = ~~( this.frame / ( this.img.width / this.width ) );

		//画家さんに、絵を描いてとお願いする
		ctx.drawImage(
			this.img,
			this.width * _frameX,
			this.height * _frameY,
			this.width,
			this.height,
			this.x,
			this.y,
			this.width,
			this.height
		);
	} //render() 終了
    moveTowardsMouse(mouseX, mouseY) {
        // マウスの位置とキャラクターの位置の差を計算し、速度として使用する
        const dx = mouseX - (this.x + 16); // 16 はキャラクターの幅の半分
        const dy = mouseY - (this.y + 16); // 16 はキャラクターの高さの半分
        console.log(this.x, this.y);
        const angle = Math.atan2(dy, dx);
        const speed = 3;
        let angleInDegrees = (angle * 180) / Math.PI;
        if (angleInDegrees < 0) {
            angleInDegrees += 360;
        }
        if (Math.abs(dx) > Math.abs(dy)) {
            // 左右方向の移動
            if (dx > 0) {
                // マウスがキャラクターより右側にある場合は右を向きます
                console.log("キャラが右を向いています");
                this.frame = 6;
            } else {
                // マウスがキャラクターより左側にある場合は左を向きます
                console.log("キャラが左を向いています");
                this.frame = 3;
            }
        } else {
            // 上下方向の移動
            if (dy > 0) {
                // マウスがキャラクターより下側にある場合は下を向きます
                console.log("キャラが下を向いています");
                this.frame = 0;
            } else {
                // マウスがキャラクターより上側にある場合は上を向きます
                console.log("キャラが上を向いています");
                this.frame = 9;
            }
        }

        // if (angleInDegrees > 315 || angleInDegrees <= 45) {
        //     console.log("キャラが上を向いています");
        //             this.frame = 9;
        // } else if (angleInDegrees > 45 && angleInDegrees <= 135) {
        //     console.log("キャラが右を向いています");
        //     this.frame = 6;
        // } else if (angleInDegrees > 135 && angleInDegrees <= 225) {
        //     console.log("キャラが下を向いています");
        //     this.frame = 0;
        // } else if (angleInDegrees > 225 && angleInDegrees <= 315) {
        //     console.log("キャラが左を向いています");
        //     this.frame = 3;
        // }

        // キャラクターを移動させます
        this.x += Math.cos(angle) * speed;
        this.y += Math.sin(angle) * speed;



    }

    onenterframe() {}
}
