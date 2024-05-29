'use strict'
const TitleImage = new Img("img/Title.png", 6.85, 235.71, 1906.5, 609, 1.0)
const HeleneTitleImage = new Img("img/HeleneTitle.png", -223, -255, 1493, 1493, 1.0)
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
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#CADBEE'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();
        //Helene
        HeleneTitleImage.draw(ctx)
        ctx.beginPath()
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = '#000000'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        //背景２
        const back2 = new Parallelogram(830.75, -48.51, 2021.12, 0, 1958.72, 1080, 423.7, 1080, 1, "#00AEEB")
        back2.draw(ctx)
        //Title
        TitleImage.draw(ctx)


        //'New Game'テキスト
        if (isTitleScreenOnMouse.isOnMouse && isTitleScreenOnMouse.text == "NEW GAME") {
            ctx.beginPath()
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#001DFF'; // 四角形の塗りつぶし色
            ctx.fillRect(1172, 675, 890, 114); // (x, y, width, height)
            ctx.fill();
        }

        const newgame = new Text(1195, 631, "NEW GAME", 'white', 96, false, "normal", 200)
        newgame.draw(ctx)
        clickItems.push(newgame);


        // 'LoadGame’　テキスト
        const loadgame = new Text(1270, 754, "LOAD GAME", 'white', 96, false, "normal", 200)

        loadgame.draw(ctx)
        clickItems.push(loadgame);
        console.log(isTitleScreenOnMouse.isOnMouse)

        // 'Setting’　テキスト
        const setting = new Text(1345, 877, "SETTING", 'white', 96, false, "normal", 200)
        setting.draw(ctx)
        clickItems.push(setting);


    }
}

