
'use strict'

const CHARACTEES_TEXT = new Image()
CHARACTEES_TEXT.src = 'img/CHARACTERS.png';

class MenuScreen {

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
        clickItems = [];
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#CCD1E2'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        ctx.beginPath();
        ctx.globalAlpha = 0.7;
        ctx.moveTo(0, 0); // 始点
        ctx.lineTo(aspect(1920), 0); // 右上
        ctx.lineTo(aspect(626), aspect(1101)); // 右下
        ctx.lineTo(0, aspect(1097)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#0009EB'; // 色の指定
        ctx.fill(); // 塗りつぶし

        // Menu表
        const MAP = new Text(348, 41, "MAP", 'white', 54, false, 'italic',400);
        MAP.draw(ctx);
        clickItems.push(MAP);

        const CHARACTEES= new Text(348, 118, "CHARACTERS", 'white', 54, false, 'italic',400);
        CHARACTEES.draw(ctx);
        clickItems.push(CHARACTEES);

        const SAVE = new Text(348, 195, "SAVE", 'white', 54, false, 'italic',400);
        SAVE.draw(ctx);
        clickItems.push(SAVE);

        const SETTING = new Text(348, 272, "SETTING", 'white', 54, false, 'italic',400);
        SETTING.draw(ctx);
        clickItems.push(SETTING);

        const CLOSE = new Text(348, 349, "CLOSE", 'white', 54, false, 'italic',400);
        CLOSE.draw(ctx);
        clickItems.push(CLOSE);
        //テキスト画像
        ctx.drawImage(CHARACTEES_TEXT, aspect(-114), aspect(22), aspect(470), aspect(2496));

        const charaPara = new Parallelogram(371,885,784,885,746,1047,334,1047,0.6,"#00AEEB")
        charaPara.draw(ctx);
        clickItems.push(charaPara);
        const charaPara2 = new Parallelogram(371 + 479,885,784 + 479,885,746 + 479,1047,334 + 479,1047,0.6,"#00AEEB")
        charaPara2.draw(ctx);
        clickItems.push(charaPara2);
    }
}