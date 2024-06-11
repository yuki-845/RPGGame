'use strict'

/**
 * スプライトに関してのクラス
 */
class effectSprite {

    /**
     * 引数
     * img : 画像ファイルまでのパス
     * width : 画像の表示する範囲（横幅）
     * height : 画像の表示する範囲（縦幅）
     */
    constructor(img, width, height) {
        //this.imgに、あなたは画像ですよ、と教える
        this.img = new Image();
        //this.img.srcに画像ファイルまでのパスを代入
        this.img.src = img;
        //画像の初期位置
        this.x = this.y = 200;
        //画像を表示する範囲の横幅。引数widthが指定されていない場合、this.widthに32を代入
        this.width = width || 384;
        //画像を表示する範囲の縦幅。引数heightが指定されていない場合、this.heightに32を代入
        this.height = height || 384;
        //何番目の画像を表示するか
        this.frame = 0;

        this.count = 0;
        
    } //constructor() 終了


    /**
     * 画像などを画面に表示するためのメソッド
     *
     * 引数
     * canvas : 紙（キャンバス）
     */
    draw(ctx) {
        // this.width = aspect(64)
        // this.height = aspect(64)

        //X,Y方向に、何番目の画像か
        const _frameX = this.frame % (this.img.width / this.width);
        const _frameY = ~~(this.frame / (this.img.width / this.width));
        ctx.globalAlpha = 1
        //画家さんに、絵を描いてとお願いする
        ctx.drawImage(
            this.img,
            this.width * _frameX,
            this.width * _frameY,
            this.width,
            this.width,
            this.x,
            this.y,
            aspect(this.width * 2),
            aspect(this.width * 2)
        );
    } //render() 終了
    
}
