'use strict'


class Img {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(img,x, y, w,h) {
        this.img = new Image();
        //this.img.srcに画像ファイルまでのパスを代入
        this.img.src = img;

        this.x = x;
        this.y = y;
        
        this.w = w;
        this.h = h;

        this.alpha = 1;

    } //constructor() 終了
    draw(ctx) {
        
        ctx.drawImage(this.img,aspect(this.x),aspect(this.y),aspect(this.w),aspect(this.h))
 
    }
    


    testHit(clickX, clickY) {
        return (this.x <= clickX && clickX <= this.x + this.w) &&
            (this.y <= clickY && clickY <= this.y + this.h);
    }

    //敵が攻撃を受けたら
    takenDamage() {
        
    }
}

