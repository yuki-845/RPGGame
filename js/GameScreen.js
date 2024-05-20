'use strict'

const Helene = new Sprite('img/charaChip/Helene.png');
const Laura = new Sprite('img/charaChip/Laura.png');

Helene.x = 300;
Helene.y = 300;
Laura.x = 400;
Laura.y = 400
const encoutnanimation = new EncoutAnimation(583, 435, 533, 714, screenWidth);
//吹き出し画像
let speech_bubble = new Image();
speech_bubble.src = 'img/speech_bubble.png';
//吹き出し画像反転
let speech_bubble_reverse = new Image();
speech_bubble_reverse.src = 'img/speech_bubble_reverse.png'
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
        const map = new MapSprite(MapChapter01_Under.image, aspect(64), MapChapter01_Under.map)
        map.draw(ctx)

        Helene.draw(ctx);

        Laura.draw(ctx)
        if (this.isTalk) {
            if(this.TalkIndex === talk.chapter01.length) {
                this.isTalk = false
                this.TalkIndex = 0;
            }
            let key = Object.keys(talk.chapter01[this.TalkIndex]);
            
            let Character_x = 0;
            let Character_y = 0;

            if(key[0] == "ラウラ") {
                Character_x = Laura.x
                Character_y = Laura.y
            }else if(key[0] == "ヘレーネ") {
                Character_x = Helene.x
                Character_y = Helene.y
            }


            ctx.drawImage(speech_bubble, Character_x - aspect(161), Character_y - aspect(330), aspect(940.92), aspect(370.05));
            ctx.drawImage(characterIcon, Character_x - aspect(161), Character_y - aspect(330), aspect(197), aspect(262));
            if (this.TalkIndex <= talk.chapter01.length - 1) {
                console.log(key)

                const talkText = new Text(Character_x - aspect(-60), Character_y - aspect(180), talk.chapter01[this.TalkIndex][key], 'white', 28, false, 'normal', 700);
                talkText.drawText(ctx);
            }

            console.log(talk.chapter01)
        }
        console.log(this.TalkIndex)
        console.log(this.isTalk)
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

