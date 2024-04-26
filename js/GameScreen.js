'use strict'
class GameScreen {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(width, height) {
        //canvas要素を作成
        this.width = width
        this.height = height
    } //constructor() 終了
    update(canvas) {
        //画像などを画面に表示するためのメソッドを呼び出す   
        if(IsNewGameOR.isclick) {
            this.draw(canvas); 
        }
        
        //スプライトを動かしたり,なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
    } //update() 終了

    draw(canvas) {
        var ctx = canvas.getContext("2d");
        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        
        //Title
        const text = new Text(145, 43, "Title", 'white', 106,false);
        text.draw(canvas)
    }
}

