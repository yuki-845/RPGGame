'use strict'
//味方キャラ
const Helene = new Sprite('img/charaChip/Helene.png');
const Laura = new Sprite('img/charaChip/Laura.png');

Helene.x = 600;
Helene.y = 400;
Laura.x = 700;
Laura.y = 400
const encoutnanimation = new EncoutAnimation(583, 435, 533, 714, screenWidth);
//吹き出し画像
const speech_bubble = new Img('img/speech_bubble.png',0,0,840,335.88)

//吹き出し画像反転
const speech_bubble_reverse = new Img('img/speech_bubble_reverse.png',0,0,959.19,383.54);

const characterIcon = new Image()
characterIcon.src = "img/CharacterIcon.png"


//敵キャラ 
const Skeleton = new Sprite("img/enemyChip/Skeleton.png")
Skeleton.x = 650
Skeleton.y = 1200
Skeleton.frame = 10
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
        this.isTalk = false;

        this.TalkIndex = 0;

        this.dontTalk = false

    } //constructor() 終

    draw(ctx, canvas) {

        clickItems = [];


        // Titleの背景
        ctx.globalAlpha = 1
        ctx.drawImage(chapter01background, aspect(0), aspect(-189), aspect(1953), aspect(1302));
        const map = new MapSprite(MapChapter01_Under.image, aspect(64), MapChapter01_Under.map)
        map.draw(ctx)
        Laura.draw(ctx)
        Helene.draw(ctx);

        //チャプター１のはじめのイベント
        if (SaveData.Chapter == 1 && !SaveData.Event_1) {
            Skeleton.draw(ctx)
            console.log("javascript")
            this.isTalk = true
            if (this.TalkIndex >= talk.chapter01.length) {


                encoutnanimation.animation = true
                if (encoutnanimation.lineheight >= screenHeight / 1.2) {

                    this.isTalk = false
                    this.TalkIndex = 0;


                }

            } else {

                let key = Object.keys(talk.chapter01[this.TalkIndex]);

                if (key[0] == "骸") {
                    if (Skeleton.y <= 741) {
                        this.dontTalk = false
                    } else {
                        this.dontTalk = true


                        this.TalkIndex = this.TalkIndex - 1;

                    }

                }
                if (this.dontTalk) {


                    Skeleton.y += (740 - Skeleton.y) / 5;

                }


                let Character_x = 0;
                let Character_y = 0;

                if (key[0] == "ラウラ") {
                    Character_x = Laura.x
                    Character_y = Laura.y
                } else if (key[0] == "ヘレーネ") {
                    Character_x = Helene.x
                    Character_y = Helene.y
                } else if (key[0] == "骸") {
                    Character_x = Skeleton.x
                    Character_y = Skeleton.y
                }
                if (!this.dontTalk) {
                    // speech_bubble.x = 85
                    // speech_bubble.y = 138.12
                    // speech_bubble.draw(ctx)
                   
                    // ctx.drawImage(characterIcon, Character_x - aspect(161), Character_y - aspect(330), aspect(197), aspect(262));
                    // const talkTex = new Text(Character_x - aspect(-60), Character_y - aspect(180), talk.chapter01[this.TalkIndex][key], 'white', 28, false, 'normal', 700);
                    // talkTex.drawText(ctx);
                    speech_bubble_reverse.x = Character_x - 580
                    speech_bubble_reverse.y = Character_y - 350

                    speech_bubble_reverse.draw(ctx)
                    
                    ctx.drawImage(characterIcon, Character_x - aspect(700), Character_y - aspect(330), aspect(197), aspect(262));
                    const talkTexc = new Text(Character_x - 444, Character_y - 180, talk.chapter01[this.TalkIndex][key], 'white', 33, false, 'normal', 500);
                    talkTexc.drawText(ctx);

                }

            }
        }

        if (encoutnanimation.animation) {
            ctx.globalAlpha = 1;
            encoutnanimation.draw(ctx);
            encoutnanimation.linewidth += screenWidth / 12;

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

