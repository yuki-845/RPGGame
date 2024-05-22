'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
let clickItems = [];
class TitleScreen {

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

    draw(ctx, canvas) {


        clickItems = [];

        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        //Title
        const text = new Text(145, 43, "Soul Burn Dread", 'white', 106, false);
        text.draw(ctx)

        //'New Game'テキスト

        const newgame = new Text(558, 397, "New Game", 'white', 106, false)
        newgame.draw(ctx)
        clickItems.push(newgame);


        // 'LoadGame’　テキスト
        const loadgame = new Text(558, 553, "Load Game", 'white', 106, false)
        loadgame.draw(ctx)
        clickItems.push(loadgame);

        //     // canvas.addEventListener('mousemove', function(event) {
        //     //     // クリックされた座標を取得
        //     //     const clickX = event.clientX - canvas.getBoundingClientRect().left;
        //     //     const clickY = event.clientY - canvas.getBoundingClientRect().top;

        //     //     // テキストの領域内でクリックされたかどうかを判定
        //     //     items.forEach(item => {
        //     //         if (item.testHit(clickX, clickY)) {
        //     //             item.ismouse = true;
        //     //         }else {
        //     //             item.ismouse = false;
        //     //         }
        //     //     });

        //     // });


    }
}

