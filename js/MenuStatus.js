
'use strict'
let characterImage = new Image();
characterImage.src = 'img/画像 7.png';
class MenuStatus {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(width, height) {
        //canvas要素を作成
        this.width = width
        this.height = height

        this.x = -100;
        this.y = -100;
    } //constructor() 終

    draw(ctx, canvas) {
        //魔法のスキル紹介欄
        const MagicCircle = new Circle(713 + this.x,113 + this.y, 325,"#50A5FA")
        MagicCircle.draw(ctx)

        const MAGIC = new Text(897 + this.x, 118 + this.y, "MAGIC", '#ffffff', 85, false, 'normal', 700, false, 1);
        MAGIC.draw(ctx)

        //魔法の詳細
        const InfoCircle = new Circle(642 + this.x,611 + this.y,178,"#508BFA")
        InfoCircle.draw(ctx)
        
        const INFO = new Text(759 + this.x, 619 + this.y, "INFO", '#ffffff', 51, false, 'normal', 700, false, 1);
        INFO.draw(ctx)

        
        //ステータスの紹介
        const StatusCircle = new Circle(1332 + this.x,400 + this.y,283.5,"#50D3FA")
        StatusCircle.draw(ctx)

        const STATUS = new Text(1468 + this.x, 423 + this.y, "STATUS", '#ffffff', 75, false, 'normal', 700, false, 1);
        STATUS.draw(ctx)

        //キャラクター画
        ctx.drawImage(characterImage, aspect(-248) + this.x, aspect(57), aspect(981), aspect(1304));

    }
}
