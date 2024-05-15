
'use strict'


class SAVEMENU {

    /**
     * 引数
     * width : ゲームの横幅
     * height : ゲームの縦幅
     */
    constructor(width, height,isSave) {
        //canvas要素を作成
        this.width = width
        this.height = height
        this.isSave = isSave
        
    } //constructor() 終

    draw(ctx, canvas) {
        //魔法のスキル紹介欄
        for(let i = 0; i < 7; i++) {
            const SaveList = new Parallelogram(45,227 + (i * 119),915,227 + (i * 119),915,320 + (i * 119),45,320 + (i * 119),1,"#9CC3F0",String(i))
            SaveList.draw(ctx);
            clickItems.push(SaveList)
            console.log(`text: ${this.isSave}`)
            const blackPara = new Parallelogram(45,227 + (i * 119),361.9,227  + (i * 119),270.39,320 + (i * 119),45,320 + (i * 119),1,"black")
            blackPara.draw(ctx)
            if(i == 0) {
                const TextList = new Text(76, 252 + (i * 119), `AUTO SAVE`, '#FFFFFF', 34, false, 'normal', 700, false, 1);
                TextList.draw(ctx)
            }else {
                const TextList = new Text(76, 252 + (i * 119), `DATA ${i}`, '#FFFFFF', 34, false, 'normal', 700, false, 1);
                TextList.draw(ctx)
            }
            const chapter = new Text(690, 252 + (i * 119), `NONE`, '#FFFFFF', 34, false, 'normal', 700, false, 1);
            chapter.draw(ctx)
        }
        
    }
}
