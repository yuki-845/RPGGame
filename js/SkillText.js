const skillpara = new Image();
skillpara.src = 'img/skillpara.png'; // 画像のパスを指定してください
const roundrect = new Image();
roundrect.src = 'img/roundrect.png'; // 画像のパスを指定してください
const skillbatu = new Image();
skillbatu.src = 'img/skillbatu.png'; // 画像のパスを指定してください


class SkillText {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(text, x,y,h,i) {
        //canvas要素を作成
        this.text = text
        this.x = x;
        this.y = y;
        this.h = h
        this.w = 0
        this.i = i;
        this.isMouseOver = false
    } //constructor() 終了
    draw(ctx) {
        
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.drawImage(skillpara, aspect(this.x), aspect(this.y), aspect(87.28), aspect(35));

        ctx.font = 400 + ' ' + 'normal' + ' ' + aspect(35) + 'px "Noto Serif JP", sans-serif'
        ctx.fillStyle = "white";
        if(isSkillScreenOnMouse.isOnMouse && this.i == isSkillScreenOnMouse.i) {
            ctx.fillStyle = "black";
        }
        ctx.fillText(this.text, aspect(this.x + 119.52), aspect(this.y) + aspect(35));

        ctx.drawImage(roundrect, aspect(this.x + 337.52), aspect(this.y), aspect(107), aspect(35));
        ctx.fill();
        this.w = aspect(444)

        
    }
    

    testHit(clickX, clickY) {
        
        return (aspect(this.x) <= clickX && clickX <= aspect(this.x) + this.w) &&
            (aspect(this.y) <= clickY && clickY <= aspect(this.y) + this.h);
    }
}
