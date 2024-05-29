class SkillSwitchAnimation {

    constructor(x1, x2, x3, x4) {
        this.isAnimation = false;

        this.x1 = 3098
        this.x2 = 3884;
        this.x3 = 3712;
        this.x4 = 3026;


    }

    draw(ctx, imagex, imagey,AllyWhatTimesAttacked) {
        // Skillの背景２
        // ctx.beginPath();
        // ctx.globalAlpha = 0.7;
        // ctx.moveTo(aspect(1045), 0); // 始点
        // ctx.lineTo(aspect(1201), 0); // 右上
        // ctx.lineTo(aspect(1201), aspect(1080)); // 右下
        // ctx.lineTo(aspect(762), aspect(1080)); // 左下
        // ctx.closePath(); // パスを閉じる
        // ctx.fillStyle = '#00AEEB'; // 色の指定
        // ctx.fill(); // 塗りつぶし

        if(AllyWhatTimesAttacked == 0) {
            ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(this.x1) - (aspect(88)), aspect(0)); // 始点
        ctx.lineTo(aspect(this.x2) - (aspect(88)), aspect(0)); // 右上
        ctx.lineTo(aspect(this.x3) - (aspect(88)), aspect(1080)); // 右下
        ctx.lineTo(aspect(this.x4) - (aspect(88)), aspect(1080)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#00AEEB'; // 色の指定
        ctx.fill(); // 塗りつぶし
        }else {
            ctx.beginPath();
        ctx.globalAlpha = 0.6;
        ctx.moveTo(aspect(this.x1) - (aspect(88)), aspect(0)); // 始点
        ctx.lineTo(aspect(this.x2) - (aspect(88)), aspect(0)); // 右上
        ctx.lineTo(aspect(this.x3) - (aspect(88)), aspect(1080)); // 右下
        ctx.lineTo(aspect(this.x4) - (aspect(88)), aspect(1080)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#ECDA00'; // 色の指定
        ctx.fill(); // 塗りつぶし
        }

        


        //Skillの背景1
        ctx.beginPath();
        ctx.globalAlpha = 1;

        ctx.moveTo(aspect(this.x1), aspect(0)); // 始点
        ctx.lineTo(aspect(this.x2), aspect(0)); // 右上
        ctx.lineTo(aspect(this.x3), aspect(1080)); // 右下
        ctx.lineTo(aspect(this.x4), aspect(1080)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#0316A7'; // 色の指定
        ctx.fill(); // 塗りつぶし


        // マウスが触れたときの線
        // ctx.beginPath();
        // ctx.globalAlpha = 1;
        // ctx.fillStyle = '#104CD3'; // 四角形の塗りつぶし色
        // ctx.fillRect(aspect(-147), aspect(338), aspect(2100), aspect(68)) // (x, y, width, height)
        // ctx.fill();
        if (this.isAnimation) {
            // スキル名テキスト
            const fire = new Text(1304, 348, "ファイヤ", 'white', 41, false, 'normal');
            fire.draw(ctx);
            ctx.fillStyle = 'white';
            fillRoundRect(ctx, aspect(1494), aspect(352), aspect(117), aspect(41), 10);
            const sp = new Text(1514, 353, "3 SP", '#333DBC', 31, false, 'normal');
            sp.draw(ctx);



            // キャラクター画像
            ctx.globalAlpha = 1;
            if(AllyWhatTimesAttacked == 0) {
                ctx.drawImage(HeleneShadowBack, aspect(1476), aspect(0), aspect(618), aspect(1113));
                HeleneShadow.w = 545 
                HeleneShadow.h = 971
                HeleneShadow.draw(ctx);
            
            }else {
                ctx.drawImage(LauraShadowBack, aspect(1564), aspect(182), aspect(443.56), aspect(1054.85));
                LauraShadow.w = 469.56
                LauraShadow.h = 1054.85
                LauraShadow.draw(ctx)
            }
            

            //SKILL テキスト
            const MAGIC = new Text(1199, -50, "MAGIC", 'black', 200, false, 'normal',700);
            MAGIC.draw(ctx);
            // Back テキスト
            const BACK = new Text(884, 932, "BACK", 'white', 145, false, 'normal');
            BACK.draw(ctx);
            clickItems.push(BACK);

        }



    }
}