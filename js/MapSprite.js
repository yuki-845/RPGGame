'use strict'

/**
 * スプライトに関してのクラス
 */
class MapSprite {

	/**
	 * 引数
	 * img : 画像ファイルまでのパス
	 * width : 画像の表示する範囲（横幅）
	 * height : 画像の表示する範囲（縦幅）
	 */
	constructor( img, size,data) {
		this.img = img
		//画像の初期位置
		this.x = this.y = 0;
		//画像を表示する範囲の横幅。引数widthが指定されていない場合、this.widthに32を代入
		this.size = size || 32;
		//二次元配列で数値を入力すると、マップをつくることができる
		this.data = data;
		//何番目の画像を表示するか
	} //constructor() 終了

	
	/**
	 * 画像などを画面に表示するためのメソッド
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	draw(ctx) {
		
		for (let y=0; y<this.data.length; y++) {
			//タイルの縦の位置
			const _tileY = this.size * y + this.y;
			//タイルが、画面から縦にはみ出しているとき、この下をスキップして、次から繰り返し
			if ( _tileY < -1 * this.size || _tileY > screenHeight ) continue;

			//マップの横方向の数だけ繰り返す
			for (let x=0; x<this.data[y].length; x++) {
				//タイルの横の位置
				const _tileX = this.size * x + this.x
				//タイルが、画面から横にはみ出しているとき、この下をスキップして、次から繰り返し
				if ( _tileX < -1 * this.size || _tileX > screenWidth ) continue;

				//X方向に、何番目の画像か
                
				const _frameX = (this.data[y][x] - 1) % ( this.img.width / 32 );
				//Y方向に、何番目の画像か
				const _frameY = ~~( (this.data[y][x] - 1)/ ( this.img.width / 32 ) );

				//画家さん（コンテキスト）を呼ぶ
				
                
				ctx.drawImage(
					this.img,
					32 * _frameX,
					32 * _frameY ,
					32,
					32,
					_tileX,
					_tileY,
					this.size,
					this.size
				);
			}
		}
	} //render() 終了
   

    onenterframe() {}
}
