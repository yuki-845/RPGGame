'use strict'

/**
 * スプライトに関してのクラス
 */
var characterShadowImage = new Image();

characterShadowImage.src = 'img/shadowCharacter.png'; // 画像のパスを指定してください
class BattleScreen {

    /**
     * 引数
     * img : 画像ファイルまでのパス
     * width : 画像の表示する範囲（横幅）
     * height : 画像の表示する範囲（縦幅）
     */
    constructor(width, height) {
        this.width = width
        this.height = height

    } //constructor() 終了


    /**
     * 画像などを画面に表示するためのメソッド
     *
     * 引数
     * canvas : 紙（キャンバス）
     */
    draw(ctx, canvas) {
        // 背景
        ctx.beginPath()
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '##8AA1ED'; // 四角形の塗りつぶし色
        ctx.fillRect(0, 0, this.width, this.height); // (x, y, width, height)
        ctx.fill();

        // キャラクターのシャドーを描画
        ctx.drawImage(characterShadowImage, aspect(21), aspect(156), aspect(495), aspect(882));


        // Skillボタン
        const Skill = new Text(267, 77, "S", 'white', 297, false,'bold')
        Skill.draw(ctx)
        // killテキスト
        const kill = new Text(397, 285, "kill", '#073545', 52, false)
        kill.draw(ctx)


        // Atackボタン
        const Atack = new Text(399, 375, "A", 'white', 297, false,'bold')
        Atack.draw(ctx)
        // tackテキスト
        const tack = new Text(552, 620, "tack", '#073545', 52, false)
        tack.draw(ctx)
        

        // Guardボタン
        const Guaurd = new Text(239, 654, "G", 'white', 297, false,'bold')
        Guaurd.draw(ctx)
        // uardテキスト
        const uard = new Text(397, 890, "uard", '#073545', 52, false)
        uard.draw(ctx)
       
        // 線を描画
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(aspect(67), aspect(223));
        ctx.lineTo(aspect(700), aspect(856));
        ctx.stroke();

        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(aspect(21.5), aspect(802));
        ctx.lineTo(aspect(633), aspect(191));
        ctx.stroke();
        
    } //render() 終了

    onenterframe() { }
}
