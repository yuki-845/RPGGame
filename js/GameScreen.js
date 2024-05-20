'use strict'

const Helene = new Sprite('img/charaChip/Helene.png');
const Laura = new Sprite('img/charaChip/Laura.png');
const encoutnanimation = new EncoutAnimation(583, 435, 533, 714, screenWidth);
let hukidasi = new Image();
hukidasi.src = 'img/吹出し.png';
const characterIcon = new Image()
characterIcon.src = "img/CharacterIcon.png"

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
        ctx.drawImage(chapter01background, aspect(0), aspect(-189), aspect(1953), aspect(1302));
       const map = new MapSprite(MapChapter01_Under.image,aspect(64),MapChapter01_Under.map)
       map.draw(ctx)

        Helene.draw(ctx);
        Laura.draw(ctx)
        if (this.isTalk) {
            if (talk.chapter01.length == this.TalkIndex) {
                this.isTalk = false

            }
            let key = Object.keys(talk.chapter01[this.TalkIndex]);
            
            ctx.drawImage(hukidasi, Helene.x - aspect(161), Helene.y - aspect(330), aspect(940.92), aspect(370.05));
            ctx.drawImage(characterIcon, Helene.x - aspect(161), Helene.y - aspect(330), aspect(197), aspect(262));
            if (this.TalkIndex <= talk.chapter01.length - 1) {
                
                console.log(key)
             
                const talkText = new Text(Helene.x - aspect(-60), Helene.y  - aspect(180), talk.chapter01[this.TalkIndex][key], 'white', 28, false,'normal',700);
                talkText.drawText(ctx);
            }
            
            


            if (talk.chapter01.length == this.TalkIndex) {
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

