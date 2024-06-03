'use strict';
// 音量調整変数

let volume = 0.5
const HeleneShadow = new Img('img/shadowCharacter.png', 987, 95, 723, 1287)


const HeleneShadowBack = new Image();
HeleneShadowBack.src = 'img/shadowCharacter2.png'; // 画像のパスを指定してください

const LauraShadow = new Img("img/shadowLaura.png", 1200, 95, 638.44, 1518.31, 0.0)


const LauraShadowBack = new Image()
LauraShadowBack.src = "img/shadowLaura_back.png"


const audio = new Audio('sound/bgm/謎の人物Ｋ - 00.mp3');
audio.loop = true;
audio.currentTime = 2;
audio.volume = volume;
//セレクトアイテム
const SlectItem = new Image()
SlectItem.src = "img/SelectItem.png"
//敵キャラ
const wolf = new Img("img/enemy/wolf.png", 173, 97, 731, 861)

//エフェクト
const Slashing = new effectSprite("img/effect/Slashing.png")

/**
 * 角が丸い四角形のパスを作成する
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
function createRoundRectPath(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), 0, false);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1 / 2), false);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI, false);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3 / 2), false);
    ctx.closePath();
}

/**
 * 角が丸い四角形を塗りつぶす
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
function fillRoundRect(ctx, x, y, w, h, r) {
    createRoundRectPath(ctx, x, y, w, h, r);
    ctx.fill();
}

/**
 * 角が丸い四角形を描画
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 */
function strokeRoundRect(ctx, x, y, w, h, r) {
    createRoundRectPath(ctx, x, y, w, h, r);
    ctx.stroke();
}

/**
 * 角が丸い四角形の吹き出し(吹き出しは下側)のパスを作成する
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 * @param  {Number} bl  三角形の左上隅のX座標
 * @param  {Number} br  三角形の右上隅のX座標
 * @param  {Number} bh  三角形の高さ
 */
function createBalloonRoundRectPath(ctx, x, y, w, h, r, bl, br, bh) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), 0, false);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1 / 2), false);
    ctx.lineTo(x + br, y + h);
    ctx.lineTo(x + (br + bl) / 2, y + h + bh);
    ctx.lineTo(x + bl, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI, false);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3 / 2), false);
    ctx.closePath();
}

/**
 * 角が丸い四角形の吹き出し(吹き出しは下側)を塗りつぶす
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 * @param  {Number} bl  三角形の左上隅のX座標
 * @param  {Number} br  三角形の右上隅のX座標
 * @param  {Number} bh  三角形の高さ
 */
function fillBalloonRoundRect(ctx, x, y, w, h, r, bl, br, bh) {
    createBalloonRoundRectPath(ctx, x, y, w, h, r, bl, br, bh);
    ctx.fill();
}

/**
 * 角が丸い四角形の吹き出し(吹き出しは下側)を描画する
 * @param  {CanvasRenderingContext2D} ctx コンテキスト
 * @param  {Number} x   左上隅のX座標
 * @param  {Number} y   左上隅のY座標
 * @param  {Number} w   幅
 * @param  {Number} h   高さ
 * @param  {Number} r   半径
 * @param  {Number} bl  三角形の左上隅のX座標
 * @param  {Number} br  三角形の右上隅のX座標
 * @param  {Number} bh  三角形の高さ
 */
function strokeBalloonRoundRect(ctx, x, y, w, h, r, bl, br, bh) {
    createBalloonRoundRectPath(ctx, x, y, w, h, r, bl, br, bh);
    ctx.stroke();
}
const skillSwitchAnimation = new SkillSwitchAnimation()
console.log(screenWidth)
class BattleScreen {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.Imagex = 987;
        this.Imagey = 95;

        //敵への矢印のアニメーション用の変数
        this.arrowx1 = 1939
        this.arrowy1 = -212

        this.arrowx2 = 1863.77
        this.arrowy2 = -7.14

        this.arrowx3 = 1876.88
        this.arrowy3 = 12.52

        this.arrowx4 = 2004
        this.arrowy4 = -95

        this.arrowanimation = false;

        this.isAtack = false;
        this.isGuard = false;

        this.AllyWhatTimesAttacked = 0;
        this.isChange = false;

