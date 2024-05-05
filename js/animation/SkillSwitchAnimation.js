class SkillSwitchAnimation {

    constructor(x1,x2,x3,x4) {
        this.isAnimation = false;
        
        this.x1 = 1798
        this.x2 = 2584;
        this.x3 = 2312;
        this.x4 = 1626;
    }

    draw(ctx,imagex,imagey) {
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

        ctx.beginPath();
        ctx.globalAlpha = 0.7;
        ctx.moveTo(aspect(this.x1 - aspect(229)), 0); // 始点
        ctx.lineTo(aspect(this.x2 - aspect(229)), 0); // 右上
        ctx.lineTo(aspect(this.x3 -aspect(229)), aspect(1080)); // 右下
        ctx.lineTo(aspect(this.x4 -aspect(229)), aspect(1080)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#00AEEB'; // 色の指定
        ctx.fill(); // 塗りつぶし


        //Skillの背景1
        ctx.beginPath();
        ctx.globalAlpha = 1;
        console.log(this.x1)
        ctx.moveTo(aspect(this.x1), 0); // 始点
        ctx.lineTo(aspect(this.x2), 0); // 右上
        ctx.lineTo(aspect(this.x3), aspect(1080)); // 右下
        ctx.lineTo(aspect(this.x4), aspect(1080)); // 左下
        ctx.closePath(); // パスを閉じる
        ctx.fillStyle = '#0316A7'; // 色の指定
        ctx.fill(); // 塗りつぶし


        // マウスが触れたときの線
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#104CD3'; // 四角形の塗りつぶし色
        ctx.fillRect(aspect(-147), aspect(338), aspect(2100), aspect(68)) // (x, y, width, height)
        ctx.fill();

        // スキル名テキスト
        const fire = new Text(1304, 348, "ファイヤ", 'white', 41, false, 'normal');
        fire.draw(ctx);
        ctx.fillStyle = 'white';
        fillRoundRect(ctx, aspect(1494), aspect(352), aspect(117), aspect(41), 10);
        const sp = new Text(1514, 353, "3 SP", '#333DBC', 31, false, 'normal');
        sp.draw(ctx);




        // キャラクター画像
        ctx.globalAlpha = 1;
        ctx.drawImage(characterShadowImage, aspect(imagex), aspect(imagey), aspect(683), aspect(1216));



        //SKILL テキスト
        const SKILL = new Text(1227, -40, "SKILL", 'white', 217, false, 'bold');
        SKILL.draw(ctx);
        // Back テキスト
        const BACK = new Text(892, 932, "BACK", 'white', 145, false, 'bold');
        BACK.draw(ctx);

    }
}