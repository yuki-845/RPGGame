'use strict';
// 音量調整変数

let volume = 0.5
let characterShadowImage = new Image();

characterShadowImage.src = 'img/shadowCharacter.png'; // 画像のパスを指定してください
let audio = new Audio('sound/bgm/謎の人物Ｋ - 00.mp3');
audio.loop = true;
audio.currentTime = 2;
audio.volume = volume;

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
        
        this.Imagex = 936;
        this.Imagey = 91;

    }

    draw(ctx, canvas) {
        //うるさいので一旦コメントアウト
        // audio.play();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#8AA1ED'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();
        clickItems = [];
        // キャラクターのシャドーを描画
        
        if (this.isSkill) {
            skillSwitchAnimation.draw(ctx,this.Imagex,this.Imagey);
        }

        if (!this.isSkill) {


            ctx.drawImage(characterShadowImage, aspect(this.Imagex), aspect(this.Imagey), aspect(683), aspect(1217));
            // テキストを描画
            if(!skillSwitchAnimation.isAnimation) {
            // Skillボタン
            const Skill = new Text(1206, 108, "S", 'white', 297, false, 'italic',900);
            Skill.draw(ctx);
            clickItems.push(Skill);

            // killテキスト
            const kill = new Text(1340, 316, "KILL", 'black', 42, false, 'normal', this.killangle);
            kill.draw(ctx);
            
            // Atackボタン
            const Atack = new Text(1411, 312, "A", 'white', 297, false, 'italic',900);
            Atack.draw(ctx);
            clickItems.push(Atack);
            // tackテキスト
            const tack = new Text(1579, 553, "TACK", 'black', 42, false);
            tack.draw(ctx);

            // Guardボタン
            const Guaurd = new Text(1177, 508, "G", 'white', 297, false, 'italic',900);
            Guaurd.draw(ctx);
            clickItems.push(Guaurd);
            // uardテキスト
            const uard = new Text(1351, 737, "UARD", 'black', 42, false);
            uard.draw(ctx);
            // 線を描画
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.moveTo(aspect(1025), aspect(208));
            ctx.lineTo(aspect(1591), aspect(774));
            ctx.stroke();

            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(aspect(1559), aspect(208));
            ctx.lineTo(aspect(1025), aspect(774));
            ctx.stroke();
            }
        }

        //キャラクター　四角形
        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(1532), aspect(652)); // 始点
        ctx.lineTo(aspect(1920), aspect(652)); // 右上
        ctx.lineTo(aspect(1884), aspect(822)); // 右下
        ctx.lineTo(aspect(1497), aspect(822)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#0316FA'; // 色の指定
        ctx.fill(); // 塗りつぶし

        ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(1532), aspect(854)); // 始点
        ctx.lineTo(aspect(1920), aspect(854)); // 右上
        ctx.lineTo(aspect(1884), aspect(1024)); // 右下
        ctx.lineTo(aspect(1497), aspect(1024)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#0316FA'; // 色の指定
        ctx.fill(); // 塗りつぶし

        //アニメーション
        if (encoutnanimation.animation) {

            encoutnanimation.draw(ctx)
            encoutnanimation.lineheight += screenHeight / 15
            encoutnanimation.y = (screenHeight / 2) - encoutnanimation.lineheight / 2;
            encoutnanimation.y1 -= screenHeight / 15;
            encoutnanimation.y2 -= screenHeight / 15;
            encoutnanimation.y3 += screenHeight / 15;
            encoutnanimation.y4 += screenHeight / 15;
            if (encoutnanimation.y3 >= screenHeight * 2) {
                encoutnanimation.isblue = false
                encoutnanimation.alpha -= 0.1

                if (encoutnanimation.alpha < 0) {
                    console.log("真っ白になっちまったよ")
                    encoutnanimation.animation = false;

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
        // アニメーション
        if(skillSwitchAnimation.isAnimation) {
            this.Imagex += aspect(1357 - this.Imagex) / 2;
            this.Imagey += aspect(156 - this.Imagey) / 2;


            if(this.Imagex >= 1300) {
                this.isSkill = true;
                
                skillSwitchAnimation.x1 += aspect(1232 -  skillSwitchAnimation.x1) / 2;
                skillSwitchAnimation.x2 += aspect(2018 -  skillSwitchAnimation.x2) / 2;
                skillSwitchAnimation.x3 += aspect(1745 -  skillSwitchAnimation.x3) / 2;
                skillSwitchAnimation.x4 += aspect(960 -  skillSwitchAnimation.x4) / 2;
                
            }
        }else {
            skillSwitchAnimation.x1 += aspect(2098 -  skillSwitchAnimation.x1) / 2;
            skillSwitchAnimation.x2 += aspect(2884 -  skillSwitchAnimation.x2) / 2;
            skillSwitchAnimation.x3 += aspect(2712 -  skillSwitchAnimation.x3) / 2;
            skillSwitchAnimation.x4 += aspect(2026 -  skillSwitchAnimation.x4) / 2;
            if(skillSwitchAnimation.x1 >= 2000) {
                this.isSkill = false;
                this.Imagex += aspect(936 - this.Imagex) / 2;
                this.Imagey += aspect(91 - this.Imagey) / 2;

            }

            
        }

        
    }
    
}
