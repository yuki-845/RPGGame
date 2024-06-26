'use strict'
const TitleImage = new Img("img/Title.png", 6.85, 235.71, 1906.5, 609, 1.0)

const TitleHeleneAnimation = [];
for(let i = 0; i < 105; i++) {
    if(0 <= i && 10 > i) {
        const img = new Img('img/animation/Scene1_00'+ i + '.png', -98, 0, 1199, 1199, 1.0)
        TitleHeleneAnimation.push(img);
    }else if(10 <= i && 100 > i){
        const img = new Img('img/animation/Scene1_0'+ i + '.png',  -98, 0, 1199, 1199, 1.0)
        TitleHeleneAnimation.push(img);
    }else {
        const img = new Img('img/animation/Scene1_'+ i + '.png', -98, 0, 1199, 1199, 1.0)
        TitleHeleneAnimation.push(img);
    }
    
}
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

        this.x1 = 1920
    } //constructor() 終了

    draw(ctx, canvas) {


        clickItems = [];

        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#ffffff'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();
        //Helene
        // HeleneTitleImage.draw(ctx)
        if(countAnimation % 1 == 0) {
            TitleHeleneAnimation[countAnimation % 105].draw(ctx)
        }else  {
            TitleHeleneAnimation[(countAnimation - 0.5) % 105].draw(ctx)
        }
        
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
        if (!IsNewGameOR.isclick && isTitleScreenOnMouse.isOnMouse && isTitleScreenOnMouse.text == "NEW GAME") {
            ctx.beginPath();
            ctx.globalAlpha = this.alpha;
            ctx.moveTo(aspect(this.x1), aspect(631 + 44)); // 始点
            ctx.lineTo(aspect(2062), aspect(631 + 44)); // 右上
            ctx.lineTo(aspect(2062), aspect(631 + 44 + 96)); // 右下
            ctx.lineTo(aspect(this.x1), aspect(631 + 44 + 96)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = "#001DFF" // 色の指定
            ctx.fill(); // 塗りつぶし

            this.x1 += (1172 - this.x1) / 12

        } 
        const newgame = new Text(1195, 631, "NEW GAME", 'white', 96, false, "normal", 200)
        newgame.draw(ctx)
        clickItems.push(newgame);


        // 'LoadGame’　テキスト
        if (!IsNewGameOR.isclick && isTitleScreenOnMouse.isOnMouse && isTitleScreenOnMouse.text == "LOAD GAME") {
            ctx.beginPath();
            ctx.globalAlpha = this.alpha;
            ctx.moveTo(aspect(this.x1), aspect(754 + 44)); // 始点
            ctx.lineTo(aspect(2062), aspect(754 + 44)); // 右上
            ctx.lineTo(aspect(2062), aspect(754 + 44 + 96)); // 右下
            ctx.lineTo(aspect(this.x1), aspect(754 + 44 + 96)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = "#001DFF" // 色の指定
            ctx.fill(); // 塗りつぶし

            this.x1 += (1172 - this.x1) / 12
        } 
        const loadgame = new Text(1270, 754, "LOAD GAME", 'white', 96, false, "normal", 200)

        loadgame.draw(ctx)
        clickItems.push(loadgame);
        console.log(isTitleScreenOnMouse.isOnMouse)

        // 'Setting’　テキスト
        if (!IsNewGameOR.isclick && isTitleScreenOnMouse.isOnMouse && isTitleScreenOnMouse.text == "SETTING") {
            ctx.beginPath();
            ctx.globalAlpha = this.alpha;
            ctx.moveTo(aspect(this.x1), aspect(877 + 44)); // 始点
            ctx.lineTo(aspect(2062), aspect(877 + 44)); // 右上
            ctx.lineTo(aspect(2062), aspect(877 + 44 + 96)); // 右下
            ctx.lineTo(aspect(this.x1), aspect(877 + 44 + 96)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = "#001DFF" // 色の指定
            ctx.fill(); // 塗りつぶし

            this.x1 += (1172 - this.x1) / 12
        } 
        const setting = new Text(1345, 877, "SETTING", 'white', 96, false, "normal", 200)
        setting.draw(ctx)
        clickItems.push(setting);


    }
}

