
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
        ctx.fillStyle = 'white'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        const MAP = new Text(148, -61, "MAP", '#E8E8E8', 273, false, 'normal', 700, false,0.5);
        MAP.draw(ctx);

        const BlackPara = new Parallelogram(1311.04,-150.7,-237.73,1103.47,-131.49,1234.66,1417.28,-19.51,0.76,"#000000")
        BlackPara.draw(ctx)

        const bluePara = new Parallelogram(1833.42,-248.04,133.02,1128.92,566.05,1663.67,2266.45,286.71,0.42,"#00B1FF")
        bluePara.draw(ctx)

        
        const map = new Text(1127, 31, "MAP", '#ffffff', 51, false, 'normal', 700, false,1);
        map.draw(ctx)
        const status = new Text(1276, 31, "STATUS", '#777777', 51, false, 'normal', 700, false,1);
        status.draw(ctx)
        const save = new Text(1508, 31, "SAVE", '#777777', 51, false, 'normal', 700, false,1);
        save.draw(ctx)
        const SETTING = new Text(1677, 31, "SETTING", '#777777', 51, false, 'normal', 700, false,1);
        SETTING.draw(ctx)

    }
}