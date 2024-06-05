class SkillSwitchAnimation {

    constructor(x1, x2, x3, x4) {
        this.isAnimation = false;

        this.x1 = 3098
        this.x2 = 3884;
        this.x3 = 3712;
        this.x4 = 3026;


        this.x = 1843.26;
    }

    draw(ctx, imagex, imagey, AllyWhatTimesAttacked) {
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

        if (AllyWhatTimesAttacked == 0) {
            ctx.beginPath();
            ctx.globalAlpha = 0.6;
            ctx.moveTo(aspect(this.x1) - (aspect(88)), aspect(0)); // 始点
            ctx.lineTo(aspect(this.x2) - (aspect(88)), aspect(0)); // 右上
            ctx.lineTo(aspect(this.x3) - (aspect(88)), aspect(1080)); // 右下
            ctx.lineTo(aspect(this.x4) - (aspect(88)), aspect(1080)); // 左下
            ctx.closePath(); // パスを閉じる
            ctx.fillStyle = '#00AEEB'; // 色の指定
            ctx.fill(); // 塗りつぶし
        } else {
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

            for (let i = 0; i < SaveData.Helene.Magic.length; i++) {
                if (isSkillScreenOnMouse.isOnMouse && i == isSkillScreenOnMouse.i) {
                    ctx.fillStyle = 'white'; //
                    ctx.fillRect(aspect(this.x), aspect(229.88 + (72 * i)), aspect(2180), aspect(68)); // x, y, 幅, 高さ
                    this.x += (-183 - this.x) / 7;

                }
            }
            if(!isSkillScreenOnMouse.isOnMouse) {
                this.x = 1843.26;
            }

            ctx.globalAlpha = 1;
            if (AllyWhatTimesAttacked == 0) {
                ctx.drawImage(HeleneShadowBack, aspect(1314), aspect(-80), aspect(713), aspect(1284));
                HeleneShadow.w = 625
                HeleneShadow.h = 1114
                HeleneShadow.draw(ctx);

            } else {
                ctx.drawImage(LauraShadowBack, aspect(1564), aspect(182), aspect(443.56), aspect(1054.85));
                LauraShadow.w = 469.56
                LauraShadow.h = 1054.85
                LauraShadow.draw(ctx)
            }
            // スキル名テキスト
            if (AllyWhatTimesAttacked == 0) {
                for (let i = 0; i < SaveData.Helene.Magic.length; i++) {
                    const skill = new SkillText(SaveData.Helene.Magic[i]["name"], 1125.74 - (18 * i), 246.5 + (72 * i), aspect(35), i)
                    skill.draw(ctx)
                    clickItems.push(skill)
                    if (isSkillScreenOnMouse.isOnMouse && i == isSkillScreenOnMouse.i) {

                        isSkillScreenOnMouse.explanation = SaveData.Helene.Magic[i]["explanation"]
                        
                    }
                }
            } else {
                for (let i = 0; i < SaveData.Laura.Magic.length; i++) {
                    const skill = new SkillText(SaveData.Laura.Magic[i]["name"], 1125.74 - (18 * i), 246.5 + (72 * i), aspect(35), i)
                    skill.draw(ctx)
                    clickItems.push(skill)
                    if (isSkillScreenOnMouse.isOnMouse && i == isSkillScreenOnMouse.i) {

                        isSkillScreenOnMouse.explanation = SaveData.Laura.Magic[i]["explanation"]
                    }
                }
            }

            if( isSkillScreenOnMouse.explanation === "") {
                const Explanation = new Text(1039, 790, "NONE", 'white', 30, false, 'normal', 700);
                Explanation.drawExplanation(ctx);
    
            }else {
                const Explanation = new Text(1039, 790, isSkillScreenOnMouse.explanation, 'white', 30, false, 'normal', 700);
                Explanation.drawExplanation(ctx);

            }
            
            // キャラクター画像



            //SKILL テキスト
            const MAGIC = new Text(1144, -46, "MAGIC", 'black', 200, false, 'normal', 700);
            MAGIC.draw(ctx);
            // Back テキスト
            const BACK = new Text(841, 922, "BACK", 'white', 145, false, 'normal');
            BACK.draw(ctx);
            clickItems.push(BACK);

        }



    }
}