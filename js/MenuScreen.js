
'use strict'

const STATUS_MENU = new MenuStatus()
const SAVE_MENU = new SAVEMENU()

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


        this.isNowMenu = "MAP";
    } //constructor() 終

    draw(ctx, canvas) {
        clickItems = [];
        //背景1
        ctx.beginPath()
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = 'white'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();


        const BACKTEXT = new Text(148, -61, this.isNowMenu, '#E8E8E8', 273, false, 'normal', 700, false, 0.5);
        BACKTEXT.draw(ctx);

        const BlackPara = new Parallelogram(this.blackx1, this.blacky1, this.blackx2, this.blacky2, this.blackx3, this.blacky3, this.blackx4, this.blacky4, 0.76, "#000000")
        BlackPara.draw(ctx)
        const bluePara = new Parallelogram(this.bluex1, this.bluey1, this.bluex2, this.bluey2, this.bluex3, this.bluey3, this.bluex4, this.bluey4, 0.42, "#00B1FF")

        bluePara.draw(ctx)
        if (this.isNowMenu == "MAP") {
            const MAP = new Text(1127, 31, "MAP", '#ffffff', 51, false, 'normal', 700, false, 1);
            MAP.draw(ctx)
            clickItems.push(MAP)
        } else {
            const MAP = new Text(1127, 31, "MAP", '#777777', 51, false, 'normal', 700, false, 1);
            MAP.draw(ctx)
            clickItems.push(MAP)
        }
        if (this.isNowMenu == "STATUS") {
            const STATUS = new Text(1276, 31, "STATUS", '#ffffff', 51, false, 'normal', 700, false, 1);
            STATUS.draw(ctx)
            clickItems.push(STATUS)
        } else {
            const STATUS = new Text(1276, 31, "STATUS", '#777777', 51, false, 'normal', 700, false, 1);
            STATUS.draw(ctx)
            clickItems.push(STATUS)

        }
        if (this.isNowMenu == "SAVE") {
            const SAVE = new Text(1508, 31, "SAVE", '#ffffff', 51, false, 'normal', 700, false, 1);
            SAVE.draw(ctx)
            clickItems.push(SAVE)
        } else {
            const SAVE = new Text(1508, 31, "SAVE", '#777777', 51, false, 'normal', 700, false, 1);
            SAVE.draw(ctx)
            clickItems.push(SAVE)
        }
        if (this.isNowMenu == "SETTING") {
            const SETTING = new Text(1677, 31, "SETTING", '#ffffff', 51, false, 'normal', 700, false, 1);
            SETTING.draw(ctx)
            clickItems.push(SETTING)
        } else {
            const SETTING = new Text(1677, 31, "SETTING", '#777777', 51, false, 'normal', 700, false, 1);
            SETTING.draw(ctx)
            clickItems.push(SETTING)
        }





        const ani = 4;
        console.log(this.isNowMenu)
        //ステータス画面
        if (this.isNowMenu == "STATUS") {
            
            STATUS_MENU.draw(ctx)
            //ステータスのところに青と黒の線が移動
            this.bluex1 += (1948.43 - this.bluex1) / ani;
            this.bluey1 += (-178.83 - this.bluey1) / ani;
            this.bluex2 += (356.75 - this.bluex2) / ani;
            this.bluey2 += (1110.08 - this.bluey2) / ani;
            this.bluex3 += (789.78 - this.bluex3) / ani;
            this.bluey3 += (1644.83 - this.bluey3) / ani;
            this.bluex4 += (2381.46 - this.bluex4) / ani;
            this.bluey4 += (355.92 - this.bluey4) / ani;


            //メニュー画面を開くときのアニメーション 背景ブラック
            this.blackx1 += (1534.78 - this.blackx1) / ani;
            this.blacky1 += (-169.53 - this.blacky1) / ani;
            this.blackx2 += (-14 - this.blackx2) / ani;
            this.blacky2 += (1084.64 - this.blacky2) / ani;
            this.blackx3 += (92.24 - this.blackx3) / ani;
            this.blacky3 += (1215.83 - this.blacky3) / ani;
            this.blackx4 += (1641.01 - this.blackx4) / ani;
            this.blacky4 += (-38.34 - this.blacky4) / ani;

            STATUS_MENU.x += (0 - STATUS_MENU.x) / 3;
            STATUS_MENU.y += (0 - STATUS_MENU.y) / 3;
        }
        //セーブ画面
        if (this.isNowMenu == "SAVE") {
            SAVE_MENU.draw(ctx)

            //ステータスのところに青と黒の線が移動
            this.bluex1 += (2101.32 - this.bluex1) / ani;
            this.bluey1 += (-171.33 - this.bluey1) / ani;
            this.bluex2 += (509.64 - this.bluex2) / ani;
            this.bluey2 += (1117.58 - this.bluey2) / ani;
            this.bluex3 += (942.68 - this.bluex3) / ani;
            this.bluey3 += (1652.33 - this.bluey3) / ani;
            this.bluex4 += (2534.36 - this.bluex4) / ani;
            this.bluey4 += (363.42 - this.bluey4) / ani;


            //メニュー画面を開くときのアニメーション 背景ブラック
            this.blackx1 += (1719.67 - this.blackx1) / ani;
            this.blacky1 += (-186.53 - this.blacky1) / ani;
            this.blackx2 += (170.9 - this.blackx2) / ani;
            this.blacky2 += (1067.64- this.blacky2) / ani;
            this.blackx3 += (277.13 - this.blackx3) / ani;
            this.blacky3 += (1198.83 - this.blacky3) / ani;
            this.blackx4 += (1825.91 - this.blackx4) / ani;
            this.blacky4 += (-55.34 - this.blacky4) / ani;

        }

        // 1833.42,-248.04,133.02,1128.92,566.05,1663.67,2266.45,286.71,
        //メニュー画面を開くときのアニメーション 背景ブルー
        if (this.isNowMenu == "MAP") {
            this.bluex1 += (1833.42 - this.bluex1) / ani;
            this.bluey1 += (-248.04 - this.bluey1) / ani;
            this.bluex2 += (133.02 - this.bluex2) / ani;
            this.bluey2 += (1128.92 - this.bluey2) / ani;
            this.bluex3 += (566.05 - this.bluex3) / ani;
            this.bluey3 += (1663.67 - this.bluey3) / ani;
            this.bluex4 += (2266.45 - this.bluex4) / ani;
            this.bluey4 += (286.71 - this.bluey4) / ani;

            //1311.04,-150.7,-237.73,1103.47,-131.49,1234.66,1417.28,-19.51
            //メニュー画面を開くときのアニメーション 背景ブラック
            this.blackx1 += (1311.04 - this.blackx1) / ani;
            this.blacky1 += (-150.7 - this.blacky1) / ani;
            this.blackx2 += (-237.73 - this.blackx2) / ani;
            this.blacky2 += (1103.47 - this.blacky2) / ani;
            this.blackx3 += (-131.49 - this.blackx3) / ani;
            this.blacky3 += (1234.66 - this.blacky3) / ani;
            this.blackx4 += (1417.28 - this.blackx4) / ani;
            this.blacky4 += (-19.51 - this.blacky4) / ani;

        }

        

        //アルファ値を濃くする
        this.alpha += 0.08
        if (this.alpha >= 0.5) {
            IsGameScreen.isclick = false
        }
    }
}
