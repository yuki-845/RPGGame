'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class TitleScreen {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( width, height ) {
		//canvas要素を作成
        this.width = width
        this.height = height
	} //constructor() 終了
    update( canvas ) {
		//画像などを画面に表示するためのメソッドを呼び出す
		this.draw( canvas );
		//スプライトを動かしたり、なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
	} //update() 終了

    draw (canvas) {
        var ctx = canvas.getContext("2d");
        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

    
        let x = aspect(145);
        let y = aspect(43);
        let textsize = aspect(106)
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = textsize +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = 'white';
        ctx.fillText('Title', x, y + textsize);
        ctx.fill();


        //'New Game'テキスト
        x = aspect(558);
        y = aspect(397);
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = textsize +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = 'white';
        ctx.fillText('NewGame', x, y + textsize);
        ctx.fill();


        
        // 'LoadGame’　テキスト
        x = aspect(558);
        y = aspect(553);
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        ctx.font = textsize +'px ヒラギノ明朝 ProN';
        ctx.fillStyle = 'white';
        ctx.fillText('Load Game', x, y + textsize);
        ctx.fill();
        

    }
}
