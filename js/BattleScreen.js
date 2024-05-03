'use strict';

let characterShadowImage = new Image();

characterShadowImage.src = 'img/shadowCharacter.png'; // 画像のパスを指定してください
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
    ctx.arc(x + w - r, y + r, r, Math.PI * (3/2), 0, false);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1/2), false);
    ctx.lineTo(x + r, y + h);       
    ctx.arc(x + r, y + h - r, r, Math.PI * (1/2), Math.PI, false);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3/2), false);
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
    ctx.arc(x + w - r, y + r, r, Math.PI * (3/2), 0, false);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1/2), false);        
    ctx.lineTo(x + br, y + h);
    ctx.lineTo(x + (br + bl) / 2, y + h + bh);
    ctx.lineTo(x + bl, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI * (1/2), Math.PI, false);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3/2), false);
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

class BattleScreen {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.isSkill = false;

        this.mx1 = aspect(67);
        this.my1 = aspect(223);
        this.tx1 = aspect(700);
        this.ty1 = aspect(856);

        this.mx2 = aspect(21.5);
        this.my2 = aspect(802);
        this.tx2 = aspect(633);
        this.ty2 = aspect(191);

        this.angle = 0;

        this.Sx = 267;
        this.Sy = 77

        this.killx = 397
        this.killy = 285
        this.killangle = 0;
    }

    draw(ctx, canvas) {
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#8AA1ED'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

     






        // キャラクターのシャドーを描画
        
        if (this.isSkill) {
             // Skillの背景２
            ctx.beginPath();
            ctx.globalAlpha = 0.7;
            ctx.moveTo(aspect(300), 0); // 始点
            ctx.lineTo(aspect(1139), 0); // 右上
            ctx.lineTo(aspect(856), aspect(1080)); // 右下
            ctx.lineTo(-46,aspect(1080)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = '#00AEEB'; // 色の指定
            ctx.fill(); // 塗りつぶし

            //Skillの背景1
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.moveTo(aspect(236.5), 0); // 始点
            ctx.lineTo(aspect(1053), 0); // 右上
            ctx.lineTo(aspect(775), aspect(1080)); // 右下
            ctx.lineTo(-46,aspect(1080)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = '#0316A7'; // 色の指定
            ctx.fill(); // 塗りつぶし
           

            // マウスが触れたときの線
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#104CD3'; // 四角形の塗りつぶし色
            ctx.fillRect(aspect(-147), aspect(276), aspect(2100), aspect(68)) // (x, y, width, height)
            ctx.fill();

            // スキル名テキスト
            const fire = new Text(573, 289, "ファイヤ", 'white', 41, false, 'normal');
            fire.draw(ctx);
            ctx.fillStyle = 'white';
            fillRoundRect(ctx, aspect(768), aspect(290), aspect(117), aspect(41), 10);
            const sp = new Text(788, 295, "3 SP", '#333DBC', 31, false, 'normal');
            sp.draw(ctx);



            // キャラクター画像
            ctx.drawImage(characterShadowImage, aspect(-199.97), aspect(179.1), aspect(604), aspect(1077));
            //SKILL テキスト
            const SKILL = new Text(251, -40, "SKILL", 'white', 217, false, 'bold');
            SKILL.draw(ctx);

            // Back テキスト
            const BACK = new Text(0, 935, "BACK", 'white', 145, false, 'bold');
            BACK.draw(ctx);

        }
        // Atackボタン
        if (!this.isSkill) {
            ctx.drawImage(characterShadowImage, aspect(-22), aspect(105), aspect(683), aspect(1217));
        // テキストを描画

        // Skillボタン
        const Skill = new Text(this.Sx, this.Sy, "S", 'white', 297, false, 'bold', this.angle);
        Skill.draw(ctx);
        clickItems.push(Skill);

        // killテキスト
        const kill = new Text(this.killx, this.killy, "kill", '#073545', 52, false, 'normal', this.killangle);
        kill.draw(ctx);
            const Atack = new Text(399, 375, "A", 'white', 297, false, 'bold');
            Atack.draw(ctx);
            clickItems.push(Atack);
            // tackテキスト
            const tack = new Text(552, 620, "tack", '#073545', 52, false);
            tack.draw(ctx);

            // Guardボタン
            const Guaurd = new Text(239, 654, "G", 'white', 297, false, 'bold');
            Guaurd.draw(ctx);
            clickItems.push(Guaurd);
            // uardテキスト
            const uard = new Text(397, 890, "uard", '#073545', 52, false);
            uard.draw(ctx);
             // 線を描画
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.moveTo(this.mx1, this.my1);
            ctx.lineTo(this.tx1, this.ty1);
            ctx.stroke();

            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.mx2, this.my2);
            ctx.lineTo(this.tx2, this.ty2);
            ctx.stroke();
        }

       
    }
}
