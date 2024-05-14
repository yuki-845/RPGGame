
'use strict'


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
       

        


    } //constructor() 終

    draw(ctx, canvas) {
       
    
        //魔法のスキル紹介欄
        const MagicCircle = new Circle(713,113,325,"#50A5FA")
        MagicCircle.draw(ctx)

        //魔法の詳細
        const InfoCircle = new Circle(642,611,178,"#508BFA")
        InfoCircle.draw(ctx)
        
        //ステータスの紹介
        const StatusCircle = new Circle(1332,400,283.5,"#50D3FA")
        StatusCircle.draw(ctx)
        
    }
}
