'use strict'
const mainCharacter = new Sprite('img/MainCharacter.png');
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
    } //constructor() 終

    draw(ctx, canvas) {

        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();
        //Title
        const text = new Text(145, 43, "Title", 'white', 106, false);
        text.draw(ctx)
        mainCharacter.draw(ctx);

        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, 300, 300); // (x, y, width, height)
        ctx.fill();

        // 平行四辺形のパスを作成
        ctx.beginPath();
        ctx.moveTo(100, 100); // 左上
        ctx.lineTo(300, 100); // 右上
        ctx.lineTo(250, 200); // 右下
        ctx.lineTo(150, 200); // 左下
        ctx.closePath(); // パスを閉じる

        // パスを描画してボタンを表示
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.fill();

        canvas.addEventListener("click", function (event) {
            const mouseX = event.clientX - canvas.getBoundingClientRect().left;
            const mouseY = event.clientY - canvas.getBoundingClientRect().top;
            IsGameScreen.isclick = false;
            IsBattleScreen.isclick = true;
        });
    }
}

