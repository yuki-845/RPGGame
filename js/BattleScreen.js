'use strict';
// 音量調整変数

let volume = 0.5
const characterShadowImage = new Image();

characterShadowImage.src = 'img/shadowCharacter.png'; // 画像のパスを指定してください
const characterShadowImage2 = new Image();

characterShadowImage2.src = 'img/shadowCharacter2.png'; // 画像のパスを指定してください
const audio = new Audio('sound/bgm/謎の人物Ｋ - 00.mp3');
audio.loop = true;
audio.currentTime = 2;
audio.volume = volume;
//セレクトアイテム
const SlectItem = new Image()
SlectItem.src = "img/SelectItem.png"
//敵キャラ
const wolf = new Image()
wolf.src = "img/enemy/wolf.png"

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
    }

    draw(ctx, canvas) {
        //うるさいので一旦コメントアウト
        // audio.play();
        ctx.globalAlpha = 1;
        ctx.drawImage(chapter01background, aspect(0), aspect(-264), aspect(2361), aspect(1574));
        clickItems = [];
        

        // スキル画面
        if (this.isSkill) {
            skillSwitchAnimation.draw(ctx, this.Imagex, this.Imagey);
        }
        
        if (!this.isSkill) {
            //攻撃する敵が何かがわかるようにする

            const ENEMY_ARROW = new Parallelogram(this.arrowx1, this.arrowy1, this.arrowx2, this.arrowy2, this.arrowx3, this.arrowy3, this.arrowx4, this.arrowy4, 1, "#00AEEB")
            ENEMY_ARROW.draw(ctx)
            //キャラクターのシャドー
            ctx.drawImage(characterShadowImage, aspect(this.Imagex), aspect(this.Imagey), aspect(723), aspect(1287));
            // テキストを描画
            if (!skillSwitchAnimation.isAnimation) {
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

            }
        }
        //チャプター１の敵
        if(SaveData.Chapter == 1 && !SaveData.Event_1) {
            ctx.globalAlpha = 1;
            const Wolf = new Img(wolf,173,97,731,861)
            Wolf.draw(ctx)
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

        if(this.isAtack) {
            Slashing.draw(ctx)
            
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

        // スキル画面線維アニメーション
        if (skillSwitchAnimation.isAnimation) {
            this.Imagex += aspect(1453 - this.Imagex) / 3;
            this.Imagey += aspect(196 - this.Imagey) / 3;

            if (this.Imagex >= 1300) {
                this.isSkill = true;

                skillSwitchAnimation.x1 += aspect(1153 - skillSwitchAnimation.x1) / 3;
                skillSwitchAnimation.x2 += aspect(1920 - skillSwitchAnimation.x2) / 3;
                skillSwitchAnimation.x3 += aspect(1654 - skillSwitchAnimation.x3) / 3;
                skillSwitchAnimation.x4 += aspect(888 - skillSwitchAnimation.x4) / 3;

            }
        } else {
            skillSwitchAnimation.x1 += aspect(2098 - skillSwitchAnimation.x1) / 3;
            skillSwitchAnimation.x2 += aspect(2884 - skillSwitchAnimation.x2) / 3;
            skillSwitchAnimation.x3 += aspect(2712 - skillSwitchAnimation.x3) / 3;
            skillSwitchAnimation.x4 += aspect(2026 - skillSwitchAnimation.x4) / 3;
            if (skillSwitchAnimation.x1 >= 2000) {
                this.isSkill = false;
                this.Imagex += aspect(936 - this.Imagex) / 3;
                this.Imagey += aspect(91 - this.Imagey) / 3;

            }


        }
        
        
    }
    

}
