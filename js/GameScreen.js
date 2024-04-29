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
    

    draw(ctx) {
        
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

