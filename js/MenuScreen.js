
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
        //背景1
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'black'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        //背景２
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.moveTo(0, 0); // 始点
        ctx.lineTo(aspect(1920), 0); // 右上
        ctx.lineTo(aspect(1920), aspect(1097.62)); // 右下
        ctx.lineTo(aspect(917), aspect(1097.62)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#11B1F4'; // 色の指定
        ctx.fill(); // 塗りつぶし


        // Menu表

        //　枠線のテキスト
        ctx.font = '700 normal ' + aspect(154) + 'px "aktiv-grotesk", sans-serif';
        ctx.strokeStyle = "white";
        ctx.lineWidth = aspect(2);
        ctx.strokeText("EQUIP&STATUS", aspect(39), aspect(-32) + aspect(154));
        
        //MAPボタン
        const MAP = new Text(39, 280, "MAP", 'white', 80, false, 'normal', 400, false);
        MAP.draw(ctx);
        clickItems.push(MAP);

        //EQUIP&STATUSボタン
        const EQUIP_STATUS = new Text(39, 383, "EQUIP&STATUS", 'white', 80, false, 'normal', 400,true);
        EQUIP_STATUS.draw(ctx);
        clickItems.push(EQUIP_STATUS);

        // SKILL ボタン
        const SKILL = new Text(39, 486, "SKILL", 'white', 80, false, 'normal', 400);
        SKILL.draw(ctx);
        clickItems.push(SKILL);

        // SAVEボタン
        const SAVE = new Text(39, 588, "SAVE", 'white', 80, false, 'normal', 400);
        SAVE.draw(ctx);
        clickItems.push(SAVE);

        //SETTINGボタン
        const SETTING = new Text(39, 691, "SETTING", 'white', 80, false, 'normal', 400);
        SETTING.draw(ctx);
        clickItems.push(SETTING);

        //CLOSE ボタン
        const CLOSE = new Text(39, 794.61, "CLOSE", 'white', 80, false, 'normal', 400);
        CLOSE.draw(ctx);
        clickItems.push(CLOSE);


        const charaPara = new Parallelogram(371, 885, 784, 885, 746, 1047, 334, 1047, 0.6, "#00AEEB")
        charaPara.draw(ctx);
        clickItems.push(charaPara);
        const charaPara2 = new Parallelogram(371 + 479, 885, 784 + 479, 885, 746 + 479, 1047, 334 + 479, 1047, 0.6, "#00AEEB")
        charaPara2.draw(ctx);
        clickItems.push(charaPara2);
    }
}