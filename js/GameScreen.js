'use strict'

const mainCharacter = new Sprite('img/MainCharacter.png');
const encoutnanimation = new EncoutAnimation(583, 435, 533, 714, screenWidth);
let hukidasi = new Image();
hukidasi.src = 'img/吹出し.png';


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
        this.isTalk = true;

        this.TalkIndex = 0;

    } //constructor() 終

    draw(ctx, canvas) {

        clickItems = [];


        // Titleの背景
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#00AEEB'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();
        //Title
        const text = new Text(145, 43, "Title", 'white', 106, false);
        text.draw(ctx)
        clickItems.push(text)

        mainCharacter.draw(ctx);
        if (this.isTalk) {
            ctx.drawImage(hukidasi,mainCharacter.x - aspect(161), mainCharacter.y- aspect(330), aspect(888.92), aspect(349.05));

            var key = Object.keys(talk.chapter01[this.TalkIndex]);
            const talkText = new Text(145, 43, talk.chapter01[this.TalkIndex][key], 'white', 106, false);
            talkText.draw(ctx)
            if (talk.chapter01.length - 1 == this.TalkIndex) {
                this.isTalk = false
                this.TalkIndex = 0;
            }
        }

        if (encoutnanimation.animation) {
            ctx.globalAlpha = 1;
            encoutnanimation.draw(ctx);
            encoutnanimation.linewidth += screenWidth / 8;

            if (encoutnanimation.linewidth >= screenWidth * 4) {
                encoutnanimation.lineheight += screenHeight / 25
                encoutnanimation.y = (screenHeight / 2) - encoutnanimation.lineheight / 2;
                if (encoutnanimation.lineheight >= screenHeight / 1.2) {
                    IsGameScreen.isclick = false;
                    IsBattleScreen.isclick = true;

                }
                if (encoutnanimation.lineheight >= screenHeight / 2) {
                    encoutnanimation.whiteRec = true;
                }
            }
            if (encoutnanimation.whiteRec) {
                encoutnanimation.y1 -= screenHeight / 30;
                encoutnanimation.y2 -= screenHeight / 30;
                encoutnanimation.y3 += screenHeight / 30;
                encoutnanimation.y4 += screenHeight / 30;
            }
        }


    }
}

