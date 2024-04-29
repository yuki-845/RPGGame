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
		this.x = this.y = 300;
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


    onenterframe() {}
}