        this.HeleneAlpha = 1;
        this.LauraAlpha = 0;

        this.isEnemyTurn = false

        this.gameText = "";

        this.isAction = false
    }

    draw(ctx, canvas) {
        //うるさいので一旦コメントアウト
        // audio.play();
        ctx.globalAlpha = 1;
        ctx.drawImage(chapter01background, aspect(-195), aspect(-459), aspect(2311), aspect(1552));
        clickItems = [];

        const BackArrow = new Parallelogram(2020.29, 1413.65, -633.14, -57.17, -674.16, -253.74, 1368.24, 2589.98, 1, "#356093")
        BackArrow.draw(ctx)
        // スキル画面
        if (this.isSkill) {
            skillSwitchAnimation.draw(ctx, this.Imagex, this.Imagey, this.AllyWhatTimesAttacked);
        }

        if (!this.isSkill) {
            //攻撃する敵が何かがわかるようにする
            //キャラクターのシャドー
            if (this.AllyWhatTimesAttacked == 0) {

                const ENEMY_ARROW = new Parallelogram(this.arrowx1, this.arrowy1, this.arrowx2, this.arrowy2, this.arrowx3, this.arrowy3, this.arrowx4, this.arrowy4, 1, "#00AEEB")
                ENEMY_ARROW.draw(ctx)
                HeleneShadow.w = 723
                HeleneShadow.h = 1287


            } else if (this.AllyWhatTimesAttacked == 1) {
                const ENEMY_ARROW = new Parallelogram(this.arrowx1, this.arrowy1, this.arrowx2, this.arrowy2, this.arrowx3, this.arrowy3, this.arrowx4, this.arrowy4, 1, "#ECDA00")
                ENEMY_ARROW.draw(ctx)
                LauraShadow.w = 638.44
                LauraShadow.h = 1518.31

            }

            console.log(this.HeleneAlpha)
            ctx.globalAlpha = this.HeleneAlpha
            HeleneShadow.draw(ctx)
            ctx.globalAlpha = this.LauraAlpha
            LauraShadow.draw(ctx)

            // テキストを描画
            if (!skillSwitchAnimation.isAnimation && this.AllyWhatTimesAttacked != 2) {
                // Skillボタン
                const Skill = new Text(1257, 220, "M", 'white', 291, false, 'italic', 900);
                Skill.draw(ctx);
                clickItems.push(Skill);

                // killテキスト
                const kill = new Text(1444, 454, "AGIC", 'black', 54, false, 'normal', this.killangle);
                kill.draw(ctx);

                // Atackボタン
                const Atack = new Text(1022, 365, "A", 'white', 300, false, 'italic', 900);
                Atack.draw(ctx);
                clickItems.push(Atack);
                // tackテキスト
                const tack = new Text(1187, 608, "TACK", 'black', 54, false);
                tack.draw(ctx);

                // Guardボタン
                const Guaurd = new Text(1217, 592, "G", 'white', 300, false, 'italic', 900);
                Guaurd.draw(ctx);
                clickItems.push(Guaurd);
                // uardテキスト
                const uard = new Text(1349, 820, "UARD", 'black', 54, false);
                uard.draw(ctx);

                ctx.beginPath();
                ctx.globalAlpha = 0.6;
                ctx.moveTo(aspect(1187.76), aspect(46.88)); // 始点
                ctx.lineTo(aspect(1747.85), aspect(46.88)); // 右上
                ctx.lineTo(aspect(1700.24), aspect(111.12)); // 右下
                ctx.lineTo(aspect(1140.15), aspect(111.12)); // 左下
                ctx.closePath(); // パスを閉じる
                ctx.fillStyle = '#000000'; // 色の指定
                ctx.fill(); // 塗りつぶ市


                ctx.font = '32px "Hiragino Mincho ProN", serif';
                ctx.fillStyle = 'white';
                ctx.fillText(this.gameText, 1364, 63);

            }
        }
        //チャプター１の敵
        if (SaveData.Chapter == 1 && !SaveData.Event_1) {
            ctx.globalAlpha = 1;
            wolf.draw(ctx)
            this.gameText = "ウルフ"

            // if(this.isAtack) {
            //     wolf.takenDamage();
            // }
        }

        
        //どの敵に攻撃しているか
        ctx.globalAlpha = 1;
        ctx.drawImage(SlectItem, aspect(429.36), aspect(407.88), aspect(324.64), aspect(161.25));

        //キャラクター　四角形
        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(1532), aspect(652)); // 始点
        ctx.lineTo(aspect(1920), aspect(652)); // 右上
        ctx.lineTo(aspect(1884), aspect(822)); // 右下
        ctx.lineTo(aspect(1497), aspect(822)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#5535DE'; // 色の指定
        ctx.fill(); // 塗りつぶし

        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(1532), aspect(854)); // 始点
        ctx.lineTo(aspect(1920), aspect(854)); // 右上
        ctx.lineTo(aspect(1884), aspect(1024)); // 右下
        ctx.lineTo(aspect(1497), aspect(1024)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#5535DE'; // 色の指定
        ctx.fill(); // 塗りつぶ市


        if (this.isAtack || this.isGuard) {
            this.isAction = true
           
            if(this.isGuard) {
                if (this.AllyWhatTimesAttacked == 0) {
                    this.AllyWhatTimesAttacked = 1;
                } else if (this.AllyWhatTimesAttacked == 1) {
                    this.AllyWhatTimesAttacked = 2;
                }
                this.isChange = true;
                this.isGuard = false

            }else if(this.isAtack) {
                Slashing.draw(ctx)
                Slashing.count += 1;
                if (Slashing.count % 4 == 0) {
                    Slashing.frame += 1;
                    if (Slashing.frame == Slashing.img.width / 240) {
                        this.isAtack = false
                        Slashing.count = 0;
                        if (this.AllyWhatTimesAttacked == 0) {
                            this.AllyWhatTimesAttacked = 1;
                        } else if (this.AllyWhatTimesAttacked == 1) {
                            this.AllyWhatTimesAttacked = 2;
                        }
    
                        this.isChange = true;
    
    
                    }
                }
            }
            
        }

        //戦闘画面遷移アニメーション
        if (encoutnanimation.animation) {

            encoutnanimation.draw(ctx)
            encoutnanimation.lineheight += screenHeight / 25
            encoutnanimation.y = (screenHeight / 2) - encoutnanimation.lineheight / 2;
            encoutnanimation.y1 -= screenHeight / 25;
            encoutnanimation.y2 -= screenHeight / 25;
            encoutnanimation.y3 += screenHeight / 25;
            encoutnanimation.y4 += screenHeight / 25;
            if (encoutnanimation.y3 >= screenHeight * 2) {
                encoutnanimation.isblue = false
                encoutnanimation.alpha -= 0.1

                if (encoutnanimation.alpha <= 0) {
                    console.log("真っ白になっちまったよ")
                    encoutnanimation.animation = false;
                    this.arrowanimation = true
                    //初期化
                    encoutnanimation.linewidth = 0
                    encoutnanimation.lineheight = 2
                    encoutnanimation.animation = false;
                    encoutnanimation.whiteRec = false;
                    encoutnanimation.y1 = 524
                    encoutnanimation.y2 = 353
                    encoutnanimation.y3 = 560
                    encoutnanimation.y4 = 749
                    encoutnanimation.alpha = 1;
                    encoutnanimation.isblue = true
                    encoutnanimation.screenWidth = screenWidth
                }
            }

        }
        if (this.arrowanimation) {
            this.arrowx1 += (2429.53 - this.arrowx1) / 10
            this.arrowy1 += (-62.72 - this.arrowy1) / 10

            this.arrowx2 += (-139.69 - this.arrowx2) / 10
            this.arrowy2 += (649.62 - this.arrowy2) / 10

            this.arrowx3 += (-139.69 - this.arrowx3) / 10
            this.arrowy3 += (663.26 - this.arrowy3) / 10

            this.arrowx4 += (2425.18 - this.arrowx4) / 10
            this.arrowy4 += (74.76 - this.arrowy4) / 10
            // console.log(this.arrowx1)


        }

        // Heleneスキル画面線維アニメーション
        if (skillSwitchAnimation.isAnimation && this.AllyWhatTimesAttacked == 0) {
            const animationspeed = 5
            HeleneShadow.x += (1453 - HeleneShadow.x) / animationspeed;
            HeleneShadow.y += (196 - HeleneShadow.y) / animationspeed;

            if (HeleneShadow.x >= 1300) {
                this.isSkill = true;
                skillSwitchAnimation.x1 += (1166.16 - skillSwitchAnimation.x1) / animationspeed;
                skillSwitchAnimation.x2 += (1920 - skillSwitchAnimation.x2) / animationspeed;
                skillSwitchAnimation.x3 += (1658.84 - skillSwitchAnimation.x3) / animationspeed;
                skillSwitchAnimation.x4 += (905 - skillSwitchAnimation.x4) / animationspeed;

            }
        } else if (!skillSwitchAnimation.isAnimation && this.AllyWhatTimesAttacked == 0) {
            const animationspeed = 5
            skillSwitchAnimation.x1 += (2098 - skillSwitchAnimation.x1) / animationspeed;
            skillSwitchAnimation.x2 += (2884 - skillSwitchAnimation.x2) / animationspeed;
            skillSwitchAnimation.x3 += (2712 - skillSwitchAnimation.x3) / animationspeed;
            skillSwitchAnimation.x4 += (2026 - skillSwitchAnimation.x4) / animationspeed;
            if (skillSwitchAnimation.x1 >= 2040) {
                console.log(skillSwitchAnimation.x1)
                this.isSkill = false;
                HeleneShadow.x += (936 - HeleneShadow.x) / animationspeed;
                HeleneShadow.y += (91 - HeleneShadow.y) / animationspeed;

            }
        }
        // Lauraスキル画面線維アニメーション
        if (skillSwitchAnimation.isAnimation && this.AllyWhatTimesAttacked == 1) {
            const animationspeed = 5
            LauraShadow.x += (1453 - LauraShadow.x) / animationspeed;
            LauraShadow.y += (196 - LauraShadow.y) / animationspeed;

            if (LauraShadow.x >= 1300) {
                this.isSkill = true;
                skillSwitchAnimation.x1 += (1166.16 - skillSwitchAnimation.x1) / animationspeed;
                skillSwitchAnimation.x2 += (1920 - skillSwitchAnimation.x2) / animationspeed;
                skillSwitchAnimation.x3 += (1658.84 - skillSwitchAnimation.x3) / animationspeed;
                skillSwitchAnimation.x4 += (905 - skillSwitchAnimation.x4) / animationspeed;

            }
        } else if (!skillSwitchAnimation.isAnimation && this.AllyWhatTimesAttacked == 1) {
            const animationspeed = 5
            skillSwitchAnimation.x1 += (2098 - skillSwitchAnimation.x1) / animationspeed;
            skillSwitchAnimation.x2 += (2884 - skillSwitchAnimation.x2) / animationspeed;
            skillSwitchAnimation.x3 += (2712 - skillSwitchAnimation.x3) / animationspeed;
            skillSwitchAnimation.x4 += (2026 - skillSwitchAnimation.x4) / animationspeed;
            if (skillSwitchAnimation.x1 >= 2040) {
                console.log(skillSwitchAnimation.x1)
                this.isSkill = false;
                LauraShadow.x += (936 - LauraShadow.x) / animationspeed;
                LauraShadow.y += (91 - LauraShadow.y) / animationspeed;

            }


        }

        //アタックしたあとの入れ替わりアニメーション
        if (this.isChange && this.AllyWhatTimesAttacked == 1) {
            
            this.HeleneAlpha -= 0.05;
            this.LauraAlpha += 0.05
            if (this.HeleneAlpha <= 0) {
                this.isChange = false
                this.HeleneAlpha = 0;
                this.LauraAlpha = 1;
                Slashing.frame = 0;

            this.isAction = false
            }
            const animationspeed = 5
            LauraShadow.x += (987 - LauraShadow.x) / animationspeed
            HeleneShadow.x += (1200 - HeleneShadow.x) / animationspeed


        } else if (this.isChange && this.AllyWhatTimesAttacked == 2) {

            this.LauraAlpha -= 0.05
            if (this.LauraAlpha <= 0) {
                this.isChange = false

                this.LauraAlpha = 0;

                this.isEnemyTurn = true;

                this.isAction = false
            }
            const animationspeed = 5

            LauraShadow.x += (1200 - LauraShadow.x) / animationspeed
        }
    }


}
