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
        ctx.drawImage(characterShadowImage, aspect(21), aspect(156), aspect(495), aspect(882));
        // テキストを描画

        // Skillボタン
        const Skill = new Text(this.Sx, this.Sy, "S", 'white', 297, false, 'bold', this.angle);
        Skill.draw(ctx);
        clickItems.push(Skill);

        // killテキスト
        const kill = new Text(this.killx, this.killy, "kill", '#073545', 52, false, 'normal', this.killangle);
        kill.draw(ctx);
        if (this.isSkill) {
            const Sx = (140.59 - this.Sx) / 4;
            const Sy = (20.52 - this.Sy) / 4;
            this.Sx += Sx;
            this.Sy += Sy;

            //テキスト"kill"のアニメーション

            const killx = (285.59 - this.killx) / 4;
            const killy = (219.52 - this.killy) / 4;

            this.killx += killx
            this.killy += killy

            console.log(this.killx, this.killy);
            const Back = new Text(90, 942, "Back", 'white', 105, false, 'normal');
            Back.draw(ctx);
        }
        // Atackボタン
        if (!this.isSkill) {
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
        }

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
