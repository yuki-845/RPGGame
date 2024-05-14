
'use strict'


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
        this.isAnimation = false;

        //背景のアルファ値調整
        this.alpha = 0.1

        // ブルーの背景を動かすようにする変数
        this.bluex1 = 3337
        this.bluey1 = -1494

        this.bluex2 = 1706
        this.bluey2 = -174

        this.bluex3 = 2139
        this.bluey3 = 360

        this.bluex4 = 3770
        this.bluey4 = -960

        //ブラックの背景を動かすようにする変数
        this.blackx1 = 2884.04
        this.blacky1 = -1453.7

        this.blackx2 = 1335.27
        this.blacky2 = -199.53

        this.blackx3 = 1441.51
        this.blacky3 = -68.34

        this.blackx4 = 2990.28
        this.blacky4 = -1322.51


        this.isNowMenu = "";
    } //constructor() 終

    draw(ctx, canvas) {
        clickItems = [];
        //背景1
        ctx.beginPath()
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = 'white'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();


        const MAP = new Text(148, -61, "STATUS", '#E8E8E8', 273, false, 'normal', 700, false, 0.5);
        MAP.draw(ctx);

        const BlackPara = new Parallelogram(this.blackx1, this.blacky1, this.blackx2, this.blacky2, this.blackx3, this.blacky3, this.blackx4, this.blacky4, 0.76, "#000000")
        BlackPara.draw(ctx)
        const bluePara = new Parallelogram(this.bluex1, this.bluey1, this.bluex2, this.bluey2, this.bluex3, this.bluey3, this.bluex4, this.bluey4, 0.42, "#00B1FF")

        bluePara.draw(ctx)



        const map = new Text(1127, 31, "MAP", '#ffffff', 51, false, 'normal', 700, false, 1);
        map.draw(ctx)
        clickItems.push(map)

        const status = new Text(1276, 31, "STATUS", '#777777', 51, false, 'normal', 700, false, 1);
        status.draw(ctx)
        clickItems.push(status)

        const save = new Text(1508, 31, "SAVE", '#777777', 51, false, 'normal', 700, false, 1);
        save.draw(ctx)
        clickItems.push(save)
        const SETTING = new Text(1677, 31, "SETTING", '#777777', 51, false, 'normal', 700, false, 1);
        SETTING.draw(ctx)
        clickItems.push(SETTING)

        if(this.isNowMenu == "STATUS") {
            const STATUS_MENU = new MenuStatus()
            STATUS_MENU.draw(ctx)

        }

        // 1833.42,-248.04,133.02,1128.92,566.05,1663.67,2266.45,286.71,
        //メニュー画面を開くときのアニメーション 背景ブルー
        const ani = 4;
        this.bluex1 += aspect(1833.42 - this.bluex1) / ani;
        this.bluey1 += aspect(-248.04 - this.bluey1) / ani;
        this.bluex2 += aspect(133.02 - this.bluex2) / ani;
        this.bluey2 += aspect(1128.92 - this.bluey2) / ani;
        this.bluex3 += aspect(566.05 - this.bluex3) / ani;
        this.bluey3 += aspect(1663.67 - this.bluey3) / ani;
        this.bluex4 += aspect(2266.45 - this.bluex4) / ani;
        this.bluey4 += aspect(286.71 - this.bluey4) / ani;

        //1311.04,-150.7,-237.73,1103.47,-131.49,1234.66,1417.28,-19.51
        //メニュー画面を開くときのアニメーション 背景ブラック
        this.blackx1 += aspect(1311.04 - this.blackx1) / ani;
        this.blacky1 += aspect(-150.7 - this.blacky1) / ani;
        this.blackx2 += aspect(-237.73 - this.blackx2) / ani;
        this.blacky2 += aspect(1103.47 - this.blacky2) / ani;
        this.blackx3 += aspect(-131.49 - this.blackx3) / ani;
        this.blacky3 += aspect(1234.66 - this.blacky3) / ani;
        this.blackx4 += aspect(1417.28 - this.blackx4) / ani;
        this.blacky4 += aspect(-19.51 - this.blacky4) / ani;

        //アルファ値を濃くする
        this.alpha += 0.08
    }
}
