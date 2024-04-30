'use strict'

/**
 * スプライトに関してのクラス
 */
class BattleScreen {

	/**
	 * 引数
	 * img : 画像ファイルまでのパス
	 * width : 画像の表示する範囲（横幅）
	 * height : 画像の表示する範囲（縦幅）
	 */
	constructor(  width, height ) {
		
		
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
