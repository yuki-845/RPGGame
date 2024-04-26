'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
let screenWidth = 960;
let screenHeight = 540;
class Game {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( width, height ) {
		//canvas要素を作成
		// Canvas要素を作成し、サイズを設定し、bodyに追加
        this.canvas = document.createElement('canvas');
        
        const scale = window.devicePixelRatio || 1;
        this.canvas.width = width || (screenWidth * scale);
        this.canvas.height = height || (screenHeight * scale);
        document.body.appendChild(this.canvas);

        // getContext('2d')メソッドを呼び出してコンテキストを取得
        const ctx = this.canvas.getContext('2d');

        // ピクセル比を取得し、Canvasの解像度を改善
        
        this.canvas.width = this.canvas.width * scale;
        this.canvas.height = this.canvas.height * scale;
        ctx.scale(scale, scale);
        this.canvas.style.width = screenWidth + 'px'
        this.canvas.style.height = screenHeight +'px'

        this.objs = [];
        
	} //constructor() 終了
	/**
	 * startメソッドを呼び出すことで、メインループが開始される
	 */
	start() {
		//メインループを呼び出す
		this._mainLoop();
	} //start() 終了
    add( obj ) {
		//this.objs配列の末尾に、objの値を追加
		this.objs.push( obj );
	} //add() 終了

	/**
	 * メインループ
	 */
	_mainLoop() {
		//画家さん（コンテキスト）を呼ぶ
		const ctx = this.canvas.getContext( '2d' );
		//塗りつぶしの色に、黒を指定する
		ctx.fillStyle = '#ffffff';
		//左上から、画面のサイズまでを、塗りつぶす
		ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
        for ( let i=0; i<this.objs.length; i++ ) {
			//スプライトやテキストなど、すべてのオブジェクトのupdateメソッドを呼び出す
			this.objs[i].update( this.canvas );
		}
        

		//自分自身（_mainLoop）を呼び出して、ループさせる
		requestAnimationFrame( this._mainLoop.bind( this ) );
	} //_mainLoop() 終了

}