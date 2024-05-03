'use strict';

let characterShadowImage = new Image();

characterShadowImage.src = 'img/shadowCharacter.png'; // 画像のパスを指定してください

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

        ctx.save();






        // キャラクターのシャドーを描画
        
        if (this.isSkill) {
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.moveTo(aspect(236.5), 0); // 始点
            ctx.lineTo(aspect(1053), 0); // 右上
            ctx.lineTo(aspect(775), aspect(1080)); // 右下
            ctx.lineTo(-46,aspect(1080)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = '#0316A7'; // 色の指定
            ctx.fill(); // 塗りつぶし

            //SKILL テキスト
            const SKILL = new Text(251, -11, "SKILL", 'white', 217, false, 'bold');
            SKILL.draw(ctx);

            // 

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
